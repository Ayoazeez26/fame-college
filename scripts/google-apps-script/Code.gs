/**
 * Fame College International School — Application Form Handler
 *
 * Setup: run setupSheet() once from the Apps Script editor.
 * Deploy: Web app — Execute as Me, Who has access: Anyone
 */

const CONFIG = {
  SHEET_NAME: 'Applications',
  ADMIN_EMAIL: 'famecollegeeket@yahoo.com',
  SCHOOL_NAME: 'Fame College International School',
  SCHOOL_EMAIL: 'famecollegeeket@yahoo.com',
  FORM_SECRET: 'change-me-to-a-random-string',
  COLORS: {
    NAVY: '#0D1C3A',
    GREEN: '#37905B',
    BORDER: '#DBDDE2',
    ROW_ALT: '#F9FAFB',
    WHITE: '#FFFFFF',
  },
  PROGRAM_OPTIONS: [
    'Primary School',
    'Secondary School',
    'IGCSE',
    'A-Level',
    'IELTS Preparation',
    'Online Tutorials',
  ],
  AGE_OPTIONS: ['5-7', '8-11', '12-15', '16-18', '18+'],
  GRADE_OPTIONS: [
    'Primary 1-6',
    'JSS 1-3',
    'SSS 1-3',
    'A-Level',
    'Other',
  ],
  HEADERS: [
    'Timestamp',
    'First Name',
    'Email',
    'Phone',
    'Programme of Interest',
    'Age',
    'Grade Level',
    'Address',
    'Message',
    'Status',
  ],
};

// ─── Setup (run once) ───────────────────────────────────────────────────────

/**
 * Creates or resets the Applications sheet with headers, styling, and validation.
 * Run from Apps Script editor: Run → setupSheet
 */
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (sheet) {
    sheet.clear();
  } else {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  const headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
  headerRange.setValues([CONFIG.HEADERS]);
  headerRange
    .setBackground(CONFIG.COLORS.NAVY)
    .setFontColor(CONFIG.COLORS.WHITE)
    .setFontWeight('bold')
    .setFontSize(11)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);

  sheet.setRowHeight(1, 44);
  sheet.setFrozenRows(1);

  const widths = [160, 140, 200, 130, 180, 80, 120, 220, 280, 90];
  widths.forEach(function (w, i) {
    sheet.setColumnWidth(i + 1, w);
  });

  sheet.getRange('A2:J1000').applyRowBanding(
    SpreadsheetApp.BandingTheme.LIGHT_GREY,
    false,
    false
  );

  const dataRange = sheet.getRange(2, 1, 999, CONFIG.HEADERS.length);
  dataRange
    .setBorder(
      true,
      true,
      true,
      true,
      true,
      true,
      CONFIG.COLORS.BORDER,
      SpreadsheetApp.BorderStyle.SOLID
    )
    .setVerticalAlignment('top')
    .setWrap(true);

  addDropdownValidation_(sheet, 'E', CONFIG.PROGRAM_OPTIONS);
  addDropdownValidation_(sheet, 'F', CONFIG.AGE_OPTIONS);
  addDropdownValidation_(sheet, 'G', CONFIG.GRADE_OPTIONS);
  addDropdownValidation_(sheet, 'J', ['New', 'Contacted', 'Enrolled', 'Closed']);

  sheet.getRange('A2:A1000').setNumberFormat('dd mmm yyyy, hh:mm');

  try {
    const filter = sheet.getFilter();
    if (filter) filter.remove();
  } catch (err) {
    // no existing filter
  }
  headerRange.createFilter();

  try {
    const protection = sheet.getRange('A1:J1').protect().setDescription('Header row');
    protection.setWarningOnly(true);
  } catch (err) {
    Logger.log('Could not protect header: ' + err);
  }

  sheet.getRange('A1').setNote(
    'Fame College application submissions. Do not delete the header row.'
  );

  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Applications sheet is ready.',
    CONFIG.SCHOOL_NAME,
    5
  );
}

function addDropdownValidation_(sheet, columnLetter, options) {
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(options, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(columnLetter + '2:' + columnLetter + '1000').setDataValidation(rule);
}

// ─── Web app endpoint ─────────────────────────────────────────────────────────

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'Missing request body' }, 400);
    }

    const data = JSON.parse(e.postData.contents);

    if (CONFIG.FORM_SECRET && data.secret !== CONFIG.FORM_SECRET) {
      return jsonResponse_({ ok: false, error: 'Unauthorized' }, 403);
    }

    const firstName = trim_(data.firstName);
    const email = trim_(data.email);

    if (!firstName) {
      return jsonResponse_({ ok: false, error: 'First name is required' }, 400);
    }
    if (!email || !isValidEmail_(email)) {
      return jsonResponse_({ ok: false, error: 'A valid email is required' }, 400);
    }

    const row = {
      firstName: firstName,
      email: email,
      phone: trim_(data.phone),
      program: trim_(data.program),
      age: trim_(data.age),
      grade: trim_(data.grade),
      address: trim_(data.address),
      message: trim_(data.message),
    };

    appendRow_(row);
    sendApplicantEmail_(row);
    sendAdminEmail_(row);

    return jsonResponse_({ ok: true });
  } catch (err) {
    Logger.log('doPost error: ' + err);
    return jsonResponse_({ ok: false, error: 'Server error. Please try again.' }, 500);
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: 'Fame College application endpoint is live.' });
}

// ─── Sheet helpers ────────────────────────────────────────────────────────────

function appendRow_(data) {
  const sheet = getApplicationsSheet_();
  sheet.appendRow([
    new Date(),
    data.firstName,
    data.email,
    data.phone,
    data.program,
    data.age,
    data.grade,
    data.address,
    data.message,
    'New',
  ]);
}

function getApplicationsSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    throw new Error('Sheet "' + CONFIG.SHEET_NAME + '" not found. Run setupSheet() first.');
  }
  return sheet;
}

// ─── Email ──────────────────────────────────────────────────────────────────

function sendApplicantEmail_(data) {
  const subject =
    'We received your application — ' + CONFIG.SCHOOL_NAME;

  const htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1832;">' +
    emailHeader_('Application Received') +
    '<div style="padding:24px 28px;line-height:1.6;font-size:15px;">' +
    '<p>Hi ' + escapeHtml_(data.firstName) + ',</p>' +
    '<p>Thank you for applying to <strong>' +
    escapeHtml_(CONFIG.SCHOOL_NAME) +
    '</strong>. We have received your application and our admissions team will review it shortly.</p>' +
    summaryTable_(data) +
    '<p style="margin-top:24px;">We aim to respond within <strong>24 hours</strong> on business days. If you have urgent questions, reply to this email or call our admissions line.</p>' +
    '<p style="margin-top:24px;color:#6B7280;font-size:13px;">Warm regards,<br><strong>Admissions Team</strong><br>' +
    escapeHtml_(CONFIG.SCHOOL_NAME) +
    '</p>' +
    '</div>' +
    emailFooter_() +
    '</div>';

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.SCHOOL_NAME,
    replyTo: CONFIG.SCHOOL_EMAIL,
  });
}

function sendAdminEmail_(data) {
  const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const subject =
    'New application — ' +
    data.firstName +
    (data.program ? ' (' + data.program + ')' : '');

  const htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1832;">' +
    emailHeader_('New Application') +
    '<div style="padding:24px 28px;line-height:1.6;font-size:15px;">' +
    '<p>A new application was submitted via the website.</p>' +
    summaryTable_(data) +
    '<p style="margin-top:24px;">' +
    '<a href="' +
    sheetUrl +
    '" style="display:inline-block;background:#0D1C3A;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;">Open Google Sheet</a>' +
    '</p>' +
    '</div>' +
    emailFooter_() +
    '</div>';

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.SCHOOL_NAME + ' Website',
    replyTo: data.email,
  });
}

function emailHeader_(title) {
  return (
    '<div style="background:#0D1C3A;color:#fff;padding:28px;border-radius:12px 12px 0 0;">' +
    '<p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#37905B;">' +
    CONFIG.SCHOOL_NAME +
    '</p>' +
    '<h1 style="margin:0;font-size:22px;font-weight:600;font-family:Georgia,serif;">' +
    escapeHtml_(title) +
    '</h1>' +
    '</div>'
  );
}

function emailFooter_() {
  return (
    '<div style="background:#F9FAFB;padding:16px 28px;border-radius:0 0 12px 12px;border-top:1px solid #DBDDE2;font-size:12px;color:#6B7280;">' +
    'This is an automated message from the Fame College website application form.' +
    '</div>'
  );
}

function summaryTable_(data) {
  const rows = [
    ['Name', data.firstName],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Programme', data.program || '—'],
    ['Age', data.age || '—'],
    ['Grade', data.grade || '—'],
    ['Address', data.address || '—'],
    ['Message', data.message || '—'],
  ];

  let table =
    '<table style="width:100%;border-collapse:collapse;margin-top:20px;font-size:14px;">';
  rows.forEach(function (row) {
    table +=
      '<tr>' +
      '<td style="padding:10px 12px;border:1px solid #DBDDE2;background:#F9FAFB;font-weight:600;width:38%;vertical-align:top;">' +
      escapeHtml_(row[0]) +
      '</td>' +
      '<td style="padding:10px 12px;border:1px solid #DBDDE2;vertical-align:top;">' +
      escapeHtml_(row[1]) +
      '</td>' +
      '</tr>';
  });
  table += '</table>';
  return table;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function jsonResponse_(payload, statusCode) {
  if (statusCode) {
    payload.status = statusCode;
  }
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function trim_(value) {
  return String(value || '').trim();
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml_(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
