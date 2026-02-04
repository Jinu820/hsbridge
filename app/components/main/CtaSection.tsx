import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-black md:text-3xl">
          いつでも、どこでも。オンラインでお買い物を
        </h2>
        <p className="mb-6 text-zinc-600">
          送料無料・返品保証・安心の決済で、快適なお買い物をお届けします
        </p>
        <p className="mb-8 text-sm text-zinc-600">
          ご注文・お届け・返品など、お困りのことがあればお気軽にお問い合わせください
        </p>
        <Link
          href="#contact"
          className="inline-block rounded-full bg-amber-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-amber-600"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
