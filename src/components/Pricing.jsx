const PRODUCTION_PLANS = [
  {
    name: 'ライト',
    badge: null,
    sub: '1〜3ページ',
    price: '¥69,800',
    features: ['LP形式 or 会社概要のみ', 'お問い合わせフォーム', 'Googleマップ埋め込み', 'スマホ対応'],
  },
  {
    name: 'スタンダード',
    badge: '主力プラン',
    sub: '5〜8ページ（TOP・メニュー・アクセス等）',
    price: '¥98,000',
    features: ['Instagram埋め込み', 'Google Analytics設置', '予約フォーム or LINEリンク', '公開後1ヶ月サポート'],
    highlight: true,
  },
  {
    name: 'プレミアム',
    badge: 'こだわり層向け',
    sub: '10ページ以上 or アニメーション演出',
    price: '¥148,000',
    features: ['SEO初期設定込み', 'ブログ・お知らせ機能', '公開後3ヶ月サポート'],
  },
]

const MAINTENANCE_PLANS = [
  {
    name: 'ミニマム',
    badge: null,
    price: '¥9,800',
    unit: '/月',
    features: ['サーバー・ドメイン管理代行', '軽微テキスト修正（月2回まで）'],
  },
  {
    name: 'スタンダード',
    badge: '推奨',
    price: '¥19,800',
    unit: '/月',
    features: ['テキスト・画像更新（月4回まで）', '月次アクセスレポート', '障害時の優先対応'],
    highlight: true,
  },
  {
    name: 'フル管理',
    badge: null,
    price: '¥29,800',
    unit: '/月',
    features: ['更新無制限', 'SNS投稿代行（月4本）', 'SEO月次改善提案'],
  },
]

const OPTIONS = [
  { label: 'ロゴ制作', price: '+¥15,000〜' },
  { label: '写真撮影（出張）', price: '+¥20,000〜' },
  { label: '多言語対応（英語）', price: '+¥20,000〜' },
  { label: 'Web予約システム連携', price: '+¥15,000〜' },
  { label: 'EC機能（カート）', price: '+¥50,000〜' },
]

const VALUE_POINTS = [
  { num: '30', unit: '%〜', label: '業界平均より安く', note: '制作会社の相場：LP ¥100,000〜 / 5ページ ¥150,000〜' },
  { num: '0', unit: '円', label: '中間マージン', note: 'エンジニア直契約だから代理店コストがない' },
  { num: '∞', unit: '', label: '品質は妥協しない', note: '安さの理由はオーバーヘッドの排除。成果物の質は落とさない' },
]

function PlanCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
      <div className="pricing-card-head">
        <div className="pricing-card-name-row">
          <span className="pricing-card-name">{plan.name}</span>
          {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
        </div>
        {plan.sub && <p className="pricing-card-sub">{plan.sub}</p>}
      </div>
      <div className="pricing-price">
        {plan.price}
        {plan.unit && <span className="pricing-unit">{plan.unit}</span>}
        <span className="pricing-tilde">〜</span>
      </div>
      <ul className="pricing-features">
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--c-base)' }}>
      <div className="container">
        <div className="section-label reveal">Service Fee</div>
        <h2 className="section-title reveal" style={{ marginBottom: 8 }}>
          <span style={{ display: 'block' }}>Pricing &</span>
          <span style={{ display: 'block' }}><em>Plans.</em></span>
        </h2>

        {/* 価値訴求バナー */}
        <div className="pricing-value reveal" style={{ marginBottom: 64 }}>
          <p className="pricing-value-lead">
            制作会社に頼むより、<em>エンジニア直契約</em>の方が安い理由があります。
          </p>
          <div className="pricing-value-stats">
            {VALUE_POINTS.map((v, i) => (
              <div key={i} className="pricing-value-stat">
                <div className="pricing-value-num">
                  {v.num}<span>{v.unit}</span>
                </div>
                <div className="pricing-value-lbl">{v.label}</div>
                <div className="pricing-value-note">{v.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 制作料金 */}
        <div className="pricing-group-label reveal">制作料金プラン</div>
        <div className="pricing-grid reveal-stagger">
          {PRODUCTION_PLANS.map((plan, i) => <PlanCard key={i} plan={plan} />)}
        </div>

        {/* 月額保守 */}
        <div className="pricing-group-label reveal" style={{ marginTop: 64 }}>月額保守プラン（継続課金）</div>
        <div className="pricing-grid reveal-stagger">
          {MAINTENANCE_PLANS.map((plan, i) => <PlanCard key={i} plan={plan} />)}
        </div>

        {/* オプション */}
        <div className="pricing-group-label reveal" style={{ marginTop: 64 }}>オプション単価（追加請求の目安）</div>
        <div className="pricing-options reveal-stagger">
          {OPTIONS.map((opt, i) => (
            <div key={i} className="pricing-option-row">
              <span className="pricing-option-label">{opt.label}</span>
              <span className="pricing-option-price">{opt.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
