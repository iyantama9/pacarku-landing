import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100, 200], [0, 0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsVisible(y > 150);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] rounded-full px-5 md:px-8 py-3 md:py-4 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(189,0,255,0.08)]">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-black tracking-tighter text-white font-display flex items-center gap-2"
          >
            <img src="/logo_pacarku.png" alt="PacarKu Logo" className="h-6 md:h-7 w-auto" />
            <span className="hidden sm:block">PacarKu</span>
          </a>

          {/* Nav Links — Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="font-display text-sm font-semibold tracking-tight text-on-surface/60 transition-colors duration-300 hover:text-on-surface"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="font-display text-sm font-semibold tracking-tight text-on-surface/60 transition-colors duration-300 hover:text-on-surface"
            >
              Gallery
            </a>
            <a
              href="#cta"
              className="font-display text-sm font-semibold tracking-tight text-on-surface/60 transition-colors duration-300 hover:text-on-surface"
            >
              Premium
            </a>
          </div>

          {/* CTA Button — gradient */}
          <a
            href="#cta"
            className="bg-primary text-on-surface px-6 py-2.5 rounded-full font-label font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
