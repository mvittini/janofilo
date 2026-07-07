import { site, whatsappUrl, telUrl, mailUrl, mapsUrl } from "../lib/site";
import { IconWhatsapp, IconPhone, IconMail, IconPin } from "./Icons";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-950 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src="/assets/logo-03.png"
              alt="Dr. Janofilo"
              className="h-8 w-auto"
              width="220"
              height="47"
              loading="lazy"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {site.owner} · {site.role}. Devuélvele la potencia a tu computador
              con diagnósticos precisos y upgrades a tu medida.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              <IconWhatsapp className="h-4 w-4" />
              Escríbeme
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li><a className="transition hover:text-white" href="#servicios">Servicios</a></li>
              <li><a className="transition hover:text-white" href="#sobre">Sobre mí</a></li>
              <li><a className="transition hover:text-white" href="#clientes">Clientes</a></li>
              <li><a className="transition hover:text-white" href="#testimonios">Testimonios</a></li>
              <li><a className="transition hover:text-white" href="#precios">Precios</a></li>
              <li><a className="transition hover:text-white" href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href={telUrl} className="flex items-center gap-2.5 transition hover:text-white">
                  <IconPhone className="h-4 w-4 text-brand-400" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailUrl} className="flex items-center gap-2.5 transition hover:text-white">
                  <IconMail className="h-4 w-4 text-brand-400" /> {site.email}
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 transition hover:text-white">
                  <IconPin className="h-4 w-4 text-brand-400" /> {site.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p>Retiro y entrega a domicilio GRATIS en Ñuñoa.</p>
        </div>
      </div>
    </footer>
  );
}
