const services = [
  {
    title: '送料無料・快速配送',
    sub: 'お届け',
    desc: 'ご購入金額に応じて送料無料。午前中のご注文は当日発送。追跡番号で配送状況をいつでも確認でき、お届け日時の指定も可能です。',
  },
  {
    title: '安心の返品・交換',
    sub: '返品保証',
    desc: '未使用・未開封の商品は30日間返品可能。不良品は無料で交換いたします。ご不明点はカスタマーサポートまでお気軽にどうぞ。',
  },
  {
    title: '各種お支払い',
    sub: 'お支払い方法',
    desc: 'クレジットカード、コンビニ払い、代引き、後払い、各種電子マネーなど、お客様の都合に合わせてお選びいただけます。',
  },
  {
    title: '会員特典・お得な情報',
    sub: '会員サービス',
    desc: '会員登録でポイント還元や限定セールのご案内。新着商品・おすすめ情報をメールでお届けし、よりお得にお買い物いただけます。',
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-2xl font-semibold text-black md:text-3xl">
          OUR SERVICES
        </h2>
        <div className="space-y-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-xl border border-zinc-200 bg-zinc-100 p-8 md:p-10"
            >
              <h3 className="mb-2 text-xl font-semibold text-amber-600">
                {svc.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-600">{svc.sub}</p>
              <p className="leading-relaxed text-zinc-700">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
