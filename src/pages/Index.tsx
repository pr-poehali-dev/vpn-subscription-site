import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MainSections from "@/components/sections/MainSections";
import ContactsFooter from "@/components/sections/ContactsFooter";

export default function Index() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050d18] text-white overflow-x-hidden font-body">
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-40 right-0 w-[400px] h-[400px] bg-neon-purple/4 rounded-full blur-[120px] pointer-events-none" />

      <Navbar onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <MainSections />
      <ContactsFooter onScrollTo={scrollTo} />
    </div>
  );
}
