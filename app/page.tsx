import { Metadata } from 'next';
import { ScrollReveal } from '@/app/components/ui';
import About from '@/app/components/main/About';
import Benefit from '@/app/components/main/Benefit';
import Contact from '@/app/components/main/Contact';
import CtaSection from '@/app/components/main/CtaSection';
import News from '@/app/components/main/News';
import Point from '@/app/components/main/Point';
import Recruit from '@/app/components/main/Recruit';
import Service from '@/app/components/main/Service';
import Top from '@/app/components/main/Top';

export const metadata: Metadata = {
  title: 'ホーム',
  description:
    '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。通販・EC、店舗販売、法人営業、物販・リセールまで対応。',
  openGraph: {
    title: 'HSBRIGDE - 選べる。届く。安心する。',
    description:
      '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。',
  },
};

export default function Home() {
  return (
    <div className="min-h-full bg-white text-black">
      <Top />
      <ScrollReveal once={false}>
        <About />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <Point />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <Recruit />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <Service />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <CtaSection />
      </ScrollReveal>
      {/* <News /> */}
      <ScrollReveal once={false}>
        <Contact />
      </ScrollReveal>
    </div>
  );
}
