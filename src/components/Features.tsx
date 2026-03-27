import {
  MessageCircle,
  Smartphone,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MessageCircle,
    title: "Gak Kaku, Seru Terus.",
    description:
      "Obrolan yang ngalir kayak chat sama bestie. Pake bahasa gaul, ngerti slang, dan gak pernah nge-judge kamu.",
    tags: ["#GenZApproved", "#AntiBaper"],
    colSpan: "md:col-span-12 lg:col-span-8",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Chat via WA",
    description:
      "Gak perlu download app baru. Langsung chat dari aplikasi yang tiap hari kamu buka.",
    link: { text: "Cek Caranya", href: "#cta" },
    colSpan: "md:col-span-12 lg:col-span-4",
    size: "small",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Mau curhat jam 2 pagi pas lagi overthinking? PacarKu selalu ada buat dengerin.",
    colSpan: "md:col-span-12 lg:col-span-4",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Privasi Aman Banget.",
    description:
      "Rahasia kamu aman di sini. Enkripsi level dewa biar kamu bebas jadi diri sendiri tanpa rasa takut.",
    colSpan: "md:col-span-12 lg:col-span-8",
    size: "large",
    hasVisual: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-transparent">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 xl:px-12 py-20 md:py-32">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <ScrollReveal>
              <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold mb-4 block">
                Manifest Your Vibes
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
                Kenapa PacarKu?
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed opacity-70">
              Dibuat khusus buat kamu yang bosen sama interaksi AI yang kaku.
              We bring the soul into the chat.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid (Desktop) / Horizontal Carousel (Mobile) */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={0.08 * i}
              className={`${feature.colSpan}`}
            >
              <div className="group relative h-full rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] p-6 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]">
                {/* Subtle top inner highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon wrapper */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 md:mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-110">
                      <feature.icon
                        size={feature.size === "large" ? 28 : 24}
                        className={
                          i === 0
                            ? "text-primary"
                            : i === 1
                            ? "text-secondary"
                            : i === 2
                            ? "text-tertiary"
                            : "text-primary-container"
                        }
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3
                      className={`font-display font-medium text-white tracking-tight ${
                        feature.size === "large"
                          ? "text-3xl mb-4"
                          : "text-2xl mb-3"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-on-surface-variant/80 font-body leading-relaxed w-full break-words ${
                        feature.size === "large"
                          ? "md:max-w-md text-base"
                          : "text-sm"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {feature.tags && (
                    <div className="mt-8 md:mt-12 flex flex-wrap gap-2 md:gap-4">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 md:px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-label text-on-surface-variant transition-colors duration-300 group-hover:border-white/[0.15]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="mt-6 md:mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-container"
                    >
                      {feature.link.text}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>



                {/* Decorative lock visual for privacy overlay */}
                {feature.hasVisual && (
                  <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full items-center justify-center">
                    <div className="absolute inset-0 border border-white/[0.05] rounded-full bg-gradient-to-tr from-transparent to-white/[0.02]" />
                    <div className="absolute inset-4 border-2 border-dashed border-white/[0.1] rounded-full animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-12 border border-white/[0.05] rounded-full bg-white/[0.01] backdrop-blur-sm" />
                    <Lock size={36} className="text-white/40 z-10" strokeWidth={1} />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}