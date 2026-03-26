import Icon from "@/components/ui/icon";
import AnimSection from "./AnimSection";
import { NAV_LINKS, TELEGRAM_URL, LOGO_IMG } from "./constants";

interface ContactsFooterProps {
  onScrollTo: (href: string) => void;
}

export default function ContactsFooter({ onScrollTo }: ContactsFooterProps) {
  const openTelegram = () => window.open(TELEGRAM_URL, "_blank");

  return (
    <>
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
              <img src={LOGO_IMG} alt="VOLK VPN" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold tracking-widest">
              <span className="neon-text">VOLK</span>
              <span className="text-white/50"> VPN</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => onScrollTo(l.href)} className="text-sm text-white/35 hover:text-neon-cyan transition-colors">
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
    </>
  );
}
