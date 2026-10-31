// ─────────────────────────────────────────────────────────────
//  NXTUP founders — the ONE place to edit founder content.
//  Used by the homepage cards and by each founder page
//  (founder.html?f=<slug>) and the all-founders page (founders.html).
//
//  slug     – the page address, e.g. founder.html?f=viktor-redecker
//  role     – small green line above the name
//  line     – one-sentence summary (card + page headline)
//  img/pos  – photo and which part of it to keep in frame
//  video    – paste any YouTube link (youtube.com/watch?v=…, youtu.be/…,
//             youtube.com/shorts/…). Leave '' to show "Video coming soon".
//  bio      – paragraphs of text about the founder. Leave [] to hide
//             the "About" section until the text is ready.
//  website  – optional link, shown as a "Visit website" button.
//
//  ORDER: founders appear in the order of this list. The FIRST 4
//  are the ones shown on the homepage; everyone appears on
//  founders.html. Put a new founder at the top to feature them.
//
//  To add a founder: copy one { … } block, change the values,
//  and put the photo in assets/img/.
// ─────────────────────────────────────────────────────────────
window.NXTUP_FOUNDERS = [
  {
    slug: 'rebekka-hofmann',
    name: 'Dr. Rebekka Hofmann',
    role: 'CEO @ HLTHY',
    line: 'Turning smartwatch data into real preventive care.',
    img: 'assets/img/dr-rebekka-hofmann.jpg', pos: '50% 20%',
    video: '',
    bio: [],
    website: ''
  },
  {
    slug: 'viktor-redecker',
    name: 'Viktor Redecker',
    role: 'FOUNDER @ PAPIRIA',
    line: 'Ending document chaos and missed deadlines.',
    img: 'assets/img/viktor-redecker.jpg', pos: '50% 20%',
    video: '',
    bio: [],
    website: ''
  },
  {
    slug: 'giulio-novelli',
    name: 'Giulio Novelli',
    role: 'FOUNDER @ CLOSEWISE',
    line: 'AI reconciliation for hospitality venues.',
    img: 'assets/img/giulio-novelli.jpg', pos: '50% 20%',
    video: '',
    bio: [],
    website: ''
  },
  {
    slug: 'edoardo-darpa',
    name: 'Edoardo D’Arpa',
    role: 'FOUNDER @ FARORISK',
    line: 'Fast supply-chain risk intelligence for mid-market companies.',
    img: 'assets/img/edoardo-darpa.jpg', pos: '50% 20%',
    video: '',
    bio: [],
    website: ''
  },
  {
    slug: 'luca-ceccarelli',
    name: 'Luca Ceccarelli',
    role: 'GM @ HERENCIA',
    line: 'PUPILYX: a low-cost digital test for early brain changes.',
    img: 'assets/img/luca-ceccarelli.jpg', pos: '50% 30%',
    video: '',
    bio: [],
    website: ''
  },
  {
    slug: 'salva-jovells',
    name: 'Salva Jovells',
    role: 'FOUNDER @ CLINO',
    line: 'Hiring household help legally, without the paperwork.',
    img: 'assets/img/salva-jovells.jpg', pos: '50% 8%',
    video: '',
    bio: [],
    website: ''
  }
];
