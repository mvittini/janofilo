import { site, whatsappUrl, telUrl } from "../lib/site";
import { IconCheck, IconWhatsapp, IconPhone } from "./Icons";

const included = [
  "Diagnóstico sin costo",
  "Oferta personalizada según tu equipo",
  "Respaldo de tu información",
  "Retiro y entrega GRATIS en Ñuñoa",
  "Asesoría honesta, sin cambios innecesarios",
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-ink-900 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-10" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-accent-500/25 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-200">
                Precios transparentes
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Desde <span className="text-sun-400">{site.priceFrom}</span>
              </h2>
              <p className="mt-4 max-w-md text-slate-300">
                Cada equipo es distinto, por eso primero conversamos qué quieres
                conseguir y te doy una oferta a tu medida. Sin costos ocultos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-400"
                >
                  <IconWhatsapp className="h-5 w-5" />
                  Pedir mi oferta
                </a>
                <a
                  href={telUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <IconPhone className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <p className="font-display text-lg font-semibold">Siempre incluido</p>
              <ul className="mt-5 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/25 text-brand-300">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
