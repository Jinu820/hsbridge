const overviewItems = [
  { en: 'QUALITY', jp: '品質にこだわる' },
  { en: 'DELIVERY', jp: '迅速にお届け' },
  { en: 'SUPPORT', jp: '丁寧なサポート' },
  { en: 'TRUST', jp: '安心の決済・返品' },
  { en: 'VALUE', jp: 'お得な価格と特典' },
];

const companyInfo = [
  { label: '社名', value: '株式会社HSBRIDGE' },
  { label: '設立', value: '2026.02' },
  { label: '資本金', value: '500万円' },
  { label: 'CEO', value: 'シン ミンチョル' },
  { label: '本社', value: '東京都新宿区' },
  {
    label: '東京事務所',
    value: '〒169-0073 東京都新宿区百人町2丁目8-10サンコウハイム302',
  },
];

const roadmap = [
  {
    year: '2026',
    title: 'オンライン販売サービス開始',
    items: [
      '自社ECサイト オープン',
      'スニーカー・アパレルのオンライン販売開始',
      '即日発送・送料無料サービス導入',
      '会員登録・ポイント還元システム構築',
    ],
  },
  // {
  //   year: '2020',
  //   title: '国際 E-Commerce 事業',
  //   items: [
  //     '02 DOO合同会社 設立',
  //     '06 日本酒の販売を開始',
  //     '08 営業オフィスに拡大',
  //     '09 スニーカー販売開始',
  //     '12 アウトドア用品販売開始',
  //   ],
  // },
  // {
  //   year: '2021',
  //   title: '年間売り上げ ５億円',
  //   items: ['11 営業オフィスを移転', '12 購買代行サービス提供開始'],
  // },
  // {
  //   year: '2022',
  //   title: 'ITサービス 展開',
  //   items: ['08 HSBRIGDE株式会社 設立'],
  // },
  // {
  //   year: '2023 & MORE',
  //   title: 'ビジネス成長',
  //   items: [
  //     'リセール展開',
  //     '自社サービス ローンチング予定',
  //     'エンジニア増員拡大',
  //   ],
  // },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* PULL THE TRIGGER / Company info */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-black md:text-4xl">
            PULL THE TRIGGER
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {companyInfo.map((row) => (
              <div key={row.label} className="border-b border-zinc-200 pb-4">
                <p className="mb-1 text-xs uppercase tracking-wider text-zinc-600">
                  {row.label}
                </p>
                <p className="text-sm text-black">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="mb-24">
          <p className="mb-2 text-center text-xs uppercase tracking-[0.3em] text-zinc-600">
            大事にする価値
          </p>
          <h2 className="mb-14 text-center text-2xl font-semibold text-black md:text-3xl">
            会社概要 / OVERVIEW
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {overviewItems.map((item) => (
              <div key={item.en} className="text-center">
                <p className="text-lg font-medium text-amber-600">{item.en}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.jp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision - オンラインショップ */}
        <div className="mb-24 rounded-2xl border border-zinc-200 bg-zinc-100 p-8 md:p-12">
          <h2 className="mb-6 text-center text-2xl font-semibold text-black md:text-3xl">
            お客様の「欲しい」に、届ける
          </h2>
          <p className="mb-4 text-center text-sm italic text-zinc-600">
            いつでも、どこでも。安心してお買い物を
          </p>
          <p className="text-center leading-relaxed text-zinc-700">
            厳選した商品を、送料無料・返品保証・安心の決済でお届けします。
            会員特典やお得な情報も随時お届けし、快適なオンラインショッピングをお手伝いします。
            ご不明点はお気軽にお問い合わせください。
          </p>
        </div>

        {/* ROAD MAP */}
        <div className="mt-16 border-t border-zinc-200 pt-16">
          <h2 className="mb-12 text-center text-2xl font-semibold text-black md:text-3xl">
            ROAD MAP
          </h2>
          <div className="space-y-12">
            {roadmap.map((block) => (
              <div
                key={block.year}
                className="border-l-2 border-amber-500/60 pl-6"
              >
                <p className="mb-2 text-2xl font-bold text-amber-600">
                  {block.year}
                </p>
                <p className="mb-4 text-sm font-medium text-black">
                  {block.title}
                </p>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
