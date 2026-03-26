import Icon from "@/components/ui/icon";
import { TELEGRAM_URL, LOGO_IMG } from "./constants";

interface HeroSectionProps {
  onScrollTo: (href: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const openTelegram = () => window.open(TELEGRAM_URL, "_blank");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[700px] h-[700px] rounded-full border border-neon-cyan/8 animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-neon-purple/6" style={{ animation: "spin 30s linear infinite reverse" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mx-auto mb-8 w-28 h-28 rounded-2xl overflow-hidden border-2 border-neon-cyan/40 shadow-[0_0_50px_rgba(0,245,255,0.25)] animate-pulse-glow animate-fade-in-up">
          <img src={LOGO_IMG} alt="VOLK VPN" className="w-full h-full object-cover" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card neon-border mb-6 animate-fade-in-up stagger-1">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs text-white/65 font-body">Собственные серверы • Работаем через Happ • Всегда онлайн</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none mb-4 animate-fade-in-up stagger-2">
          <span className="shimmer-text">VOLK VPN</span>
        </h1>

        <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-4 font-body leading-relaxed animate-fade-in-up stagger-3">
          Свободный интернет без ограничений. Обход блокировок и глушилок.<br className="hidden md:block" />
          Собственные серверы — дешевле чем у конкурентов.
        </p>

        <p className="text-2xl font-display font-bold neon-text mb-10 animate-fade-in-up stagger-3">
          от 60 ₽/мес
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
          <button onClick={openTelegram} className="glow-btn px-10 py-4 rounded-xl font-display text-lg tracking-wider flex items-center justify-center gap-2">
            <Icon name="Send" size={18} />
            Купить в Telegram
          </button>
          <button onClick={() => onScrollTo("#pricing")} className="px-10 py-4 rounded-xl font-display text-lg tracking-wider border border-white/20 text-white hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300">
            Смотреть тарифы
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-2xl mx-auto grid grid-cols-3 gap-4 animate-fade-in-up stagger-5">
        {[
          { val: "5+", label: "Серверов" },
          { val: "Happ", label: "Технология" },
          { val: "24/7", label: "Работает" },
        ].map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-4 text-center neon-border">
            <div className="font-display text-2xl font-bold neon-text">{s.val}</div>
            <div className="text-xs text-white/45 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 animate-bounce">
        <span className="text-xs">Листай вниз</span>
        <Icon name="ChevronDown" size={16} />
      </div>
    </section>
  );
}
