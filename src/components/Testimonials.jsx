import { IconStar, IconQuote } from "./Icons";

const testimonials = [
  {
    quote:
      "Muy contenta con el trabajo de Ale: concreto, rápido, ultra eficiente, excelente voluntad, plazos cumplidos y excelente precio. Toda mi confianza en su valioso trabajo.",
    name: "Lorena Capetillo",
    role: "Actriz",
    avatar: "/assets/cliente-lorena.png",
  },
  {
    quote:
      "Tengo mi computador hace 8 años, pensé que era hora de uno nuevo, pero Jano lo dejó corriendo como nuevo. No perdí nada de información y tardó solo 1 día.",
    name: "Flavio Llanos",
    role: "Ñuñoa",
    avatar: "/assets/cliente-flavio.jpg",
  },
  {
    quote:
      "Me encantó cómo quedó mi notebook. Antes estaba súper lento y se quedaba pegado. Ahora anda muy bien.",
    name: "María José Silva",
    role: "Las Condes",
    avatar: "/assets/cliente-maria.png",
  },
  {
    quote:
      "Mi PC falló un día y me recomendaron a Jano. Le expliqué mi urgencia y en menos de un día ya tenía el problema solucionado, a un precio razonable.",
    name: "Gustavo Cincinnati",
    role: "Providencia",
    avatar: "/assets/cliente-gustavo.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Opiniones
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Lo que dicen mis clientes
          </h2>
          <p className="mt-4 text-slate-600">
            Personas y empresas que recuperaron la potencia de sus equipos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
              data-delay={i * 60}
            >
              <IconQuote className="absolute right-6 top-6 h-9 w-9 text-slate-200" />
              <div className="flex gap-0.5 text-sun-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <IconStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-white shadow"
                  loading="lazy"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink-900">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
