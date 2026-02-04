"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dhlImage from "@/app/image/dhl.jpg";
import jordan from "@/app/image/jordan.jpg";
import dunk from "@/app/image/nike_dunk.jpg";

const slides = [
  { src: dhlImage, alt: "DHL配送パートナー - 迅速で安心のお届けサービス" },
  { src: jordan, alt: "エアジョーダン - プレミアムスニーカーコレクション" },
  { src: dunk, alt: "ナイキダンク - スタイリッシュなスニーカー" },
];

export default function Top() {
  const [current, setCurrent] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setSlideWidth(el.offsetWidth);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white border-b border-zinc-200"
    >
      <div className="mx-auto mt-[60px] grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-[6fr_4fr] md:gap-12 md:py-24">
        {/* 이미지 슬라이드 */}
        <div
          ref={containerRef}
          className="relative aspect-[6/4] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-lg"
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${current * slideWidth}px)`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="relative h-full shrink-0"
                style={{ width: `${100 / slides.length}%` }}
                aria-hidden={i !== current}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          {/* 도트 인디케이터 */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`슬라이드 ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-white shadow" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        {/* 텍스트 영역 */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="max-w-xl text-2xl font-bold leading-relaxed tracking-tight text-black sm:text-3xl md:text-4xl">
            選べる。届く。安心する。
          </h1>
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-600">
            Choose. Arrives. You&apos;re at ease.
          </p>
          <a
            href="#contact"
            className="rounded-full border-2 border-black bg-black px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
