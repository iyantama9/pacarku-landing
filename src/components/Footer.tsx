export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent border-t border-white/[0.05]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-12 py-12 md:flex-row">
        {/* Logo + copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <img src="/logo_pacarku.png" alt="PacarKu Logo" className="h-6 w-auto grayscale opacity-80" />
            <span className="text-xl font-bold text-white font-display">
              PacarKu.
            </span>
          </div>
          <p className="text-xs text-on-surface-variant/40 font-body tracking-wider">
            © 2026 PacarKu. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["Instagram", "Twitter", "Discord", "Privacy"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-on-surface-variant/60 hover:text-white transition-colors duration-300 font-label uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}