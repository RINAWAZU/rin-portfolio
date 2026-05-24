/* eslint-disable */
/* global React, ReactDOM */

const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   Copy — bilingual content
   ============================================================ */
const COPY = {
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
    avatarTag: "RIN / 2026",
    avatarPh: "ポートレート",
  },
};

/* ============================================================
   Works data
   ============================================================ */
const CLIENTS = {
  count: 1,
  // List of adopted projects' client names. Currently undisclosed.
  // Future format: { name, year, kind, status: "disclosed" | "ndisclosed" }
  items: [
    { name: null, year: "2026", kind: { en: "Web", jp: "Web制作" }, status: "ndisclosed" },
  ],
};

const WORKS = [
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
];

/* ============================================================
   Tech stack data
   ============================================================ */
const TECH = [
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
];

/* ============================================================
   Career timeline
   ============================================================ */
const CAREER = [
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
];

/* ============================================================
   Custom cursor
   ============================================================ */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const [mode, setMode] = useState("");

  useEffect(() => {
    let raf;
    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest("a, button, .filter-chip, .tag, .work-card, input, textarea, .copy-pill, .lang-switch button")) {
        setMode("hover");
      } else if (t.closest("p, h1, h2, h3, .work-desc, .about-body")) {
        setMode("text");
      } else {
        setMode("");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className={`cursor-ring ${mode}`}></div>
    </>
  );
}

/* ============================================================
   3D placeholder — animated polyhedron (canvas) — stand-in for Spline
   `shape` selects geometry: octa | tetra | cube | icosa | diamond
   `size` is a multiplier for relative size in its container
   `mouseTrack` = true follows global mouse (used for hero)
   ============================================================ */
const SHAPE_LIBRARY = {
  // Octahedron — 6 verts
  octa: () => ({
    vertices: [
      [0,-1,0],[0,1,0],
      [1,0,0],[-1,0,0],
      [0,0,1],[0,0,-1],
    ],
    edges: [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]],
    faces: [[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,4,2],[1,3,4],[1,5,3],[1,2,5]],
  }),
  // Tetrahedron — 4 verts
  tetra: () => {
    const a = 1;
    const v = [
      [ a, a, a],
      [-a,-a, a],
      [-a, a,-a],
      [ a,-a,-a],
    ];
    return {
      vertices: v,
      edges: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
      faces: [[0,1,2],[0,2,3],[0,3,1],[1,3,2]],
    };
  },
  // Cube — 8 verts
  cube: () => {
    const v = [
      [-1,-1,-1],[ 1,-1,-1],[ 1, 1,-1],[-1, 1,-1],
      [-1,-1, 1],[ 1,-1, 1],[ 1, 1, 1],[-1, 1, 1],
    ];
    return {
      vertices: v,
      edges: [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],
      faces: [
        [0,1,2],[0,2,3],   // back
        [4,6,5],[4,7,6],   // front
        [0,4,5],[0,5,1],   // bottom
        [3,2,6],[3,6,7],   // top
        [0,3,7],[0,7,4],   // left
        [1,5,6],[1,6,2],   // right
      ],
    };
  },
  // Icosahedron — 12 verts
  icosa: () => {
    const t = (1 + Math.sqrt(5)) / 2;
    const norm = Math.sqrt(1 + t * t);
    const v = [
      [-1, t, 0],[ 1, t, 0],[-1,-t, 0],[ 1,-t, 0],
      [ 0,-1, t],[ 0, 1, t],[ 0,-1,-t],[ 0, 1,-t],
      [ t, 0,-1],[ t, 0, 1],[-t, 0,-1],[-t, 0, 1],
    ].map(p => p.map(c => c / norm));
    const f = [
      [0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],
      [1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],
      [3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],
      [4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1],
    ];
    const eSet = new Set();
    f.forEach(([a,b,c]) => {
      [[a,b],[b,c],[c,a]].forEach(([x,y]) => {
        const k = x < y ? `${x}_${y}` : `${y}_${x}`;
        eSet.add(k);
      });
    });
    const edges = [...eSet].map(s => s.split("_").map(Number));
    return { vertices: v, edges, faces: f };
  },
  // Diamond — bipyramid (8 verts: 1 top, 1 bottom, 6 ring)
  diamond: () => {
    const ring = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      ring.push([Math.cos(a), 0, Math.sin(a)]);
    }
    const v = [
      [0, 1.4, 0],         // 0 top
      [0,-0.9, 0],         // 1 bottom
      ...ring,             // 2..7
    ];
    const edges = [];
    for (let i = 0; i < 6; i++) {
      const a = 2 + i, b = 2 + ((i + 1) % 6);
      edges.push([a, b]);   // ring
      edges.push([0, a]);   // top
      edges.push([1, a]);   // bottom
    }
    const faces = [];
    for (let i = 0; i < 6; i++) {
      const a = 2 + i, b = 2 + ((i + 1) % 6);
      faces.push([0, a, b]);
      faces.push([1, b, a]);
    }
    return { vertices: v, edges, faces };
  },
};

function Shape3D({
  shape = "octa",
  speed = 1,
  fillAlpha = 0.18,
  edgeAlpha = 0.7,
  showRing = false,
  showVertices = true,
  scaleMul = 0.34,
  hue = "gold", // "gold" | "silver"
  mouseTrack = false,
  initialRot = [0, 0, 0],
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, raf;

    const geom = SHAPE_LIBRARY[shape] ? SHAPE_LIBRARY[shape]() : SHAPE_LIBRARY.octa();
    const { vertices, edges, faces } = geom;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let move = null;
    if (mouseTrack) {
      move = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        mouseRef.current.y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      };
      window.addEventListener("mousemove", move);
    }

    let t = 0;
    let mx = 0, my = 0;

    const project = (v, ax, ay, az, scale, cx, cy) => {
      let [x,y,z] = v;
      let y1 = y * Math.cos(ax) - z * Math.sin(ax);
      let z1 = y * Math.sin(ax) + z * Math.cos(ax);
      let x2 = x * Math.cos(ay) + z1 * Math.sin(ay);
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
      let x3 = x2 * Math.cos(az) - y1 * Math.sin(az);
      let y3 = x2 * Math.sin(az) + y1 * Math.cos(az);
      const persp = 3 / (3 + z2);
      return { x: cx + x3 * scale * persp, y: cy + y3 * scale * persp, z: z2 };
    };

    const colors = hue === "silver"
      ? { fillA: "rgba(220, 226, 232,", fillB: "rgba(160, 170, 180,", edge: "rgba(220, 226, 232,", glint: "rgba(220, 226, 232," }
      : { fillA: "rgba(232, 199, 102,", fillB: "rgba(201, 168, 76,", edge: "rgba(232, 199, 102,", glint: "rgba(232, 199, 102," };

    const render = () => {
      t += 0.005 * speed;
      mx += (mouseRef.current.x - mx) * 0.06;
      my += (mouseRef.current.y - my) * 0.06;

      ctx.clearRect(0, 0, w, h);

      const cx = w/2, cy = h/2;
      const scale = Math.min(w, h) * scaleMul;

      const ax = initialRot[0] + t * 0.6 + my * 0.5;
      const ay = initialRot[1] + t * 0.8 + mx * 0.7;
      const az = initialRot[2] + t * 0.3;

      const proj = vertices.map(v => project(v, ax, ay, az, scale, cx, cy));

      if (showRing) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.4, 0, Math.PI * 2);
        ctx.strokeStyle = `${colors.edge} 0.08)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.6, 0, Math.PI * 2);
        ctx.strokeStyle = `${colors.edge} 0.04)`;
        ctx.stroke();
        ctx.restore();
      }

      const faceData = faces.map(f => {
        const avgZ = (proj[f[0]].z + proj[f[1]].z + proj[f[2]].z) / 3;
        return { f, avgZ };
      }).sort((a,b) => a.avgZ - b.avgZ);

      faceData.forEach(({ f, avgZ }) => {
        const a = proj[f[0]], b = proj[f[1]], c = proj[f[2]];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.lineTo(c.x, c.y);
        ctx.closePath();
        const intensity = (avgZ + 1) * 0.5;
        const alpha = 0.04 + intensity * fillAlpha;
        const grad = ctx.createLinearGradient(a.x, a.y, c.x, c.y);
        grad.addColorStop(0, `${colors.fillA} ${alpha})`);
        grad.addColorStop(1, `${colors.fillB} ${alpha * 0.4})`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.lineWidth = 1.2;
      edges.forEach(([i,j]) => {
        const a = proj[i], b = proj[j];
        const avgZ = (a.z + b.z) / 2;
        const alpha = (0.4 + (avgZ + 1) * 0.3) * edgeAlpha;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `${colors.edge} ${alpha})`;
        ctx.stroke();
      });

      if (showVertices) {
        proj.forEach(p => {
          const r = 2.5 + (p.z + 1) * 1.5;
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
          glow.addColorStop(0, `${colors.glint} 0.8)`);
          glow.addColorStop(1, `${colors.glint} 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (move) window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [shape, speed, fillAlpha, edgeAlpha, showRing, showVertices, scaleMul, hue, mouseTrack]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

// Backwards compat: hero uses the original CrystalCanvas API
function CrystalCanvas() {
  return (
    <Shape3D
      shape="octa"
      speed={1}
      fillAlpha={0.18}
      edgeAlpha={1}
      showRing={true}
      showVertices={true}
      scaleMul={0.34}
      hue="gold"
      mouseTrack={true}
    />
  );
}

/* ============================================================
   Ambient 3D background — multiple polyhedra drifting behind
   the entire site at very low opacity. Acts as a "ground."
   Scroll-reactive: drift offset shifts subtly with scroll.
   ============================================================ */
function Ambient3DBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, raf;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Build several drifting shapes
    const SHAPES = ["octa", "tetra", "cube", "icosa", "diamond"];
    const drifters = SHAPES.map((s, i) => {
      const geom = SHAPE_LIBRARY[s]();
      return {
        geom,
        // pos as fraction of viewport
        x: (i * 0.23 + 0.1) % 1,
        y: (i * 0.31 + 0.15) % 1,
        size: 90 + (i * 31) % 80,
        speed: 0.15 + (i * 0.07) % 0.25,
        phase: i * 1.7,
        driftX: 80 + (i * 19) % 120,
        driftY: 60 + (i * 23) % 80,
      };
    });

    const project = (v, ax, ay, az, scale, cx, cy) => {
      let [x,y,z] = v;
      let y1 = y * Math.cos(ax) - z * Math.sin(ax);
      let z1 = y * Math.sin(ax) + z * Math.cos(ax);
      let x2 = x * Math.cos(ay) + z1 * Math.sin(ay);
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
      let x3 = x2 * Math.cos(az) - y1 * Math.sin(az);
      let y3 = x2 * Math.sin(az) + y1 * Math.cos(az);
      const persp = 3 / (3 + z2);
      return { x: cx + x3 * scale * persp, y: cy + y3 * scale * persp, z: z2 };
    };

    let t = 0;
    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      const scrollNorm = scrollY * 0.0008;

      drifters.forEach((d) => {
        const { geom, size, speed, phase, driftX, driftY } = d;
        // base position
        const bx = d.x * w;
        const by = d.y * h;
        // drift
        const cx = bx + Math.cos(t * speed + phase) * driftX;
        const cy = by + Math.sin(t * speed * 0.8 + phase * 1.3) * driftY - scrollY * 0.15;

        // Skip if offscreen
        if (cy < -size * 2 || cy > h + size * 2) return;

        const ax = t * 0.4 + phase;
        const ay = t * 0.3 + phase * 0.7 + scrollNorm;
        const az = t * 0.15;
        const proj = geom.vertices.map(v => project(v, ax, ay, az, size, cx, cy));

        // Edges only — keep it ghostly
        ctx.lineWidth = 1;
        geom.edges.forEach(([i, j]) => {
          const a = proj[i], b = proj[j];
          const avgZ = (a.z + b.z) / 2;
          const alpha = 0.08 + (avgZ + 1) * 0.06;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(232, 199, 102, ${alpha})`;
          ctx.stroke();
        });
      });

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-3d-bg" />;
}

/* ============================================================
   Tiny inline 3D glyph — for tech category headers, timeline
   nodes, work card backdrops. No mouse tracking, no rings.
   ============================================================ */
function MiniShape3D({ shape, hue = "gold", speed = 0.5, scaleMul = 0.42, fillAlpha = 0.18, edgeAlpha = 0.85 }) {
  return (
    <Shape3D
      shape={shape}
      hue={hue}
      speed={speed}
      scaleMul={scaleMul}
      fillAlpha={fillAlpha}
      edgeAlpha={edgeAlpha}
      showRing={false}
      showVertices={false}
      mouseTrack={false}
    />
  );
}

/* ============================================================
   Particle background — drifting points
   ============================================================ */
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, raf;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 60;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.5 + 0.1,
      gold: Math.random() < 0.25,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(201, 168, 76, ${p.a})` : `rgba(240, 237, 232, ${p.a * 0.5})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}

/* ============================================================
   Reveal hook — IntersectionObserver
   ============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   Loader
   ============================================================ */
function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${gone ? "gone" : ""}`}>
      <div className="loader-mark">R</div>
      <div className="loader-text">RIN — Portfolio v2.0</div>
    </div>
  );
}

/* ============================================================
   Nav
   ============================================================ */
function Nav({ lang, setLang, active }) {
  const [scrolled, setScrolled] = useState(false);
  const t = COPY[lang];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">RIN<span className="dot"></span></a>
      <div className="nav-links">
        <a href="#work" className={`nav-link ${active==="work" ? "active" : ""}`}>{t.nav.work}</a>
        <a href="#about" className={`nav-link ${active==="about" ? "active" : ""}`}>{t.nav.about}</a>
        <a href="#stack" className={`nav-link ${active==="stack" ? "active" : ""}`}>{t.nav.stack}</a>
        <a href="#career" className={`nav-link ${active==="career" ? "active" : ""}`}>{t.nav.career}</a>
        <a href="#contact" className={`nav-link ${active==="contact" ? "active" : ""}`}>{t.nav.contact}</a>
      </div>
      <div className="nav-cta">
        <span className="nav-num">2026 / TYO</span>
        <div className="lang-switch">
          <button className={lang==="en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang==="jp" ? "on" : ""} onClick={() => setLang("jp")}>JP</button>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero({ lang, motif }) {
  const t = COPY[lang];
  return (
    <section id="top" className="hero">
      <div className="hero-grid"></div>
      <ParticleField />
      <div className="crystal-stage">
        <CrystalCanvas />
      </div>
      <div className="crystal-tag">[ Spline · GLB / 3D Object ]</div>

      <div className="hero-content">
        <div className="hero-meta reveal in">
          <span className="pip"></span>
          <span>{t.heroMeta}</span>
          <span style={{ marginLeft: "auto", opacity: 0.5 }}>v2.0 — IN DEVELOPMENT</span>
        </div>

        <h1 className="hero-h1">
          <span className="line"><span className="word gold-shimmer">{t.heroTagline[0]}</span></span>
          <span className="line"><span className="hero-x">×</span><span className="word" style={{ color: "var(--c-text)" }}>{t.heroTagline[1]}</span></span>
        </h1>

        <div className="hero-foot">
          <div className="hero-bio">
            <span>{t.heroBio}</span>
            <span className="jp">{t.heroBioJp}</span>
          </div>
          <div className="hero-stats">
            {t.stats.map((s, i) => (
              <div key={i}>
                <div className="hero-stat-num">{s.n}</div>
                <div className="hero-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
}

/* ============================================================
   About
   ============================================================ */
function About({ lang }) {
  const t = COPY[lang];
  return (
    <section id="about">
      <div className="container">
        <div className="section-label reveal">{t.aboutLabel} / 02</div>
        <h2 className="section-title reveal">
          {t.aboutTitle.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === 1 && lang === "en" ? <em>{line}</em> : i === 1 ? <em>{line}</em> : line}
            </span>
          ))}
        </h2>

        <div className="about-grid">
          <div className="reveal">
            <div className="avatar">
              <img className="avatar-img" src="assets/portrait.png" alt="RIN portrait" />
              <div className="avatar-frame-corner tl"></div>
              <div className="avatar-frame-corner tr"></div>
              <div className="avatar-frame-corner bl"></div>
              <div className="avatar-frame-corner br"></div>
              <div className="avatar-id">{t.avatarTag}</div>
            </div>
          </div>

          <div className="about-body reveal-stagger">
            {t.aboutBody.map((p, i) => (
              <p key={i}>
                {p.lead && <span className="lead">{p.lead}</span>}
                {p.rest}
              </p>
            ))}
            <div className="tag-row">
              {t.aboutTags.map(([cls, txt], i) => (
                <span key={i} className={`tag ${cls}`}>{cls === "gold" && "● "}{txt}</span>
              ))}
            </div>
            <div className="about-meta-row">
              {t.aboutMeta.map((m, i) => (
                <div key={i}>
                  <div className="meta-num">{m.n}<span>{m.a}</span></div>
                  <div className="meta-lbl">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Works
   ============================================================ */
function Works({ lang }) {
  const t = COPY[lang];
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Web", "iOS App", "Landing", "SaaS", "AI"];
  const filtered = filter === "All" ? WORKS : WORKS.filter(w => w.cat === filter);

  return (
    <section id="work" style={{ background: "var(--c-base-2)" }}>
      <div className="container">
        <div className="works-head">
          <div>
            <div className="section-label reveal">{t.worksLabel} / 03</div>
            <h2 className="section-title reveal">
              {t.worksTitle.map((line, i) => (
                <span key={i} style={{ display: "block" }}>{i === 1 ? <em>{line}</em> : line}</span>
              ))}
            </h2>
            <p className="section-sub reveal" style={{ marginBottom: 0 }}>{t.worksSub}</p>
          </div>
          <div className="works-filters reveal">
            {cats.map(c => (
              <button key={c} className={`filter-chip ${filter===c ? "on" : ""}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="clients-panel reveal">
          <div className="clients-stat">
            <div className="clients-label">{lang === "jp" ? "採用案件数" : "Adopted Projects"}</div>
            <div className="clients-num">{String(CLIENTS.count).padStart(2, "0")}</div>
            <div className="clients-sub">
              {lang === "jp"
                ? "実際にご依頼いただきリリースされた案件"
                : "Commissions actually delivered to client"}
            </div>
          </div>
          <div className="clients-list">
            <div className="clients-list-head">
              <span>{lang === "jp" ? "クライアント" : "Clients"}</span>
              <span>{lang === "jp" ? "年" : "Year"}</span>
            </div>
            {CLIENTS.items.map((c, i) => (
              <div className="clients-row" key={i}>
                <span className="clients-name">
                  {c.status === "ndisclosed"
                    ? (lang === "jp" ? "— 非公開クライアント —" : "— Confidential —")
                    : c.name}
                  <span className="clients-kind">{c.kind[lang]}</span>
                </span>
                <span className="clients-year">{c.year}</span>
              </div>
            ))}
            <div className="clients-note">
              {lang === "jp"
                ? "※ 実名公開は順次対応予定。NDA案件は記載しません。"
                : "Names disclosed progressively. NDA-bound work omitted."}
            </div>
          </div>
        </div>

        <div className="works-grid reveal-stagger">
          {filtered.map(w => (
            <article key={w.id} className={`work-card size-${w.size}`}>
              <div className="work-thumb">
                <div className="work-thumb-inner">
                  <div className="work-thumb-mark">{w.mark}</div>
                </div>
                <div className="work-num">№ {w.num}</div>
                <div className={`work-status ${w.status}`}>
                  <span className="dot"></span>
                  {w.status === "done" && (lang === "en" ? "Shipped" : "完成")}
                  {w.status === "dev" && (lang === "en" ? "In Dev" : "開発中")}
                  {w.status === "plan" && (lang === "en" ? "Planned" : "予定")}
                </div>
                <div className="work-cat">{w.cat}</div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{w.title[lang]}</h3>
                <p className="work-desc">{w.desc[lang]}</p>
                <div className="work-stack">
                  {w.stack.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Tech Stack
   ============================================================ */
function TechStack({ lang }) {
  const t = COPY[lang];
  return (
    <section id="stack">
      <div className="container">
        <div className="section-label reveal">{t.techLabel} / 04</div>
        <h2 className="section-title reveal">
          {t.techTitle.map((line, i) => (
            <span key={i} style={{ display: "block" }}>{i === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>
        <p className="section-sub reveal">{t.techSub}</p>

        <div className="tech-categories reveal">
          {TECH.map((c, idx) => {
            const glyphs = ["cube", "tetra", "octa", "icosa"];
            const hues = ["gold", "silver", "gold", "silver"];
            return (
              <div key={c.cat} className="tech-cat">
                <div className="tech-cat-name">
                  <div className="tech-glyph">
                    <MiniShape3D shape={glyphs[idx % glyphs.length]} hue={hues[idx % hues.length]} speed={0.5 + idx * 0.1} fillAlpha={0.18} edgeAlpha={0.85} scaleMul={0.42} />
                  </div>
                  <span>{c.cat}</span>
                  <span className="tech-cat-num" style={{ marginLeft: "auto" }}>— {c.num}</span>
                </div>
              <div className="tech-list">
                {c.items.map(it => (
                  <div className="tech-item" key={it.name}>
                    <div className="tech-name">{it.name}</div>
                    <div className="tech-level">
                      <span className="tech-bar">
                        {[1,2,3,4,5].map(i => <i key={i} className={i <= it.level ? "on" : ""}></i>)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Career timeline
   ============================================================ */
function Career({ lang }) {
  const t = COPY[lang];
  return (
    <section id="career" style={{ background: "var(--c-base-2)" }}>
      <div className="container">
        <div className="section-label reveal">{t.careerLabel} / 05</div>
        <h2 className="section-title reveal" style={{ marginBottom: 80 }}>
          {t.careerTitle.map((line, i) => (
            <span key={i} style={{ display: "block" }}>{i === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>

        <div className="timeline reveal-stagger">
          {CAREER.map((it, idx) => {
            const segs = lang === "jp" ? it.jp : it.en;
            const emIdx = lang === "jp" ? it.emJp : it.emEn;
            const small = lang === "jp" ? it.smallJp : it.smallEn;
            return (
              <div key={idx} className={`tl-item ${it.type}`}>
                <div className="tl-when">
                  {it.when}
                  <small>{small}</small>
                </div>
                <div className="tl-what">
                  {segs.map((seg, i) => i === emIdx ? <em key={i}>{seg}</em> : <span key={i}>{seg}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Contact
   ============================================================ */
function Contact({ lang }) {
  const t = COPY[lang];
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard?.writeText("awazurin551@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label reveal">{t.contactLabel} / 06</div>

        <div className="contact-block">
          <div>
            <h2 className={`contact-h ${lang === "jp" ? "jp" : ""} reveal`}>
              <span style={{ display: "block" }}>{t.contactH[0]}</span>
              <span style={{ display: "block" }}><em>{t.contactH[1]}</em></span>
            </h2>
            <p className="contact-sub reveal">{t.contactSub}</p>

            <div className="contact-meta reveal">
              <div className="contact-row">
                <span className="k">Email</span>
                <span className="v">
                  awazurin551@gmail.com
                  <span className="copy-pill" onClick={copyEmail}>{copied ? "Copied" : "Copy"}</span>
                </span>
              </div>
              <a className="contact-row" href="https://github.com/RINAWAZU" target="_blank" rel="noopener noreferrer">
                <span className="k">GitHub</span>
                <span className="v">@RINAWAZU ↗</span>
              </a>
              <div className="contact-row">
                <span className="k">X / Twitter</span>
                <span className="v">@rin_engineer ↗</span>
              </div>
              <div className="contact-row">
                <span className="k">Note</span>
                <span className="v">note.com/rin ↗</span>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={e => { e.preventDefault(); alert(lang === "en" ? "Demo only — connect EmailJS / Resend in production." : "デモ用フォームです。本番ではEmailJS等を接続予定。"); }}>
            <div className="field">
              <label>{lang === "en" ? "Name" : "お名前"}</label>
              <input type="text" placeholder={lang === "en" ? "Your name" : "山田 太郎"} />
            </div>
            <div className="field">
              <label>{lang === "en" ? "Email" : "メールアドレス"}</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label>{lang === "en" ? "Project Type" : "案件タイプ"}</label>
              <input type="text" placeholder={lang === "en" ? "Brand site / iOS app / AI tool …" : "ブランドサイト / iOSアプリ / AIツール …"} />
            </div>
            <div className="field">
              <label>{lang === "en" ? "Brief" : "概要"}</label>
              <textarea rows="4" placeholder={lang === "en" ? "Tell me about the project, scope, and timeline." : "案件の内容・スコープ・スケジュールをお聞かせください。"}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 12 }}>
              {lang === "en" ? "Send Brief" : "送信する"} <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row" style={{ marginBottom: 40 }}>
          <div className="footer-links">
            <a href="#" className="footer-link">GitHub ↗</a>
            <a href="#" className="footer-link">X / Twitter ↗</a>
            <a href="#" className="footer-link">Note ↗</a>
            <a href="#" className="footer-link">LinkedIn ↗</a>
          </div>
          <div className="footer-meta">
            <div>{lang === "en" ? "Designed & built by RIN" : "Designed & built by RIN"}</div>
            <div>v2.0 — {lang === "en" ? "Updated Apr 2026" : "2026年4月更新"}</div>
            <div>© RIN 2026 · Tokyo</div>
          </div>
        </div>
        <div className="footer-mark">RIN.</div>
      </div>
    </footer>
  );
}

/* ============================================================
   Active section tracker
   ============================================================ */
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = ["top","about","work","stack","career","contact"];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { threshold: 0, rootMargin: "-40% 0px -50% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

/* ============================================================
   App
   ============================================================ */
function App() {
  const [lang, setLang] = useState("jp");
  const [tweaks, setTweak] = window.useTweaks
    ? window.useTweaks(window.TWEAK_DEFAULTS || {})
    : [{}, () => {}];
  useReveal();
  const active = useActiveSection();

  // Apply tweaks to CSS vars
  useEffect(() => {
    document.documentElement.lang = lang === "jp" ? "ja" : "en";
    document.documentElement.classList.toggle("lang-jp", lang === "jp");
  }, [lang]);

  useEffect(() => {
    if (tweaks.accent) document.documentElement.style.setProperty("--c-gold", tweaks.accent);
    if (tweaks.accentBright) document.documentElement.style.setProperty("--c-gold-bright", tweaks.accentBright);
    if (tweaks.base) document.documentElement.style.setProperty("--c-base", tweaks.base);
    if (tweaks.grain !== undefined) {
      const g = document.querySelector(".grain");
      if (g) g.style.opacity = tweaks.grain;
    }
  }, [tweaks]);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Ambient3DBackground />
      <div className="grain"></div>
      <div className="vignette"></div>
      <Nav lang={lang} setLang={setLang} active={active} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Works lang={lang} />
      <TechStack lang={lang} />
      <Career lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      {window.RinTweaks && <window.RinTweaks tweaks={tweaks} setTweak={setTweak} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
