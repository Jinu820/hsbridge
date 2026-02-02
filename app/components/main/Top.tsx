import Image from "next/image";
import mainImage from "@/app/image/main_image.png";

export default function Top() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 py-24"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={mainImage}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
      <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-zinc-500">
        top of page
      </p>
      <h1 className="mb-4 max-w-2xl text-center text-2xl font-bold leading-relaxed tracking-tight text-white sm:text-3xl md:text-4xl">
        「本質」を見極め、常に「思考」する
      </h1>
      <p className="mb-12 text-center text-sm uppercase tracking-[0.2em] text-zinc-500">
        Identify the essence, always think
      </p>
      <a
        href="#contact"
        className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
      >
        CONTACT US
      </a>
      </div>
    </section>
  );
}
