const stats = [
  { value: "+1.000", label: "Equipos mejorados" },
  { value: "24 hrs", label: "Entrega habitual" },
  { value: "8+ años", label: "De experiencia" },
  { value: "Gratis", label: "Retiro en Ñuñoa" },
];

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-4 card-shadow">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-7 text-center">
              <div className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-[13px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
