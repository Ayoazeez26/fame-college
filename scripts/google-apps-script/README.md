# Google Apps Script — Application Form

This script powers the Fame College website application form. It:

1. Appends each submission to a styled **Applications** Google Sheet
2. Sends a **confirmation email** to the applicant
3. Sends a **notification email** to admissions

## One-time setup

### 1. Create the spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet (e.g. `Fame College Applications`).
2. Open **Extensions → Apps Script**.
3. Delete any default code and paste the contents of [`Code.gs`](./Code.gs) from this folder.

### 2. Configure constants

At the top of `Code.gs`, update `CONFIG` if needed:

| Constant | Purpose |
|----------|---------|
| `ADMIN_EMAIL` | Admissions inbox that receives new-application alerts |
| `SCHOOL_EMAIL` | Reply-to address on applicant emails |
| `FORM_SECRET` | Shared secret — must match `NUXT_PUBLIC_APPLICATION_FORM_SECRET` in the Nuxt site |

Generate a random secret, for example:

```bash
openssl rand -hex 32
```

### 3. Run `setupSheet()`

1. In the Apps Script editor, select **`setupSheet`** from the function dropdown.
2. Click **Run**.
3. Authorize the script when prompted (Sheets + Gmail send permissions).
4. Return to the spreadsheet — you should see an **Applications** tab with a styled header row, filters, and dropdown validation.

### 4. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Type: **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and copy the **Web app URL** (ends with `/exec`).

### 5. Connect the Nuxt site

In the project root, create `.env`:

```env
NUXT_PUBLIC_APPLICATION_FORM_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NUXT_PUBLIC_APPLICATION_FORM_SECRET=your-random-secret
```

Restart the dev server after changing env vars.

## Testing

### Test the endpoint

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "your-random-secret",
    "firstName": "Test",
    "email": "you@example.com",
    "phone": "09000000000",
    "program": "IGCSE",
    "age": "12-15",
    "grade": "SSS 1-3",
    "address": "Eket",
    "message": "Test submission"
  }'
```

Expected response: `{"ok":true}`

Check:

- A new row in the **Applications** sheet
- Confirmation email to the test address
- Admin notification to `ADMIN_EMAIL`

### Test from the website

1. Run `npm run dev`
2. Submit the form on the Contact section
3. Confirm success message and emails

## Updating the script

After editing `Code.gs`:

1. **Deploy → Manage deployments**
2. Edit the existing deployment → **Version: New version**
3. Click **Deploy**

The web app URL stays the same; only the code version changes.

## Sheet columns

| Column | Field |
|--------|--------|
| A | Timestamp |
| B | First Name |
| C | Email |
| D | Phone |
| E | Programme of Interest |
| F | Age |
| G | Grade Level |
| H | Address |
| I | Message |
| J | Status (New / Contacted / Enrolled / Closed) |

## Limits and notes

- **Gmail quota:** ~100 emails/day on free Google accounts (2 emails per submission).
- **FORM_SECRET** is visible in the static site bundle — it blocks casual abuse, not determined attackers. Add reCAPTCHA later if needed.
- Applicant emails are sent **from** the Google account that owns the script; they may show “via gmail.com” until a custom domain is configured in Google Workspace.
- Run **`setupSheet()`** again only if you need to reset formatting — it clears existing data on the Applications tab.
