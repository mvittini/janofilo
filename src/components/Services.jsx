import {
  IconGauge,
  IconChip,
  IconWrench,
  IconShield,
  IconLaptop,
  IconTruck,
} from "./Icons";

const services = [
  {
    icon: IconGauge,
    color: "text-brand-600 bg-brand-50",
    title: "Optimización de rendimiento",
    desc: "Limpieza profunda y ajuste del sistema para eliminar lo que frena tu equipo. Arranca y responde como nuevo.",
  },
  {
    icon: IconChip,
    color: "text-accent-500 bg-accent-300/20",
    title: "Upgrade de componentes",
    desc: "Instalación de disco SSD, más memoria RAM y las piezas ideales según tu uso y presupuesto.",
  },
  {
    icon: IconWrench,
    color: "text-coral-500 bg-coral-300/20",
    title: "Reparación y diagnóstico",
    desc: "Detecto la causa exacta del problema y la soluciono, sin cambios ni gastos innecesarios.",
  },
  {
    icon: IconShield,
    color: "text-brand-600 bg-brand-50",
    title: "Respaldo de tus datos",
    desc: "Cuido tu información durante todo el proceso para que no pierdas nada de lo importante.",
  },
  {
    icon: IconLaptop,
    color: "text-accent-500 bg-accent-300/20",
    title: "Venta de tecnología",
    desc: "Te asesoro y consigo los mejores componentes y equipos para resolver tu problema de forma definitiva.",
  },
  {
    icon: IconTruck,
    color: "text-coral-500 bg-coral-300/20",
    title: "Retiro y entrega a domicilio",
    desc: "Retiro y entrega GRATIS en Ñuñoa. Tú sigues con lo tuyo mientras yo dejo tu equipo impecable.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Servicios
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Todo lo que tu equipo necesita
          </h2>
          <p className="mt-4 text-slate-600">
            Soluciones a medida para personas y empresas, sin tecnicismos
            innecesarios y con resultados que se notan desde el primer día.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 card-shadow"
              data-delay={i * 60}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${s.color}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
