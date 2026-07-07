import { site, whatsappUrl } from "../lib/site";
import { IconCheck, IconWhatsapp } from "./Icons";

const points = [
  "Diagnósticos precisos para mejorar el desempeño de tu equipo",
  "Venta y asesoría de tecnología para resolver el problema de raíz",
  "Experiencia con más de 1.000 computadores mejorados",
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-12 card-shadow">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Real photo of Alejandro */}
            <div className="reveal relative mx-auto w-full max-w-xs">
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-brand-300/50 via-sun-200/40 to-accent-300/50 blur-xl" />
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
                <img
                  src="/assets/alejandro.png"
                  alt="Alejandro Frey, Dr. Janofilo"
                  className="aspect-[4/5] w-full object-cover object-top"
                  width="400"
                  height="500"
                  loading="lazy"
                />
              </div>
              {/* Mascot badge linking his brand persona */}
              <div className="absolute -bottom-4 -right-3 grid h-16 w-16 place-items-center rounded-2xl border border-slate-200 bg-white p-1.5 card-shadow">
                <img
                  src="/assets/logo-01.png"
                  alt="Logo Dr. Janofilo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="reveal" data-delay="100">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Quién soy
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {site.owner}{" "}
                <span className="whitespace-nowrap text-gradient">
                  «Dr. Janofilo»
                </span>
              </h2>
              <p className="mt-2 font-display text-lg font-medium text-slate-500">
                {site.role}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
                He apoyado a decenas de empresas y personas a recuperar la
                potencia de sus equipos. Mi objetivo es que puedas disfrutar y
                trabajar con tu computador sin problemas ni frustraciones,
                actualizándolo con los mejores componentes y una asesoría honesta.
              </p>

              <ul className="mt-7 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-slate-700">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  <IconWhatsapp className="h-5 w-5" />
                  Conversemos
                </a>
                <p className="text-sm text-slate-500">
                  Retiro y entrega a domicilio{" "}
                  <span className="font-semibold text-brand-600">GRATIS</span> en
                  Ñuñoa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
