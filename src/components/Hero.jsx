import { site, whatsappUrl, telUrl } from "../lib/site";
import { IconWhatsapp, IconPhone, IconStar, IconCheck } from "./Icons";

const bullets = [
  "Diagnóstico sin costo",
  "Retiro y entrega GRATIS en Ñuñoa",
  "Sin perder tu información",
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-70" />
        <div className="absolute -top-32 right-0 h-[440px] w-[440px] rounded-full bg-brand-300/25 blur-[120px]" />
        <div className="absolute -top-10 left-1/4 h-[320px] w-[320px] rounded-full bg-sun-300/30 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="reveal text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Servicio técnico a domicilio · Ñuñoa
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Tu computador{" "}
            <span className="mark">más rápido</span> y potente en{" "}
            <span className="text-gradient">24 horas</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Soy {site.owner}, {site.role}. Optimizo, reparo y hago upgrade de
            computadores y notebooks para que vuelvan a rendir como nuevos, sin
            que pierdas tus archivos.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
            >
              <IconWhatsapp className="h-5 w-5" />
              Cotiza gratis por WhatsApp
            </a>
            <a
              href={telUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-slate-400 sm:w-auto"
            >
              <IconPhone className="h-5 w-5 text-brand-600" />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 lg:justify-start">
            {bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-brand-600" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Mascot — clean, nothing on top */}
        <div className="reveal order-first lg:order-last" data-delay="120">
          <div className="relative mx-auto max-w-md">
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto aspect-square w-[92%] translate-y-3 rounded-full bg-gradient-to-br from-brand-200/60 to-accent-300/50 blur-2xl" />
            <img
              src="/assets/logo-01.png"
              alt="Dr. Janofilo — servicio técnico de computadores"
              className="animate-float relative mx-auto w-[74%] max-w-xs sm:max-w-sm"
              width="640"
              height="628"
              fetchPriority="high"
            />
          </div>

          {/* Rating pill (real, outside/below the mascot) */}
          <div className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 card-shadow">
            <div className="flex gap-0.5 text-sun-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink-900">
              +1.000 equipos mejorados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
