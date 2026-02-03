const benefitCommon = [
  "① マネージング手当 :: 1人 10,000～50,000円支給(利益による変動額)",
  "② 紹介手当 :: エンジニア様ご紹介時、10万円/分割お支払い",
  "③ 会社特典 :: 系列会社の運営中のBAR割引 待遇",
  "④ 教育支援 :: 各種教育サポート",
  "⑤ キャリアコンサルティング :: キャリア設計・スキル添削・面談対策… (専門キャリアコンサルタント在籍サポート)",
];

const benefitFreelance = ["① 待機保証金 :: 待機期間中サポート金額提供"];

const benefitEmployee = [
  "① 職務手当 :: 役員など肩書きありの社員のみ適用",
  "② 食事手当 :: 5,000円",
  "③ 資格支援 :: 技術関連資格取得サポート",
];

export default function Benefit() {
  return (
    <section className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-14 text-center text-2xl font-semibold text-white md:text-3xl">
          BENEFIT
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="mb-4 text-lg font-medium text-yellow-400">共通</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {benefitCommon.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-yellow-400">
              専属フリーランス向け
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {benefitFreelance.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-yellow-400">
              社員向け
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {benefitEmployee.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
