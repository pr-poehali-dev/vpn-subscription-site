export const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Серверы", href: "#servers" },
  { label: "Контакты", href: "#contacts" },
];

export const PLANS = [
  { devices: 1, price: 60 },
  { devices: 2, price: 119 },
  { devices: 3, price: 175 },
  { devices: 4, price: 235 },
  { devices: 5, price: 290 },
  { devices: 6, price: 345 },
];

export const SERVERS = [
  { flag: "🇫🇮", name: "Финляндия", ping: "12 мс", load: 42 },
  { flag: "🇩🇪", name: "Германия", ping: "18 мс", load: 58 },
  { flag: "🇷🇺", name: "Россия", ping: "5 мс", load: 35 },
  { flag: "🇳🇱", name: "Нидерланды", ping: "22 мс", load: 51 },
  { flag: "🌍", name: "И другие...", ping: "—", load: 0 },
];

export const FEATURES = [
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

export const COLOR_MAP = {
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

export const TELEGRAM_URL = "https://t.me/quhau";
export const LOGO_IMG = "https://cdn.poehali.dev/projects/bcd0dadf-8d06-4864-9acf-f0c74dddf81c/files/bf141e69-2095-4a90-a677-2d1294881579.jpg";
