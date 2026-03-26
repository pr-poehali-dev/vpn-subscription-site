import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Серверы", href: "#servers" },
  { label: "Контакты", href: "#contacts" },
];

const PLANS = [
  { devices: 1, price: 60 },
  { devices: 2, price: 119 },
  { devices: 3, price: 175 },
  { devices: 4, price: 235 },
  { devices: 5, price: 290 },
  { devices: 6, price: 345 },
];

const SERVERS = [
  { flag: "🇫🇮", name: "Финляндия", ping: "12 мс", load: 42 },
  { flag: "🇩🇪", name: "Германия", ping: "18 мс", load: 58 },
  { flag: "🇷🇺", name: "Россия", ping: "5 мс", load: 35 },
  { flag: "🇳🇱", name: "Нидерланды", ping: "22 мс", load: 51 },
  { flag: "🌍", name: "И другие...", ping: "—", load: 0 },
];

const FEATURES = [
  {
    icon: "Server",
    title: "Собственные серверы",
    desc: "Мы сами создали этот проект — наши серверы, наше оборудование. Полный контроль качества.",
    color: "cyan",
  },
  {
    icon: "Zap",
    title: "Работает через Happ",
    desc: "Технология Happ обеспечивает стабильное соединение даже при блокировках и замедлениях.",
    color: "purple",
  },
  {
    icon: "ShieldCheck",
    title: "Обход глушилок",
    desc: "Наш VPN эффективно обходит любые блокировки и глушилки — интернет работает как должен.",
    color: "green",
  },
  {
    icon: "Wallet",
    title: "Дешевле рынка",
    desc: "Мы вкладываемся в собственную инфраструктуру и передаём экономию вам. Честные цены.",
    color: "cyan",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openTelegram = () => window.open("https://t.me/quhau", "_blank");

  const colorMap = {
    cyan: {
      text: "text-neon-cyan",
      border: "border-neon-cyan/30",
      bg: "bg-neon-cyan/10",
      glow: "hover:shadow-[0_0_30px_rgba(0,245,255,0.25)]",
    },
    purple: {
      text: "text-neon-purple",
      border: "border-neon-purple/30",
      bg: "bg-neon-purple/10",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
    },
    green: {
      text: "text-neon-green",
      border: "border-neon-green/30",
      bg: "bg-neon-green/10",
      glow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.25)]",
    },
  };

  return (
    <div className="min-h-screen bg-[#050d18] text-white overflow-x-hidden font-body">
      {/* Grid bg */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      {/* Ambient */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-40 right-0 w-[400px] h-[400px] bg-neon-purple/4 rounded-full blur-[120px] pointer-events-none" />

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050d18]/90 backdrop-blur-xl border-b border-neon-cyan/10" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-neon-cyan/40 shadow-[0_0_15px_rgba(0,245,255,0.3)]">
              <img src="https://cdn.poehali.dev/projects/bcd0dadf-8d06-4864-9acf-f0c74dddf81c/files/bf141e69-2095-4a90-a677-2d1294881579.jpg" alt="Volk VPN" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl font-bold tracking-widest">
              <span className="neon-text">VOLK</span>
              <span className="text-white/70"> VPN</span>
            </span>
          </button>

          {/* Desktop nav */}
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

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Spinning rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[700px] h-[700px] rounded-full border border-neon-cyan/8 animate-spin-slow" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-neon-purple/6" style={{ animation: "spin 30s linear infinite reverse" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Wolf image */}
          <div className="mx-auto mb-8 w-28 h-28 rounded-2xl overflow-hidden border-2 border-neon-cyan/40 shadow-[0_0_50px_rgba(0,245,255,0.25)] animate-pulse-glow animate-fade-in-up">
            <img src="https://cdn.poehali.dev/projects/bcd0dadf-8d06-4864-9acf-f0c74dddf81c/files/bf141e69-2095-4a90-a677-2d1294881579.jpg" alt="VOLK VPN" className="w-full h-full object-cover" />
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
            <button onClick={() => scrollTo("#pricing")} className="px-10 py-4 rounded-xl font-display text-lg tracking-wider border border-white/20 text-white hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300">
              Смотреть тарифы
            </button>
          </div>
        </div>

        {/* Stats */}
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

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-xs text-neon-cyan tracking-widest uppercase">О нас</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                ПОЧЕМУ <span className="neon-text">VOLK VPN</span>
              </h2>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f) => {
              const c = colorMap[f.color as keyof typeof colorMap];
              return (
                <AnimSection key={f.title}>
                  <div className={`group glass-card rounded-2xl p-6 border ${c.border} transition-all duration-300 ${c.glow} hover:-translate-y-1 h-full`}>
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                      <Icon name={f.icon} fallback="Shield" size={22} className={c.text} />
                    </div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${c.text}`}>{f.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>

          {/* Happ note */}
          <AnimSection>
            <div className="mt-10 glass-card-purple rounded-2xl p-6 neon-border-purple flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/15 flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={22} className="text-neon-purple" />
              </div>
              <div>
                <p className="text-white font-body font-medium mb-1">Наш VPN работает через протокол Happ</p>
                <p className="text-white/50 text-sm">
                  Мы сами создали этот проект — у нас собственные серверы с постоянно включёнными компьютерами. Вкладываемся в инфраструктуру, чтобы вы платили меньше.
                </p>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/3 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-xs text-neon-purple tracking-widest uppercase">Тарифы</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-3">
                ПРОСТЫЕ <span className="neon-text-purple">ЦЕНЫ</span>
              </h2>
              <p className="text-white/45 text-sm">Выбери количество устройств — оплачивай через Telegram</p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {PLANS.map((plan, i) => {
              const isSelected = selectedPlan === i;
              const isPopular = plan.devices === 3;
              return (
                <AnimSection key={plan.devices}>
                  <div
                    onClick={() => setSelectedPlan(i)}
                    className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "glass-card-purple neon-border-purple shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                        : "glass-card border border-neon-cyan/15 hover:border-neon-cyan/35"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-neon-cyan to-blue-500 text-[#050d18] text-[10px] font-display font-bold px-3 py-0.5 rounded-full tracking-wider">
                          ПОПУЛЯРНЫЙ
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Smartphone" size={16} className={isSelected ? "text-neon-purple" : "text-neon-cyan"} />
                      <span className="text-sm text-white/60 font-body">
                        {plan.devices} {plan.devices === 1 ? "устройство" : plan.devices < 5 ? "устройства" : "устройств"}
                      </span>
                    </div>
                    <div className="font-display text-3xl font-bold text-white">
                      {plan.price} <span className="text-lg text-white/40">₽</span>
                    </div>
                    <div className="text-xs text-white/35 mt-1">в месяц</div>
                    {isSelected && (
                      <div className="mt-3 flex items-center gap-1 text-neon-purple text-xs">
                        <Icon name="Check" size={12} />
                        <span>Выбрано</span>
                      </div>
                    )}
                  </div>
                </AnimSection>
              );
            })}
          </div>

          {/* More devices */}
          <AnimSection>
            <div className="glass-card rounded-2xl p-6 border border-dashed border-neon-green/30 text-center mb-8">
              <Icon name="Plus" size={22} className="text-neon-green mx-auto mb-2" />
              <p className="text-white font-body font-medium mb-1">Нужно больше устройств?</p>
              <p className="text-white/45 text-sm mb-4">Договоримся об индивидуальных условиях — напишите нам в Telegram</p>
              <button onClick={openTelegram} className="text-sm text-neon-green border border-neon-green/30 px-5 py-2 rounded-lg hover:bg-neon-green/10 transition-all font-display tracking-wide">
                Написать @quhau
              </button>
            </div>
          </AnimSection>

          <AnimSection>
            <button
              onClick={openTelegram}
              className="glow-btn w-full py-4 rounded-xl font-display text-lg tracking-wider flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={18} />
              {selectedPlan !== null
                ? `Купить — ${PLANS[selectedPlan].devices} устр. за ${PLANS[selectedPlan].price} ₽/мес`
                : "Купить в Telegram @quhau"}
            </button>
            <p className="text-center text-white/25 text-xs mt-3">Оплата и настройка через Telegram • Помогаем с подключением</p>
          </AnimSection>
        </div>
      </section>

      {/* SERVERS */}
      <section id="servers" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-xs text-neon-green tracking-widest uppercase">Серверы</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                НАШИ <span className="neon-text-green">ЛОКАЦИИ</span>
              </h2>
              <p className="text-white/45 text-sm mt-3">Выбирай нужную страну — переключайся мгновенно</p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVERS.map((srv) => (
              <AnimSection key={srv.name}>
                <div className="glass-card rounded-2xl p-5 border border-neon-green/15 hover:border-neon-green/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{srv.flag}</span>
                      <div>
                        <div className="font-display font-semibold text-white text-lg">{srv.name}</div>
                        {srv.ping !== "—" && (
                          <div className="text-xs text-neon-green font-body">{srv.ping}</div>
                        )}
                      </div>
                    </div>
                    {srv.load > 0 && (
                      <div className={`w-2.5 h-2.5 rounded-full ${srv.load < 50 ? "bg-neon-green" : "bg-yellow-400"} animate-pulse`} />
                    )}
                  </div>
                  {srv.load > 0 && (
                    <div>
                      <div className="flex justify-between text-xs text-white/35 mb-1">
                        <span>Нагрузка</span>
                        <span>{srv.load}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${srv.load < 50 ? "bg-neon-green" : "bg-yellow-400"}`}
                          style={{ width: `${srv.load}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {srv.load === 0 && (
                    <p className="text-white/35 text-sm">Ещё больше стран доступно</p>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-xs text-neon-purple tracking-widest uppercase">Отзывы</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                ЧТО ГОВОРЯТ <span className="neon-text-purple">КЛИЕНТЫ</span>
              </h2>
              <p className="text-white/40 text-sm mt-3">Реальные покупатели о VOLK VPN</p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Алексей М.",
                avatar: "А",
                color: "cyan",
                rating: 5,
                plan: "3 устройства",
                text: "Подключил на телефон, ноутбук и планшет — всё работает стабильно. YouTube грузится без тормозов, цена вообще огонь за такое качество.",
              },
              {
                name: "Дарья К.",
                avatar: "Д",
                color: "purple",
                rating: 5,
                plan: "1 устройство",
                text: "Взяла для телефона — самое то. Инстаграм и другие заблокированные сервисы летают. Поддержка в телеге ответила моментально и помогла настроить.",
                featured: true,
              },
              {
                name: "Сергей П.",
                avatar: "С",
                color: "green",
                rating: 5,
                plan: "6 устройств",
                text: "Взял на всю семью, 6 устройств за 345 рублей — это реально дёшево. Скорость не режут, глушилки не мешают. Рекомендую всем.",
              },
              {
                name: "Никита В.",
                avatar: "Н",
                color: "cyan",
                rating: 5,
                plan: "2 устройства",
                text: "Нужен был VPN для обхода блокировок на работе и дома. Германия и Финляндия работают отлично. Уже 2 месяца пользуюсь — ни разу не подвёл.",
              },
              {
                name: "Марина Т.",
                avatar: "М",
                color: "purple",
                rating: 5,
                plan: "3 устройства",
                text: "Порекомендовали знакомые. Подключение через Telegram — очень удобно, никаких лишних регистраций. Работает через Happ, соединение всегда стабильное.",
              },
              {
                name: "Роман Г.",
                avatar: "Р",
                color: "green",
                rating: 5,
                plan: "4 устройства",
                text: "Пробовал разные VPN — этот самый дешёвый при хорошем качестве. Сервера в России особенно нужны для некоторых сервисов. Всё работает как надо.",
              },
            ].map((review) => {
              const c = {
                cyan: { text: "text-neon-cyan", border: "border-neon-cyan/20", bg: "bg-neon-cyan/10", avatar: "bg-neon-cyan/20 text-neon-cyan" },
                purple: { text: "text-neon-purple", border: "border-neon-purple/20", bg: "bg-neon-purple/10", avatar: "bg-neon-purple/20 text-neon-purple" },
                green: { text: "text-neon-green", border: "border-neon-green/20", bg: "bg-neon-green/10", avatar: "bg-neon-green/20 text-neon-green" },
              }[review.color];
              return (
                <AnimSection key={review.name}>
                  <div className={`glass-card rounded-2xl p-6 border ${c.border} h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] ${review.featured ? "neon-border-purple" : ""}`}>
                    {review.featured && (
                      <div className="mb-3">
                        <span className="text-[10px] font-display font-bold tracking-widest text-neon-purple bg-neon-purple/10 px-2 py-0.5 rounded-full">ТОП ОТЗЫВ</span>
                      </div>
                    )}
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    {/* Text */}
                    <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5">"{review.text}"</p>
                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${c.avatar} flex items-center justify-center font-display font-bold text-sm`}>
                          {review.avatar}
                        </div>
                        <div>
                          <div className="text-white font-body font-medium text-sm">{review.name}</div>
                          <div className={`text-xs ${c.text}`}>{review.plan}</div>
                        </div>
                      </div>
                      <Icon name="CheckCircle" size={16} className={c.text} />
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>

          {/* Summary bar */}
          <AnimSection>
            <div className="mt-10 glass-card rounded-2xl p-6 neon-border flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
              {[
                { val: "5.0", label: "Средняя оценка", icon: "Star" },
                { val: "100%", label: "Рекомендуют друзьям", icon: "ThumbsUp" },
                { val: "Быстро", label: "Ответ в Telegram", icon: "MessageCircle" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <Icon name={stat.icon} size={20} className="text-neon-cyan mb-1" />
                  <div className="font-display text-2xl font-bold neon-text">{stat.val}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimSection>
            <div className="relative rounded-3xl overflow-hidden p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.07), rgba(168,85,247,0.07))", border: "1px solid rgba(0,245,255,0.15)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                ГОТОВ НАЧАТЬ? <br /><span className="shimmer-text">ПИШИ СЕЙЧАС</span>
              </h2>
              <p className="text-white/45 mb-8 text-sm max-w-md mx-auto">
                Напишите нам в Telegram — поможем выбрать тариф, подключить и настроить VPN на любом устройстве.
              </p>
              <button onClick={openTelegram} className="glow-btn px-10 py-4 rounded-xl font-display text-lg tracking-wider inline-flex items-center gap-2">
                <Icon name="Send" size={20} />
                @quhau в Telegram
              </button>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-xs text-neon-cyan tracking-widest uppercase">Контакты</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                СВЯЗАТЬСЯ <span className="neon-text">С НАМИ</span>
              </h2>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <AnimSection>
              <button
                onClick={openTelegram}
                className="glass-card rounded-2xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/45 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] transition-all duration-300 hover:-translate-y-1 w-full text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={26} className="text-neon-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold neon-text mb-2">Telegram</h3>
                <p className="text-white/45 text-sm mb-3">Для покупки и помощи</p>
                <p className="text-neon-cyan font-display font-bold text-lg tracking-wide">@quhau</p>
              </button>
            </AnimSection>

            <AnimSection>
              <div className="glass-card rounded-2xl p-8 border border-neon-purple/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={26} className="text-neon-purple" />
                </div>
                <h3 className="font-display text-xl font-semibold neon-text-purple mb-2">Режим работы</h3>
                <p className="text-white/45 text-sm mb-3">Когда мы онлайн</p>
                <p className="text-white font-body font-medium">Ежедневно</p>
                <p className="text-neon-purple text-sm mt-1">Отвечаем быстро</p>
              </div>
            </AnimSection>
          </div>

          <AnimSection>
            <div className="mt-8 glass-card rounded-2xl p-6 neon-border max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <Icon name="HelpCircle" size={20} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-body font-medium mb-1">Как купить подписку?</p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    1. Напишите в Telegram <span className="text-neon-cyan">@quhau</span><br />
                    2. Укажите нужное количество устройств<br />
                    3. Получите инструкцию по оплате и подключению
                  </p>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neon-cyan/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-cyan/30">
              <img src="https://cdn.poehali.dev/projects/bcd0dadf-8d06-4864-9acf-f0c74dddf81c/files/bf141e69-2095-4a90-a677-2d1294881579.jpg" alt="VOLK VPN" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold tracking-widest">
              <span className="neon-text">VOLK</span>
              <span className="text-white/50"> VPN</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-white/35 hover:text-neon-cyan transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={openTelegram} className="text-sm text-neon-cyan/70 hover:text-neon-cyan transition-colors flex items-center gap-2">
            <Icon name="Send" size={14} />
            @quhau
          </button>
        </div>
      </footer>
    </div>
  );
}