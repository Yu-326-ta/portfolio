import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import Experience from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}