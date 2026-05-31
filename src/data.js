/* ============================================================
   Copy — bilingual content
   ============================================================ */
export const COPY = {
  en: {
    nav: { work: "Work", about: "About", stack: "Stack", career: "Career", contact: "Contact" },
    heroMeta: "Available for freelance · 2026",
    heroTagline: ["ENGINEER", "CREATOR"],
    heroBio: "Freelance Web & iOS Engineer based in Tokyo. Building digital products that pair engineering precision with editorial taste.",
    heroBioJp: "Freelance Web & iOS Engineer · Based in Tokyo · Available for projects",
    stats: [
      { n: "07", l: "Active Projects" },
      { n: "02", l: "Shipped" },
      { n: "∞",  l: "Open to Brief" },
    ],
    aboutLabel: "About",
    aboutTitle: ["Engineering as a", "craft, not a", "checklist."],
    aboutBody: [
      { lead: "I'm RIN —", rest: " a freelance engineer who treats every interface as a piece of digital architecture. Detail, motion, and material matter as much as the code beneath." },
      { rest: "Currently studying Systems Engineering and Science at Shibaura Institute of Technology, on leave to focus on freelance work. Joining The Japan Research Institute in 2027." },
      { rest: "Available for select freelance briefs across Web, iOS, and AI integration. Long-term collaborations preferred." },
    ],
    aboutTags: [
      ["gold", "Available"],
      ["", "Freelance Engineer"],
      ["", "Web Developer"],
      ["", "iOS / SwiftUI"],
      ["", "AI Integration"],
      ["", "TypeScript"],
      ["", "Tokyo / Remote"],
    ],
    aboutMeta: [
      { n: "23", a: "/ 26", l: "Age" },
      { n: "05", a: " yr", l: "Experience" },
      { n: "JP", a: " / EN", l: "Languages" },
    ],
    worksLabel: "Selected Work",
    worksTitle: ["A portfolio in", "motion."],
    worksSub: "Three shipped, three in flight. Each project is a deliberate study in a specific brief — brand site, business tool, AI surface, corporate web.",
    techLabel: "Tech Stack",
    techTitle: ["Tools, picked with", "intent."],
    techSub: "A focused stack chosen for velocity, type safety, and design fidelity. New tools are added only when a brief demands them.",
    careerLabel: "Career / Timeline",
    careerTitle: ["A path drawn in", "real time."],
    contactLabel: "Contact",
    contactH: ["Got a brief?", "Let's talk."],
    contactSub: "I take on a small number of freelance projects each month. Brand sites, product UIs, iOS apps, and AI-integrated tools are most welcome.",
    contactForm: {
      sending: "Sending…",
      success: "Thank you — your brief has been sent. I'll get back to you soon.",
      error: "Something went wrong. Please try again or email me directly.",
      notConfigured: "The form is not configured yet. Please use the email address on the left.",
      required: "Required",
      invalidEmail: "Enter a valid email address",
    },
    avatarTag: "RIN / 2026",
    avatarPh: "Portrait",
  },
  jp: {
    nav: { work: "Work", about: "About", stack: "Stack", career: "Career", contact: "Contact" },
    heroMeta: "フリーランス受注中 · 2026",
    heroTagline: ["ENGINEER", "CREATOR"],
    heroBio: "東京を拠点に活動するフリーランスのWeb / iOSエンジニア。技術的精度と編集的なセンスを両立したプロダクト制作。",
    heroBioJp: "Freelance Web & iOS Engineer · Tokyo · Available for projects",
    stats: [
      { n: "07", l: "進行中の案件" },
      { n: "02", l: "完成済み" },
      { n: "∞",  l: "ご相談歓迎" },
    ],
    aboutLabel: "About",
    aboutTitle: ["エンジニアリングは", "作業ではなく", "クラフト。"],
    aboutBody: [
      { lead: "RINです。", rest: "あらゆるインターフェースを「デジタルの建築」として設計するフリーランスエンジニア。コードの裏側と同じくらい、ディテール・モーション・質感を大切にしています。" },
      { rest: "芝浦工業大学 システム理工学部 在学中（休学・フリーランス専念）。2027年4月、株式会社日本総合研究所に新卒入社予定。" },
      { rest: "Web / iOS / AI 統合領域でのフリーランス案件を募集中。長期的なご相談を歓迎します。" },
    ],
    aboutTags: [
      ["gold", "受注可能"],
      ["", "フリーランス"],
      ["", "Web 開発"],
      ["", "iOS / SwiftUI"],
      ["", "AI 統合"],
      ["", "TypeScript"],
      ["", "東京 / リモート"],
    ],
    aboutMeta: [
      { n: "23", a: "歳", l: "Age" },
      { n: "05", a: "年", l: "Experience" },
      { n: "JP", a: " / EN", l: "Languages" },
    ],
    worksLabel: "制作実績",
    worksTitle: ["動き続ける", "ポートフォリオ。"],
    worksSub: "完成3件、開発中3件。それぞれ異なる課題に対する明確なスタディとして — ブランドサイト、業務ツール、AIサーフェス、コーポレートWebなど。",
    techLabel: "Tech Stack",
    techTitle: ["意図して選んだ", "ツール群。"],
    techSub: "速度・型安全性・デザインの再現性を基準に絞り込んだスタック。案件が要求する場合のみ新しいツールを追加します。",
    careerLabel: "Career / Timeline",
    careerTitle: ["リアルタイムで", "描いている経路。"],
    contactLabel: "Contact",
    contactH: ["ご相談は", "お気軽に。"],
    contactSub: "毎月少数のフリーランス案件をお受けしています。ブランドサイト、プロダクトUI、iOSアプリ、AI統合ツールを特に歓迎します。",
    contactForm: {
      sending: "送信中…",
      success: "お問い合わせを送信しました。折り返しご連絡いたします。",
      error: "送信に失敗しました。もう一度お試しいただくか、左のメールアドレスまでご連絡ください。",
      notConfigured: "フォームの設定が未完了です。左記のメールアドレスをご利用ください。",
      required: "必須項目です",
      invalidEmail: "有効なメールアドレスを入力してください",
    },
    avatarTag: "RIN / 2026",
    avatarPh: "ポートレート",
  },
}

/* ============================================================
   Clients / Adopted projects
   ============================================================ */
export const CLIENTS = {
  count: 1,
  items: [
    { name: null, year: "2026", kind: { en: "Web", jp: "Web制作" }, status: "ndisclosed" },
  ],
}

/* ============================================================
   Works data
   ============================================================ */
export const WORKS = [
  {
    id: "02", num: "01", cat: "iOS App", size: "md", status: "done",
    mark: "CD",
    title: { en: "cast-dashboard — Performance Manager", jp: "cast-dashboard — キャスト実績管理" },
    desc: {
      en: "Industry-specific iOS app: payroll, penalty logic, monthly reporting, PDF export, and an AI RAG chat.",
      jp: "業界特化iOSアプリ。給与計算・ペナルティロジック・月次実績・PDF出力・AI RAG チャットを実装。",
    },
    stack: ["Swift", "SwiftUI", "Supabase", "Google OAuth"],
  },
  {
    id: "03", num: "02", cat: "Web", size: "md", status: "done",
    mark: "RIN",
    title: { en: "Portfolio v2.0 (this site)", jp: "ポートフォリオ リニューアル（本サイト）" },
    desc: {
      en: "The hub for every other project. 3D, scroll choreography, Digital Luxury concept — engineered as the lead-funnel for freelance briefs.",
      jp: "全案件の入口。3Dモデル・スクロールアニメ・Digital Luxury の体現。案件獲得の核となるブランドサイト。",
    },
    stack: ["React", "TypeScript", "Spline", "GSAP", "Framer Motion"],
  },
  {
    id: "04", num: "03", cat: "Landing", size: "sm", status: "done",
    mark: "LP",
    title: { en: "Multi-Industry LP Set", jp: "業種別マルチLP集" },
    desc: {
      en: "Three landing pages — F&B, beauty, fitness — to demonstrate range against the highest-volume CrowdWorks category.",
      jp: "クラウドワークス案件最多ジャンル対応。飲食・美容・パーソナルジム等、複数業種のLPを制作。",
    },
    stack: ["HTML", "CSS", "JS", "React"],
  },
  {
    id: "05", num: "04", cat: "SaaS", size: "sm", status: "plan",
    mark: "DSH",
    title: { en: "SaaS Admin Dashboard", jp: "SaaS風 管理ダッシュボード" },
    desc: {
      en: "A revenue & customer dashboard for SMBs — generalising what was learned from cast-dashboard into a higher-tier offer.",
      jp: "中小企業向け売上・顧客管理ダッシュボード。cast-dashboard の設計を汎用化。",
    },
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
  },
  {
    id: "06", num: "05", cat: "AI", size: "sm", status: "plan",
    mark: "AI",
    title: { en: "AI Chatbot Web App", jp: "AIチャットボット組込Webアプリ" },
    desc: {
      en: "Industry-tuned chatbot built on Claude API. Demonstrates a fluency in the AI surface area that briefs are increasingly asking for.",
      jp: "Claude API を活用した業種特化チャットボット。AI 案件需要急増のトレンドに対応。",
    },
    stack: ["React", "TypeScript", "Claude API", "Vercel"],
  },
  {
    id: "07", num: "06", cat: "Web", size: "md", status: "plan",
    mark: "3D",
    title: { en: "Three.js × Fictional Corporate Site", jp: "Three.js × 架空企業Webサイト" },
    desc: {
      en: "A high-quality corporate site for a fictional startup — applying the Three.js system from this portfolio at production scale.",
      jp: "03で培った Three.js 技術を応用した架空スタートアップの高品質コーポレートサイト。",
    },
    stack: ["React", "TypeScript", "Three.js", "GSAP"],
  },
]

/* ============================================================
   Tech stack data
   ============================================================ */
export const TECH = [
  {
    cat: "Frontend", num: "01",
    items: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
    ],
  },
  {
    cat: "Mobile / iOS", num: "02",
    items: [
      { name: "Swift", level: 4 },
      { name: "SwiftUI", level: 4 },
      { name: "Combine", level: 3 },
      { name: "Xcode / TestFlight", level: 4 },
    ],
  },
  {
    cat: "3D / Motion", num: "03",
    items: [
      { name: "Spline", level: 4 },
      { name: "Three.js + R3F", level: 3 },
      { name: "GSAP / ScrollTrigger", level: 4 },
      { name: "Lottie", level: 3 },
    ],
  },
  {
    cat: "Backend / AI", num: "04",
    items: [
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "Claude API", level: 4 },
      { name: "OpenAI API", level: 4 },
      { name: "Vercel / Edge", level: 4 },
    ],
  },
]

/* ============================================================
   Career timeline
   ============================================================ */
export const CAREER = [
  {
    when: "2022",
    smallEn: "Bachelor's", smallJp: "入学",
    en: ["Shibaura Institute of Technology, ", "College of Systems Engineering and Science", " — enrolled"], emEn: 1,
    jp: ["芝浦工業大学 ", "システム理工学部", " 入学"], emJp: 1,
    type: "",
  },
  {
    when: "2025 — 2026",
    smallEn: "Internships", smallJp: "インターン",
    en: ["Internships through job-hunting at ", "JRI · TIS · Daiwa Institute of Research · AKKODiS Consulting"], emEn: 1,
    jp: ["就活を通じて ", "JRI・TIS・大和総研・AKKODiSコンサルティング", " にてインターンを経験"], emJp: 1,
    type: "",
  },
  {
    when: "2026 —",
    smallEn: "Now", smallJp: "現在",
    en: ["Started ", "freelance practice in earnest", "; on academic leave for one year to focus on it"], emEn: 1,
    jp: ["フリーランスとして", "本格的に活動開始", "。同理由により大学を一年休学"], emJp: 1,
    type: "gold",
  },
  {
    when: "2027 · 03",
    smallEn: "Planned", smallJp: "卒業予定",
    en: ["Graduation — ", "B.E. Systems Engineering and Science", ", Shibaura Institute of Technology"], emEn: 1,
    jp: ["芝浦工業大学 ", "システム理工学部 卒業", "予定"], emJp: 1,
    type: "future",
  },
  {
    when: "2027 · 04",
    smallEn: "New grad", smallJp: "入社予定",
    en: ["Joining ", "The Japan Research Institute", " (JRI)"], emEn: 1,
    jp: ["", "日本総合研究所", " 入社予定"], emJp: 1,
    type: "future",
  },
]
