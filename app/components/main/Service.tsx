import Link from "next/link";

const services = [
  {
    title: "System Engineering Service",
    sub: "システムエンジニアリングサービス（SES)",
    desc: "多種多様なITエンジニア人材を保有しており、お客様のご要望に沿うサービスをご提供致します。",
  },
  {
    title: "All In One Groupware",
    sub: "SaaS型統合協業ツール",
    desc: "Dooray!ひとつで全ての業務が可能に。メッセンジャー、ビデオチャット、メールから人事・決済まで、企業に必要なすべてがこれ一つで揃います。",
    link: "Dooray! を詳しく見る",
  },
  {
    title: "Resale",
    sub: "Amazon Web Service / Google Cloud Platform",
    desc: "AWS・GCPをご検討中でしたら、HSBRIDGE(株)経由でのご契約が最もお得で最安値です。（例：10%割引）ぜひお問い合わせください。",
    link: "問い合わせる",
  },
  {
    title: "IN HOUSE APPLICATION",
    sub: "自社サービス(WEB・アプリ)",
    desc: "来年度自社アプリローンチング準備中 2025年予定",
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-2xl font-semibold text-white md:text-3xl">
          OUR SERVICES
        </h2>
        <div className="space-y-16">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-10"
            >
              <h3 className="mb-2 text-xl font-semibold text-yellow-400">
                {svc.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-500">{svc.sub}</p>
              <p className="mb-6 leading-relaxed text-zinc-300">{svc.desc}</p>
              {svc.link && (
                <Link
                  href="#contact"
                  className="inline-block text-sm font-medium text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
                >
                  {svc.link}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
