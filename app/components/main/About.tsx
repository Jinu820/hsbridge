const overviewItems = [
  { en: "GENERALLY", jp: "基本を忘れず" },
  { en: "NATURALLY", jp: "本質を見極め" },
  { en: "EXPERIENCE", jp: "経験する" },
  { en: "INSIGHT", jp: "視野を広く" },
  { en: "THINKING", jp: "思考の拡張" },
];

const companyInfo = [
  { label: "社名", value: "HSBRIGDE株式会社" },
  { label: "設立", value: "2022.08" },
  { label: "資本金", value: "300万円" },
  { label: "CEO", value: "キム ヒョヌク" },
  { label: "CTO", value: "島野 隆史" },
  { label: "本社", value: "東京都新宿区" },
  { label: "東京事務所", value: "〒160-0023 東京都新宿区西新宿7丁目16 末廣ビル103(営業所)" },
  { label: "関連企業", value: "DOO合同会社 代表社員 郭 煐駿" },
];

const roadmap = [
  { year: "2020", title: "国際 E-Commerce 事業", items: ["02 DOO合同会社 設立", "06 日本酒の販売を開始", "08 営業オフィスに拡大", "09 スニーカー販売開始", "12 アウトドア用品販売開始"] },
  { year: "2021", title: "年間売り上げ ５億円", items: ["11 営業オフィスを移転", "12 購買代行サービス提供開始"] },
  { year: "2022", title: "ITサービス 展開", items: ["08 HSBRIGDE株式会社 設立"] },
  { year: "2023 & MORE", title: "ビジネス成長", items: ["リセール展開", "自社サービス ローンチング予定", "エンジニア増員拡大"] },
];

export default function About() {
  return (
    <section id="about" className="bg-black px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* PULL THE TRIGGER / Company info */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            PULL THE TRIGGER
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {companyInfo.map((row) => (
              <div key={row.label} className="border-b border-white/10 pb-4">
                <p className="mb-1 text-xs uppercase tracking-wider text-zinc-500">
                  {row.label}
                </p>
                <p className="text-sm text-white">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="mb-24">
          <p className="mb-2 text-center text-xs uppercase tracking-[0.3em] text-zinc-500">
            大事にする価値
          </p>
          <h2 className="mb-14 text-center text-2xl font-semibold text-white md:text-3xl">
            会社概要 / OVERVIEW
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {overviewItems.map((item) => (
              <div key={item.en} className="text-center">
                <p className="text-lg font-medium text-yellow-400">{item.en}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.jp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision - IT Generalist&apos;s Nest */}
        <div className="mb-24 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="mb-6 text-center text-2xl font-semibold text-white md:text-3xl">
            IT Generalist&apos;s Nest
          </h2>
          <p className="mb-4 text-center text-sm italic text-zinc-400">
            噛み合い、絡み合う ジェネラリストの住処
          </p>
          <p className="text-center leading-relaxed text-zinc-300">
            真っ直ぐな枝だけで鳥の巣は建てない。
            巣を丈夫にするのは周りに絡み合う１本の枝。
            プロジェクトの完成と成功を支える「巣」を組み合うジェネストは、「融合」の鍵となる。
            ジェネラリストのネットワークを作ります。
          </p>
        </div>

        {/* ROAD MAP */}
        <div>
          <h2 className="mb-12 text-center text-2xl font-semibold text-white md:text-3xl">
            ROAD MAP
          </h2>
          <div className="space-y-12">
            {roadmap.map((block) => (
              <div key={block.year} className="border-l-2 border-yellow-500/50 pl-6">
                <p className="mb-2 text-2xl font-bold text-yellow-400">{block.year}</p>
                <p className="mb-4 text-sm font-medium text-white">{block.title}</p>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-400">
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
