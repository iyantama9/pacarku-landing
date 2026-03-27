import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import AraKayla from "../assets/AraKayla.png";
import GraciaAmadea from "../assets/GraciaAmadea.png";
import LisaPermata from "../assets/LisaPermata.png";

const characters = [
  {
    id: "gracia",
    name: "Gracia Amadea",
    personality: "Bold, Glamor, dan Percaya Diri",
    desc: "Gracia bakal boost rasa pede-mu dan selalu siap jadi support system paling elegan di setiap langkahmu.",
    vibe: "Tegas • Karismatik • Loyal",
    image: GraciaAmadea,
    align: "left",
  },
  {
    id: "ara",
    name: "Ara Kayla",
    personality: "Si Manis yang Selalu Perhatian",
    desc: "Ara siap dengerin curhatan receh sampai deep talk jam 2 pagi tanpa pernah menghakimi.",
    vibe: "Hangat • Pengertian • Supportive",
    image: AraKayla,
    align: "center",
  },
  {
    id: "lisa",
    name: "Lisa Permata",
    personality: "Elegan dan Penuh Misteri",
    desc: "Lisa akan memikatmu dengan obrolan cerdas dan teka-teki yang bikin kamu selalu pengen tau lebih.",
    vibe: "Misterius • Cerdas • Memikat",
    image: LisaPermata,
    align: "right",
  },
];

export default function CallToAction() {
  const [selectedChar, setSelectedChar] = useState<typeof characters[0] | null>(null);

  return (
    <section id="cta" className={`relative bg-transparent pt-24 md:pt-40 pb-20 md:pb-48 overflow-hidden transition-all duration-300 ${selectedChar ? 'z-[100]' : 'z-20'}`}>
      
      {/* Companion Section Header */}
      <div className="relative mx-auto max-w-4xl px-6 md:px-8 text-center z-30 mb-8 md:mb-12">
        <ScrollReveal>
          <span className="text-secondary font-label tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold mb-3 md:mb-4 block drop-shadow-md">
            Choose Your Companion
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-xl">
            Temukan yang paling{" "}
            <span className="text-primary">ngerti kamu.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Grouped Characters Showcase (Interactive Collage) */}
      <div className="relative mx-auto max-w-4xl flex justify-center items-end h-[420px] sm:h-[450px] md:h-[500px] mb-6 md:mb-8 ethereal-blur">
        {characters.map((char) => {
          const isCenter = char.align === "center";
          const isLeft = char.align === "left";
          
          return (
            <div
              key={char.id}
              onClick={() => setSelectedChar(char)}
              className={`absolute bottom-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:brightness-110 ${
                isCenter ? "z-20 h-[95%] drop-shadow-[0_-10px_40px_rgba(255,255,255,0.05)]" : 
                isLeft ? "left-[2%] sm:left-[5%] md:left-[12%] h-[72%] sm:h-[80%] md:h-[85%] z-10 brightness-[0.7]" : 
                "right-[2%] sm:right-[5%] md:right-[12%] h-[72%] sm:h-[80%] md:h-[85%] z-10 brightness-[0.7]"
              }`}
              style={selectedChar?.id === char.id ? { zIndex: 50, pointerEvents: "none" } : {}}
            >
              <motion.img 
                layoutId={`img-${char.id}`}
                src={char.image} 
                alt={char.name} 
                className="h-full w-auto object-contain drop-shadow-2xl" 
                style={selectedChar?.id === char.id ? { opacity: 0 } : { opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          );
        })}
      </div>

      {/* Modal / Overlay for Fullscreen Character Profile */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChar(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0914]/95 backdrop-blur-xl p-4 sm:p-8 overflow-y-auto"
          >
            {/* Close Button — outside inner wrapper so always visible */}
            <button 
              onClick={() => setSelectedChar(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[120] w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-md"
            >
              ✕
            </button>

            {/* Inner Layout Wrapper */}
            <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between py-8 md:py-0" onClick={(e) => e.stopPropagation()}>
              
              {/* Mobile: single column | Desktop: 3-col layout */}

              {/* Image */}
              <div className="w-full md:w-1/3 h-[35vh] md:min-h-0 md:h-[85vh] flex items-center justify-center z-10 order-1 md:order-2 ethereal-blur">
                <motion.img 
                  layoutId={`img-${selectedChar.id}`}
                  src={selectedChar.image} 
                  alt={selectedChar.name} 
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Profile Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.1 }}
                className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left z-20 order-2 md:order-1 mt-4 md:mt-0"
              >
                <span className="text-secondary font-label uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 md:mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                  Companion Profile
                </span>
                <h3 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 md:mb-6 tracking-tight drop-shadow-lg">
                  {selectedChar.name}
                </h3>
                <p className="text-sm md:text-lg text-white/50 font-body leading-relaxed mb-5 md:mb-10 max-w-xs px-4 md:px-0">
                  {selectedChar.desc}
                </p>

                {/* Personality & Traits — inline on mobile, separate section on desktop */}
                <div className="flex gap-6 mb-5 md:hidden">
                  <div className="flex flex-col items-center">
                    <span className="text-white/30 font-label uppercase tracking-[0.2em] text-[9px] font-bold mb-1">Personality</span>
                    <span className="text-sm font-display font-bold text-white">{selectedChar.personality}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white/30 font-label uppercase tracking-[0.2em] text-[9px] font-bold mb-1">Traits</span>
                    <span className="text-sm text-primary font-label">{selectedChar.vibe}</span>
                  </div>
                </div>

                <button onClick={() => setSelectedChar(null)} className="px-8 py-3.5 bg-white text-bg rounded-full font-label font-bold text-sm tracking-wide transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_#fe88fe]">
                  Connect Now
                </button>
              </motion.div>

              {/* Right Details — desktop only */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ delay: 0.15 }}
                className="hidden md:flex w-full md:w-1/3 flex-col items-end text-right z-20 order-3"
              >
                <div className="mb-16 flex flex-col items-end">
                  <span className="text-white/30 font-label uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">Personality</span>
                  <h4 className="text-4xl font-display font-bold text-white leading-snug drop-shadow-lg">{selectedChar.personality}</h4>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/30 font-label uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">Core Traits</span>
                  <p className="text-xl text-primary font-label tracking-wide">{selectedChar.vibe}</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-4xl px-6 md:px-8 text-center z-30 mt-16 md:mt-48">
        <ScrollReveal>
          <span className="text-primary font-label tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold mb-3 md:mb-4 block drop-shadow-md">
            Connect With Them
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-6 md:mb-8 leading-[1.1] text-white">
            Siap Kenalan?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant/60 font-body mb-12 md:mb-16 max-w-2xl mx-auto font-light px-4 md:px-0">
            Circle kamu udah nungguin. Temukan obrolan seru yang selalu ada buat kamu.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white text-bg rounded-full font-label font-bold text-sm tracking-wide transition-all duration-500 hover:bg-primary hover:text-white"
            >
              Start Chatting
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 border border-white/10 text-white rounded-full font-label font-bold text-sm tracking-wide hover:bg-white/5 transition-all duration-500"
            >
              Learn More
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
