import { useState } from "react";
import { site, telUrl, mailUrl, mapsUrl } from "../lib/site";
import { IconPhone, IconMail, IconPin, IconWhatsapp, IconArrow } from "./Icons";

const contactItems = [
  { icon: IconPhone, label: "Teléfono", value: site.phoneDisplay, href: telUrl },
  { icon: IconMail, label: "Email", value: site.email, href: mailUrl },
  { icon: IconPin, label: "Ubicación", value: site.address, href: mapsUrl },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", device: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Dr. Janofilo 👋\n\nSoy ${form.name || "—"}.\nEquipo: ${
        form.device || "—"
      }.\n${form.message || "Quiero mejorar el rendimiento de mi computador."}`
    );
    window.open(`https://wa.me/${site.phoneRaw}?text=${text}`, "_blank");
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contacto" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Hablemos de tu equipo
          </h2>
          <p className="mt-4 text-slate-600">
            Cuéntame qué necesitas y te responderé con una orientación clara y
            una oferta personalizada.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={submit}
            className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="grid gap-4">
              <Field label="Tu nombre">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ej: María Pérez"
                  className="input"
                />
              </Field>
              <Field label="Tu equipo">
                <input
                  value={form.device}
                  onChange={update("device")}
                  placeholder="Ej: Notebook HP, 8 años, muy lento"
                  className="input"
                />
              </Field>
              <Field label="¿Qué quieres conseguir?">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Cuéntame el problema o lo que te gustaría mejorar…"
                  className="input resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <IconWhatsapp className="h-5 w-5" />
                Enviar por WhatsApp
                <IconArrow className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-slate-500">
                Se abrirá WhatsApp con tu mensaje listo para enviar.
              </p>
            </div>
          </form>

          {/* Info + map */}
          <div className="reveal flex flex-col gap-4" data-delay="100">
            <div className="grid gap-3">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Ubicación" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-brand-200 card-shadow"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                      {c.label}
                    </span>
                    <span className="block truncate font-semibold text-ink-900">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 card-shadow">
              <iframe
                title="Ubicación Dr. Janofilo"
                src="https://www.google.com/maps?q=Eche%C3%B1ique%20con%20Bremen%2C%20%C3%91u%C3%B1oa%2C%20Santiago&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}
