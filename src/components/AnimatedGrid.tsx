import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-bg">
      {/* Film Grain Texture for Luxury Feel - Extremely cheap opacity blend */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-10 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Aurora Orb 1: Primary Cyan */}
      <motion.div
        animate={{
          x: ["0%", "10%", "-10%", "0%"],
          y: ["0%", "15%", "-5%", "0%"],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/30 blur-[80px] md:blur-[140px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      />
      
      {/* Aurora Orb 2: Secondary Cyan */}
      <motion.div
        animate={{
          x: ["0%", "-20%", "10%", "0%"],
          y: ["0%", "-10%", "15%", "0%"],
          scale: [1, 0.8, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[80px] md:blur-[140px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      />

      {/* Aurora Orb 3: Tertiary Warm */}
      <motion.div
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "-15%", "15%", "0%"],
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 4 }}
        className="hidden md:block absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-tertiary/15 blur-[120px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      />
      
      {/* SOLID Dimmer overlay (ZERO BLUR) to keep text crisp, super lightweight rendering */}
      <div className="absolute inset-0 bg-[#0b0914]/60" />
    </div>
  );
}
