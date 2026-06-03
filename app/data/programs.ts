export type ProgramPathway = 'School' | 'International' | 'Nigerian' | 'Specialist'

export interface ProgramDetailSection {
  heading?: string
  items: string[]
}

export interface ProgramCard {
  id: string
  pathway: ProgramPathway
  badge: string
  title: string
  description: string
  details: ProgramDetailSection[]
}

export const programPathways: ProgramPathway[] = [
  'School',
  'International',
  'Nigerian',
  'Specialist',
]

export const programs: ProgramCard[] = [
  {
    id: 'primary',
    pathway: 'School',
    badge: 'AGES 5-11',
    title: 'Primary School',
    description:
      'Foundational literacy, numeracy and curiosity-led learning in a nurturing environment.',
    details: [
      {
        items: [
          'Early literacy and phonics',
          'Foundational numeracy and problem solving',
          'Creative arts, music and physical education',
          'Character formation and social skills',
        ],
      },
    ],
  },
  {
    id: 'secondary',
    pathway: 'School',
    badge: 'JSS • SSS',
    title: 'Secondary School',
    description:
      'Comprehensive Nigerian curriculum with international enrichment and exam mastery.',
    details: [
      {
        items: [
          'Junior Secondary (JSS 1—3) — BECE preparation',
          'Senior Secondary (SSS 1—3) — WAEC / NECO preparation',
          'International enrichment streams (IGCSE pathway)',
          'STEM laboratories, languages and humanities',
        ],
      },
    ],
  },
  {
    id: 'igcse',
    pathway: 'International',
    badge: 'CAMBRIDGE',
    title: 'IGCSE',
    description:
      'Internationally recognized qualifications across sciences, humanities and languages.',
    details: [
      {
        heading: 'IGCSE ADD MATHS & EXAM SOLUTIONS',
        items: [
          'Additional Maths Year 10 e-Learning Videos',
          'Revision Workbook for IGCSE Add Maths Year 10 by topics',
          'Additional Maths Year 11 e-Learning Videos',
          'Revision Workbook for IGCSE Add Maths Year 11 by topics',
          'IGCSE Add Maths Year 10 fully worked exam solutions by topics',
          'IGCSE Add Maths Year 11 fully worked exam solutions by topics',
          'IGCSE Add Maths Year 10 fully worked exam solutions by year',
          'IGCSE Add Maths Year 11 fully worked exam solutions by year',
        ],
      },
      {
        heading: 'IGCSE MATHS',
        items: [
          'IGCSE Secondary 1 Maths (Checkpoint)',
          'IGCSE Maths & Exam Solutions',
        ],
      },
    ],
  },
  {
    id: 'cambridge-alevel',
    pathway: 'International',
    badge: 'PRE-UNIVERSITY',
    title: 'Cambridge A-Level',
    description:
      'Rigorous Cambridge A-Levels preparing students for top global universities.',
    details: [
      {
        heading: 'A LEVEL CIE E-LEARNING VIDEOS',
        items: [
          'Pure Maths 1 (P1)',
          'Pure Maths 2 (P2)',
          'Pure Maths 3 (P3)',
          'Mechanics 1 (Paper 4)',
          'Mechanics 2 (Paper 5)',
          'Statistics 1 (Paper 6)',
          'Further Pure Mathematics 1 — 9231 (Paper 1)',
          'Further Pure Mathematics 2 — 9231 (Paper 2)',
          'Further Pure Mathematics 3 — 9231 (Paper 3)',
        ],
      },
      {
        heading: 'A LEVEL CIE EXAM FULL SOLUTION',
        items: [
          'Pure Maths 1 (P1) fully worked solutions',
          'Pure Maths 2 (P2) fully worked solutions',
          'Pure Maths 3 (P3) fully worked solutions',
          'Mechanics 1 (Paper 4) fully worked solutions',
          'Statistics 1 (Paper 6) fully worked solutions',
        ],
      },
    ],
  },
  {
    id: 'edexcel',
    pathway: 'International',
    badge: 'PEARSON',
    title: 'Edexcel Programs',
    description:
      'Edexcel pathways with strong UK university acceptance and modular flexibility.',
    details: [
      {
        heading: 'EDEXCEL A LEVELS',
        items: [
          'Edexcel A Levels Core Maths 1 (C1)',
          'Edexcel A Levels Core Maths 2 (C2)',
          'Edexcel A Levels Core Maths 3 (C3)',
          'Edexcel A Levels Core Maths 4 (C4)',
          'Edexcel A Levels Mechanics 1 (M1)',
          'Edexcel A Levels Mechanics 2 (M2)',
          'Edexcel A Levels Statistics 1 (S1)',
          'Edexcel A Levels Further Pure Mathematics 1 (FP1)',
          'Edexcel A Levels Further Pure Mathematics 2 (FP2)',
        ],
      },
      {
        heading: 'EDEXCEL IGCSE FURTHER PURE MATHS',
        items: [
          'e-Learning Video',
          'fully worked exam solutions',
          'Accounting (4AC1) eVideos & Past Papers',
        ],
      },
    ],
  },
  {
    id: 'ib-mathematics',
    pathway: 'International',
    badge: 'HIGHER / STANDARD',
    title: 'IB Mathematics',
    description:
      'Specialist IB Mathematics tutorials with concept-led, exam-ready preparation.',
    details: [
      {
        heading: 'IB HL',
        items: [
          'IBHL Exam Solutions for Paper 1 (by topics)',
          'IBHL Maths exam fully worked solutions',
          'IB Maths HL Option: Calculus',
          'IB Maths HL Option: Statistics and Probability',
          'IBHL Maths Paper 3 past papers fully worked solutions',
        ],
      },
      {
        heading: 'IB SL',
        items: [
          'IBSL with Analysis and Approaches',
          'IBSL with Applications and Interpretations',
          'IBSL Maths exam fully worked solutions',
        ],
      },
    ],
  },
  {
    id: 'waec-neco',
    pathway: 'Nigerian',
    badge: 'SENIOR SECONDARY',
    title: 'WAEC & NECO',
    description:
      'Structured prep, mock examinations and subject-by-subject mastery.',
    details: [
      {
        items: [
          'Full WAEC syllabus coverage across core subjects',
          'NECO past-question drills and mock examinations',
          'Subject-by-subject mastery in Maths, English, Sciences and Commercials',
          'One-on-one mentorship and progress tracking',
        ],
      },
    ],
  },
  {
    id: 'indigenous-languages',
    pathway: 'Nigerian',
    badge: 'HERITAGE',
    title: 'Indigenous Languages',
    description:
      'Strong identity through Nigerian languages alongside global curricula.',
    details: [
      {
        heading: 'LANGUAGES OFFERED',
        items: [
          'Igbo',
          'Yoruba',
          'Hausa',
          'Urhobo',
          'Edo',
          'Ibibio',
          'Other Nigerian indigenous languages on request',
          'We promote the core values of Nigerian languages by teaching our students nationally and internationally — preserving heritage while building global citizens.',
        ],
      },
    ],
  },
  {
    id: 'ielts',
    pathway: 'Specialist',
    badge: 'ACADEMIC / GENERAL',
    title: 'IELTS Preparation',
    description:
      'Strategy-driven coaching across speaking, writing, listening and reading.',
    details: [
      {
        items: [
          'Speaking — fluency, pronunciation and confidence drills',
          'Writing — Task 1 & Task 2 frameworks and marking practice',
          'Listening — accent training and note-taking strategies',
          'Reading — skimming, scanning and timed comprehension',
        ],
      },
    ],
  },
  {
    id: 'online',
    pathway: 'Specialist',
    badge: '24/7 ACCESS',
    title: 'Online Tutorials',
    description:
      'Live and on-demand tutorials with progress tracking and mentor support.',
    details: [
      {
        items: [
          'Live classes with subject specialists',
          'On-demand video library across all curricula',
          'Personal mentor support and progress tracking',
          'Downloadable workbooks and practice problem sets',
        ],
      },
    ],
  },
  {
    id: 'actuarial-science',
    pathway: 'Specialist',
    badge: 'QUANTITATIVE',
    title: 'Actuarial Science',
    description:
      'Foundations for future actuaries probability, statistics and finance.',
    details: [
      {
        heading: 'ACTUARIAL SCIENCE CORNER',
        items: [
          'CT5 Contingencies (Actuarial Mathematics)',
          'Actuarial Statistics (CS1) Course in eVideo',
          'Risk Modeling and Survival Analysis (CS2) Course in eVideo',
          'Exam P: Probability — SOA [Video]',
          'Fundamentals of Actuarial Science (FAM)',
        ],
      },
    ],
  },
  {
    id: 'physics',
    pathway: 'Specialist',
    badge: 'ADVANCED',
    title: 'Physics',
    description:
      'Concept-first physics from secondary through A-Level and beyond.',
    details: [
      {
        heading: 'A Level Physics',
        items: [
          'Cambridge International AS Level Physics 9702',
          'Cambridge International A Level Physics 9702',
          'Cambridge International A Level Physics (9702) by Mr. Tan',
          'CIE A Level Physics 9702 Paper 4 fully worked exam solutions by topic',
          'CIE A Level Physics 9702 Paper 4 fully worked exam solutions by year',
        ],
      },
    ],
  },
  {
    id: 'accounting',
    pathway: 'Specialist',
    badge: 'BUSINESS',
    title: 'Accounting',
    description:
      'Financial literacy, bookkeeping and exam-grade accounting principles.',
    details: [
      {
        items: [
          'Cambridge IGCSE Accounting (0452) e-Learning Videos & Exam Solutions',
          'Edexcel IGCSE Accounting (4AC1) eVideos & Past Papers',
          'Cambridge International AS & A Level Accounting',
        ],
      },
    ],
  },
]
