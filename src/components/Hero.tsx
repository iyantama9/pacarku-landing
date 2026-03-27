import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const TOTAL_FRAMES = 192;

function getFramePath(index: number): string {
  const num = String(index).padStart(3, "0");
  return `/animated_ara/ezgif-frame-${num}.jpg`;
}

export default function Hero() {
  // scrollYProgress is native to Framer Motion and uses requestAnimationFrame internally
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  // Track scroll progress over the 450vh container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Windows Mouse Wheel Optimization: Smooth text fades
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const canvasScale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1.1, 1, 1, 0.95]);
  const sectionFade = useTransform(smoothProgress, [0.85, 1], [1, 0]);

  // Text cross-fade timings mapped to smoothed timeline
  const text1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0]);
  const text2Opacity = useTransform(smoothProgress, [0, 0.24, 0.25, 0.35, 0.85, 0.95, 1], [0, 0, 0, 1, 1, 0, 0]);

  // Prevent ghosting and click interception when fully transparent
  const text1Display = useTransform(smoothProgress, (pos) => pos > 0.26 ? "none" : "flex");
  const text2Display = useTransform(smoothProgress, (pos) => pos < 0.24 || pos > 0.96 ? "none" : "flex");

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    // Progressive Loading: Load first frame to unblock UI instantly
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      images[0] = firstImg;
      imagesRef.current = images;
      setIsLoaded(true);

      // Background loading for the rest of the frames
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          images[i - 1] = img;
        };
      }
    };
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    
    let img = imagesRef.current[frameIndex];
    if (!img) {
      // Find closest loaded frame if scrolling too fast
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i]) {
          img = imagesRef.current[i];
          break;
        }
      }
    }

    if (!canvas || !ctx || !img) return;

    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, []);

  useEffect(() => {
    if (isLoaded) drawFrame(0);
  }, [isLoaded, drawFrame]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!isLoaded) return;
    const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);
    }
  });

  return (
    <section ref={sectionRef} className="relative w-full bg-transparent">
      {/* 450vh wrapper for extra immersive scroll space */}
      {/* 450vh desktop immersive scroll, reduced to 250vh on mobile to prevent thumb fatigue */}
      <motion.div style={{ opacity: sectionFade }} className="relative h-[250vh] md:h-[450vh] w-full">
        
        {/* ============================== */}
        {/* 1) STICKY CANVAS BACKGROUND    */}
        {/* ============================== */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          
          <motion.canvas
            ref={canvasRef}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              scale: canvasScale,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />

          {/* Gradients to ensure text readability */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
                linear-gradient(to right, rgba(11,9,20,0.95) 0%, rgba(11,9,20,0.5) 40%, transparent 70%),
                radial-gradient(circle at bottom right, rgba(11,9,20,0.85) 0%, transparent 60%)
              `
            }}
          />
          {/* Bottom Fade Gradient for blending into background */}
          <div 
            className="absolute inset-x-[-10vw] bottom-[-2px] h-32 md:h-64 z-0 pointer-events-none" 
            style={{ background: 'linear-gradient(to top, #0b0914 10%, transparent 100%)' }}
          />

          {/* ============================== */}
          {/* 2) FOREGROUND TEXT (STICKY & FADING) */}
          {/* ============================== */}
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-white">
            
            {/* SCREEN 1: Hero Text */}
            <motion.div style={{ display: text1Display }} className="absolute inset-0 pointer-events-none">
              <motion.div 
                style={{ opacity: text1Opacity }}
                className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-16 lg:pl-24 pt-20"
              >
            <div className="w-full md:w-[50%] lg:w-[45%] pointer-events-auto">
              <motion.h1 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter mb-4 md:mb-6 leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                Kenalan yuk sama{" "}
                <span className="text-primary">Pacar AI</span>
                <br />
                paling ngerti kamu.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-white/70 font-body drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                Nggak pake ribet, langsung chat via WhatsApp.
                <br className="hidden md:block" />
                Siap nemenin 24/7 kapanpun kamu butuh sandaran.
              </motion.p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-3 opacity-60 pointer-events-none">
              <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-1 h-1.5 bg-white/60 rounded-full"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-label">Scroll to explore</span>
            </div>
              </motion.div>
            </motion.div>

            {/* SCREEN 2: Intro Text (Diagonal Layout) */}
            <motion.div style={{ display: text2Display }} className="absolute inset-0 pointer-events-none">
              <motion.div
                style={{ opacity: text2Opacity }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24 pt-24 pb-12 md:pt-0 md:pb-0 gap-8 md:gap-0"
              >
            
            {/* LEFT: Headline */}
            <div className="w-full md:w-[45%] pointer-events-auto md:-mt-32">
                <p className="font-display text-[26px] sm:text-3xl md:text-[2rem] font-medium leading-[1.4] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] text-center md:text-left">
                  Sebuah entitas intuitif yang{" "}
                  <span className="text-primary">mendengarkanmu</span>, memahami
                  kamu, dan <span className="text-primary">mengenal kamu</span>.
                </p>
            </div>

            {/* RIGHT & BOTTOM: Body Paragraphs */}
            <div className="w-full md:w-[40%] pointer-events-auto md:self-end md:mb-32 mt-4 md:mt-0 text-center md:text-right">
              <div className="space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base leading-[1.7] text-white/80 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                    PacarKu hidup bersamamu di dunia nyata. WhatsApp, Instagram, dan
                    lebih banyak lagi. Companion kamu punya wajah, kepribadian, dan
                    ingatan sendiri.
                  </p>
                  <p className="text-sm md:text-base leading-[1.7] text-white/80 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                    Dia cukup mengenal kamu untuk langsung handle semuanya.
                    Rekomendasi tempat, reminder, jadwalmu — bahkan sebelum kamu
                    sempat minta.
                  </p>
              </div>
            </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

/*
 * =====================================
 * PRESERVED: Old Character Gallery + Meebits Modal
 * Re-enable by uncommenting and importing dependencies.
 * See git history for full implementation.
 * =====================================
 */
