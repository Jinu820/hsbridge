import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="border-t border-white/10 bg-black px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
          WE MAKE NEW BUSINESSES
        </h2>
        <p className="mb-6 text-zinc-400">
          開発力が必要な場所に、ビジネスに、お力になります
        </p>
        <p className="mb-8 text-sm text-zinc-500">
          新規事業、新しいビジネスを創造していく いつでもお気軽にお問合せください
        </p>
        <Link
          href="#contact"
          className="inline-block rounded-full bg-yellow-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-yellow-400"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
