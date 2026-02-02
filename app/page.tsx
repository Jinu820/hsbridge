import About from "@/app/components/main/About";
import Benefit from "@/app/components/main/Benefit";
import Contact from "@/app/components/main/Contact";
import CtaSection from "@/app/components/main/CtaSection";
import News from "@/app/components/main/News";
import Point from "@/app/components/main/Point";
import Recruit from "@/app/components/main/Recruit";
import Service from "@/app/components/main/Service";
import Top from "@/app/components/main/Top";

export default function Home() {
  return (
    <div className="min-h-full bg-black text-white">
      <Top />
      <About />
      <Point />
      <Recruit />
      <Service />
      <CtaSection />
      <Benefit />
      {/* <News /> */}
      <Contact />
    </div>
  );
}
