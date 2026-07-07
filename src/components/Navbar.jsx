import { useEffect, useState } from "react";
import { site, whatsappUrl } from "../lib/site";
import { IconWhatsapp, IconMenu, IconClose } from "./Icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#clientes", label: "Clientes" },
  { href: "#testimonios", label: "Opiniones" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label={site.name}>
            <img
              src="/assets/logo-01.png"
              alt="Dr. Janofilo"
              className="h-10 w-10 object-contain"
              width="40"
              height="40"
            />
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
              Dr. Janofilo
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 transition hover:bg-brand-600 sm:flex"
            >
              <IconWhatsapp className="h-4 w-4" />
              Cotizar gratis
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl text-ink-900 transition hover:bg-slate-100 lg:hidden"
              aria-label="Abrir menú"
            >
              {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-3 card-shadow">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <IconWhatsapp className="h-4 w-4" />
              Cotizar gratis por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
