import { whatsappUrl } from "../lib/site";
import { IconWhatsapp, IconArrow } from "./Icons";

const steps = [
  {
    n: "01",
    title: "Cuéntame tu problema",
    desc: "Escríbeme por WhatsApp qué le pasa a tu equipo o qué quieres lograr. Te respondo en minutos.",
  },
  {
    n: "02",
    title: "Diagnóstico y presupuesto",
    desc: "Reviso tu equipo, detecto la causa real y te doy una oferta personalizada y transparente.",
  },
  {
    n: "03",
    title: "Retiro a domicilio gratis",
    desc: "Paso a buscar tu computador en Ñuñoa sin costo. Tú sigues con tu día mientras yo me encargo.",
  },
  {
    n: "04",
    title: "Listo y funcionando",
    desc: "Te devuelvo tu equipo optimizado, más rápido y con toda tu información intacta.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Simple, rápido y sin complicaciones
          </h2>
          <p className="mt-4 text-slate-600">
            Cuatro pasos para tener tu equipo rindiendo al máximo. Yo me encargo
            de lo técnico, tú de disfrutarlo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative rounded-3xl border border-slate-200 bg-slate-50 p-6"
              data-delay={i * 80}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 font-display text-lg font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <IconWhatsapp className="h-5 w-5" />
            Empezar ahora
            <IconArrow className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
