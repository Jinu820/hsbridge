const newsItems = [
  { title: "AWS・GCPをHSBRIDGE経由で最安値利用可能に", date: "2025年9月16日" },
  { title: "【制作事例ご紹介】行政書士事務所のWebサイト", date: "2025年7月28日" },
  { title: "HSBRIDGEオリジナル【LINEスタンプ】販売中！", date: "2025年1月31日" },
  { title: "韓国発協業ツール「Dooray」ご紹介", date: "2024年7月4日" },
  { title: "ChatGPT-４のここがすごい！GPT3.5の比較", date: "2024年5月29日" },
  { title: "HSBRIDGEが高還元率を実現している理由", date: "2024年4月15日" },
];

export default function News() {
  return (
    <section
      id="news"
      className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-14 text-center text-2xl font-semibold text-white md:text-3xl">
          News
        </h2>
        <ul className="space-y-6">
          {newsItems.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-white hover:text-yellow-400">
                {item.title}
              </span>
              <span className="text-xs text-zinc-500">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
