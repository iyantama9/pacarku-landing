import ScrollReveal from "./ScrollReveal";
import AraKayla from "../assets/AraKayla.png";
import GraciaAmadea from "../assets/GraciaAmadea.png";
import LisaPermata from "../assets/LisaPermata.png";

const characters = [
  {
    name: "Gracia Amadea",
    tagline: "Bold & Glamor",
    image: GraciaAmadea,
    accent: "from-primary/20 to-transparent",
    border: "hover:border-primary/30",
  },
  {
    name: "Ara Kayla",
    tagline: "Warm & Caring",
    image: AraKayla,
    accent: "from-secondary/20 to-transparent",
    border: "hover:border-secondary/30",
  },
  {
    name: "Lisa Permata",
    tagline: "Elegant & Mysterious",
    image: LisaPermata,
    accent: "from-tertiary/20 to-transparent",
    border: "hover:border-tertiary/30",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-transparent py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 xl:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal>
            <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold mb-4 block">
              Meet the Companions
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
              Pilih yang paling <span className="text-primary">kamu suka.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-on-surface-variant/60 max-w-md mx-auto text-sm md:text-base leading-relaxed font-body">
              Tiga kepribadian berbeda, satu tujuan: selalu ada buat kamu.
            </p>
          </ScrollReveal>
        </div>

        {/* Character gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {characters.map((char, i) => (
            <ScrollReveal key={char.name} delay={0.1 * i} direction="up" distance={32}>
              <a
                href="#cta"
                className={`group relative flex flex-col items-center rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/[0.06] overflow-hidden transition-all duration-500 hover:bg-white/[0.05] ${char.border}`}
              >
                {/* Gradient accent overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${char.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Character image */}
                <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] flex items-end justify-center overflow-hidden ethereal-blur">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="h-[90%] w-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Name & tagline */}
                <div className="relative z-10 w-full px-6 md:px-8 pb-8 pt-2 text-center">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                    {char.name}
                  </h3>
                  <p className="mt-1 text-xs font-label text-on-surface-variant/50 uppercase tracking-widest">
                    {char.tagline}
                  </p>
                </div>

                {/* Top inner highlight on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
