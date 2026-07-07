const logos = [
  { src: "/assets/shot-4.png", alt: "Masterpak" },
  { src: "/assets/shot-5.png", alt: "El Mundo del Vino" },
  { src: "/assets/shot-6.png", alt: "Crecelatam" },
];

export default function Clients() {
  return (
    <section id="clientes" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Algunos de mis clientes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Empresas y personas que confían en mi trabajo
          </h2>
          <p className="mt-4 text-slate-600">
            He solucionado problemas en más de 1.000 computadores que día a día
            sostienen el trabajo de quienes los usan.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {logos.map((l) => (
            <div
              key={l.alt}
              className="grid h-28 place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 card-shadow"
            >
              <img
                src={l.src}
                alt={l.alt}
                className="max-h-16 w-auto max-w-[75%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
