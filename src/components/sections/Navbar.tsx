import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS, TELEGRAM_URL, LOGO_IMG } from "./constants";

interface NavbarProps {
  onScrollTo: (href: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    onScrollTo(href);
    setMenuOpen(false);
  };

  const openTelegram = () => window.open(TELEGRAM_URL, "_blank");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050d18]/90 backdrop-blur-xl border-b border-neon-cyan/10" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-neon-cyan/40 shadow-[0_0_15px_rgba(0,245,255,0.3)]">
            <img src={LOGO_IMG} alt="Volk VPN" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-xl font-bold tracking-widest">
            <span className="neon-text">VOLK</span>
            <span className="text-white/70"> VPN</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-white/55 hover:text-neon-cyan transition-colors font-body">
              {l.label}
            </button>
          ))}
        </nav>

        <button onClick={openTelegram} className="hidden md:block glow-btn px-5 py-2 rounded-lg text-sm font-display tracking-wider">
          Купить
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card border-t border-neon-cyan/10 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-white/70 hover:text-neon-cyan transition-colors py-1.5 font-body">
              {l.label}
            </button>
          ))}
          <button onClick={openTelegram} className="glow-btn py-3 rounded-xl font-display tracking-wider mt-1">
            Купить в Telegram
          </button>
        </div>
      )}
    </header>
  );
}
