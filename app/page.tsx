import Banner from "@/components/Banner";
import ModernNav from "@/components/ModernNav";
import Skills from "@/components/Skills";
import Experience from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <ModernNav />
      <Banner />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
