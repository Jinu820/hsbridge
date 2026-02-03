const points = [
  {
    title: "送料",
    value: "無料",
    sub: "購入金額5,000円以上で送料無料",
    items: [
      "全国送料無料",
      "沖縄・離島も対応",
      "翌日配送オプションあり",
      "お届け日時指定可能",
    ],
  },
  {
    title: "返品・交換",
    value: "30日間",
    sub: "安心の返品保証",
    items: [
      "未使用・未開封に限り30日間返品可",
      "不良品は無料交換",
      "返送料はお客様負担",
      "丁寧なサポート対応",
    ],
  },
  {
    title: "お支払い方法",
    value: "各種対応",
    items: [
      "クレジットカード",
      "コンビニ払い・ATM",
      "代引き",
      "後払い（NP後払い）",
      "各種電子マネー",
      "銀行振込",
    ],
  },
  {
    title: "発送",
    value: "即日発送",
    sub: "午前中のご注文は当日発送",
    items: [
      "在庫豊富でお届けが早い",
      "追跡番号で配送状況を確認可能",
      "土日祝も発送対応",
      "ギフト・のし対応",
    ],
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
              <p className="mb-2 text-lg font-bold text-yellow-400 md:text-4xl">
                {card.value}
              </p>
              {card.sub && (
                <p className="mb-1.5 text-sm text-zinc-400 flex gap-1">
                  <span>-</span>
                  <span>{card.sub}</span>
                </p>
              )}
              <ul className="space-y-1.5 text-sm text-zinc-400">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-1">
                    <span>-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
