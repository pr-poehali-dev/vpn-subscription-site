import { useState } from "react";
import Icon from "@/components/ui/icon";
import AnimSection from "./AnimSection";
import { FEATURES, PLANS, SERVERS, COLOR_MAP, TELEGRAM_URL } from "./constants";

export default function MainSections() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const openTelegram = () => window.open(TELEGRAM_URL, "_blank");

  return (
    <>
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
              const c = COLOR_MAP[f.color as keyof typeof COLOR_MAP];
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
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5">"{review.text}"</p>
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
    </>
  );
}
