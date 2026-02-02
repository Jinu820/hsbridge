const points = [
  {
    title: "専属フリーランス平均還元率",
    value: "95%",
    sub: "地上最大還元率実現",
    items: ["単価連動型", "通常 85～95% +α", "スペシャル還元 最大99％", "専門キャリアコンサルティング"],
  },
  {
    title: "社員平均還元率",
    value: "80%",
    sub: "地上最大還元率実現",
    items: ["単価連動型", "通常 65～80% +α", "スペシャル還元 最大85％", "専門キャリアコンサルティング"],
  },
  {
    title: "保有案件",
    value: "大量",
    items: ["バックエンド案件", "フロントエンド案件", "EC・金融・通信", "インフラ・セキュリティ", "事務・SNS・デザイン…", "その他"],
  },
  {
    title: "制限事項",
    value: "無し",
    sub: "国籍、年齢、性別",
    items: ["プロジェクトに関係のないすべてのものに気を使う余裕など、当社にはありません。"],
  },
];

export default function Point() {
  return (
    <section className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-14 text-center text-2xl font-semibold text-white md:text-3xl">
          POINT
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-500/30"
            >
              <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                {card.title}
              </p>
              <p className="mb-2 text-3xl font-bold text-yellow-400 md:text-4xl">
                {card.value}
              </p>
              {card.sub && (
                <p className="mb-4 text-sm text-zinc-400">- {card.sub}</p>
              )}
              <ul className="space-y-1.5 text-sm text-zinc-400">
                {card.items.map((item, i) => (
                  <li key={i}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
