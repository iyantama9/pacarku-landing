import ScrollReveal from "./ScrollReveal";

export default function IntroText() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-3xl px-6 md:px-8 py-20 md:py-32 flex flex-col gap-8">
        <ScrollReveal>
          <p className="font-display text-2xl font-medium leading-[1.6] text-on-surface sm:text-3xl md:text-[2rem] md:leading-[1.6]">
            Sebuah entitas intuitif yang{" "}
            <span className="text-primary">mendengarkanmu</span>, memahami
            kamu, dan{" "}
            <span className="text-primary">mengenal kamu</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base leading-[1.8] text-on-surface-variant/70 md:text-lg">
            PacarKu hidup bersamamu di dunia nyata. WhatsApp, Instagram, dan
            lebih banyak lagi. Companion kamu punya wajah, kepribadian, dan
            ingatan sendiri. Dia belajar tentangmu, dan bertumbuh bersamamu.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-base leading-[1.8] text-on-surface-variant/70 md:text-lg">
            Dia cukup mengenal kamu untuk langsung handle semuanya.
            Rekomendasi tempat, reminder, jadwalmu — bahkan sebelum kamu
            sempat minta.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
