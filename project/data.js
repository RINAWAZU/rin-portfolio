// Content data — EN/JP, works, tech, timeline
window.RIN_DATA = {
  works: [
    {
      num: "01",
      title: { en: "King & Queen", jp: "King & Queen" },
      tagline: { en: "Official brand site", jp: "公式ブランドサイト" },
      desc: {
        en: "Brand site for nightclub King & Queen — venue info, cast roster, reservation flow. First freelance commission.",
        jp: "ナイトクラブ「King & Queen」の公式サイト。店舗情報・キャスト紹介・予約導線を実装。フリーランス第1号案件。"
      },
      cat: "WEB",
      stack: ["React", "TypeScript", "Tailwind", "Vercel"],
      status: "done",
      mark: "K",
      size: "lg"
    },
    {
      num: "02",
      title: { en: "cast-dashboard", jp: "cast-dashboard" },
      tagline: { en: "Industry-specific iOS app", jp: "業界特化 iOSアプリ" },
      desc: {
        en: "iOS app for nightlife managers — payroll math, penalty logic, monthly reports, PDF export, RAG-AI chat.",
        jp: "夜職マネージャー向けiOSアプリ。給与計算・ペナルティロジック・月次実績・PDF出力・AI RAGチャット。"
      },
      cat: "APP",
      stack: ["Swift", "SwiftUI", "Supabase", "Google OAuth"],
      status: "done",
      mark: "C",
      size: "md"
    },
    {
      num: "03",
      title: { en: "Portfolio Renewal", jp: "ポートフォリオ刷新" },
      tagline: { en: "This site", jp: "本サイト" },
      desc: {
        en: "The hub for every other project. 3D model, scroll choreography, Digital Luxury concept. Core of inbound channel.",
        jp: "全案件の入口となる最重要プロジェクト。3Dモデル・スクロール演出・Digital Luxuryを実装。"
      },
      cat: "WEB",
      stack: ["React", "Spline", "Three.js", "GSAP", "Framer Motion"],
      status: "dev",
      mark: "R",
      size: "md"
    },
    {
      num: "04",
      title: { en: "Multi-LP Showcase", jp: "業種別マルチLP" },
      tagline: { en: "Restaurant · beauty · gym", jp: "飲食 / 美容 / ジム" },
      desc: {
        en: "Three fictional LPs across the most-requested freelance verticals to demonstrate plug-and-play delivery speed.",
        jp: "クラウドワークス需要最多ジャンル対応。各業種の架空LPで「即戦力感」を訴求。"
      },
      cat: "LP",
      stack: ["HTML", "CSS", "JS", "React"],
      status: "plan",
      mark: "L",
      size: "sm"
    },
    {
      num: "05",
      title: { en: "Admin Dashboard", jp: "管理ダッシュボード" },
      tagline: { en: "SaaS-style ops UI", jp: "SaaS風 業務UI" },
      desc: {
        en: "Sales & customer ops dashboard for SMB. Generalises cast-dashboard's design system into a high-ticket reference build.",
        jp: "中小企業向け売上・顧客管理。cast-dashboardの設計を汎用化した高単価向けポートフォリオ。"
      },
      cat: "SAAS",
      stack: ["React", "Supabase", "Recharts", "Tailwind"],
      status: "plan",
      mark: "S",
      size: "sm"
    },
    {
      num: "06",
      title: { en: "AI Chatbot Build", jp: "AI チャットボット" },
      tagline: { en: "Claude API integration", jp: "Claude API 連携" },
      desc: {
        en: "Vertical-specific chatbot (F&B FAQ etc.) on Claude API. Targets the AI-integration brief that's exploding right now.",
        jp: "Claude API活用の業種特化チャットボット。需要急増のAI案件で差別化。"
      },
      cat: "AI",
      stack: ["React", "Claude API", "Vercel"],
      status: "plan",
      mark: "A",
      size: "sm"
    },
    {
      num: "07",
      title: { en: "Three.js Corporate", jp: "Three.js コーポレート" },
      tagline: { en: "Fictional company site", jp: "架空企業 Webサイト" },
      desc: {
        en: "High-quality corporate site for a fictional startup. Pushes the 3D craft from #03 into client-shape deliverables.",
        jp: "架空スタートアップの高品質コーポレート。03で培った3D技術を企業サイトレベルへ応用。"
      },
      cat: "WEB",
      stack: ["React", "Three.js", "GSAP", "Vercel"],
      status: "plan",
      mark: "T",
      size: "md"
    }
  ],

  tech: [
    {
      cat: "Frontend",
      items: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "Next.js", level: 4 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Framer Motion", level: 4 }
      ]
    },
    {
      cat: "3D & Motion",
      items: [
        { name: "Spline", level: 4 },
        { name: "Three.js", level: 3 },
        { name: "GSAP", level: 4 },
        { name: "ScrollTrigger", level: 4 }
      ]
    },
    {
      cat: "Mobile & Backend",
      items: [
        { name: "Swift / SwiftUI", level: 4 },
        { name: "Supabase", level: 4 },
        { name: "Node.js", level: 4 },
        { name: "Postgres", level: 3 }
      ]
    },
    {
      cat: "AI & Tools",
      items: [
        { name: "Claude API", level: 4 },
        { name: "RAG pipelines", level: 3 },
        { name: "Vercel", level: 5 },
        { name: "Git / GitHub", level: 5 },
        { name: "Figma", level: 4 }
      ]
    }
  ],

  timeline: [
    { when: "2021.04", what: { en: "Shibaura Institute of Technology — admitted", jp: "芝浦工業大学 情報工学部 入学" }, kind: "default" },
    { when: "2023 — 25", what: { en: "Internships — CTC · TIS · JRI", jp: "CTC・TIS・JRI インターンシップ" }, kind: "default" },
    { when: "2025", what: { en: "Began freelance web development", jp: "フリーランス Web開発 開始" }, kind: "gold" },
    { when: "2025 — now", what: { en: "On academic leave — full-time on dev & freelance", jp: "休学中 — 開発・フリーランスに専念" }, kind: "gold" },
    { when: "2027.03", what: { en: "Graduation (planned)", jp: "卒業予定" }, kind: "future" },
    { when: "2027.04", what: { en: "Joining Japan Research Institute", jp: "株式会社日本総合研究所 入社予定" }, kind: "future" }
  ]
};
