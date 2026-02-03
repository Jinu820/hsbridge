const positions = [
  "ECサイト運営",
  "カスタマーサポート",
  "発送・梱包",
  "在庫管理",
  "商品撮影・掲載",
  "ウェブ担当",
  "マーケティング",
  "バイヤー・仕入れ",
  "返品・交換対応",
  "会員サポート",
  "コンテンツ制作",
  "物流・倉庫",
];

export default function Recruit() {
  return (
    <section
      id="recruit"
      className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-semibold text-white md:text-3xl">
          RECRUIT
        </h2>
        <p className="mb-12 text-center text-lg font-medium text-yellow-400">
          WELCOME TO NEW CHALLENGER
        </p>
        <p className="mb-12 text-center text-sm text-zinc-400">積極採用中</p>
        <div className="flex flex-wrap justify-center gap-4">
          {positions.map((pos) => (
            <span
              key={pos}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-yellow-500/50 hover:bg-yellow-500/10"
            >
              {pos}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
