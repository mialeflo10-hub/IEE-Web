// components/AboutCareer.tsx
import Image from "next/image";

// Cifras reales de la encuesta PVEAJU 2022-2023 (generación 2019),
// publicadas en oferta.unam.mx. Si en el futuro tienes datos más
// recientes, solo actualiza los números aquí.
const quickFacts = [
  { label: "Duración", value: "9 semestres" },
  { label: "Título", value: "Ingeniero Eléctrico Electrónico" },
  { label: "Trabajando a 3-4 años de egresar", value: "79%" },
  { label: "Con empleo relacionado a la carrera", value: "85%" },
];

const areas = [
  {
    title: "Área eléctrica",
    desc:
      "Generación, transmisión y distribución de energía eléctrica: desde plantas hidroeléctricas y termoeléctricas hasta redes de distribución, buscando siempre la mayor eficiencia energética.",
  },
  {
    title: "Área electrónica",
    desc:
      "Diseño de sistemas para medir, analizar, controlar y automatizar procesos —desde comunicaciones y salud hasta industria— usando circuitos analógicos, digitales y microcontroladores.",
  },
];

export default function AboutCareer() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Columna izquierda: imagen + cifras rápidas debajo */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-4/3 rounded-lg overflow-hidden mb-8">
            <Image
              src="/Images/Que es ing elec.jpg"
              alt="Laboratorio de Ingeniería Eléctrica Electrónica"
              fill
              className="object-cover"
            />
          </div>

          {/* Grid de datos duros, sacados directo de oferta.unam.mx.
              Es la misma idea que tu componente Stats.tsx pero a menor
              escala, específica de esta sección. */}
          <div className="grid grid-cols-2 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-copper pl-4">
                <div className="font-display text-xl font-bold text-ink">
                  {fact.value}
                </div>
                <div className="text-ink/60 text-xs mt-1">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: texto */}
        <div className="order-1 lg:order-2">
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
            La carrera
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            ¿Qué es la Ingeniería Eléctrica Electrónica?
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Formamos ingenieros capaces de crear, diseñar y generar
            tecnología: desde instalaciones y máquinas eléctricas, hasta
            sistemas de comunicación telefónica, satelital y de control
            industrial basados en microcomputadoras.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8">
            Es una carrera de espectro amplio: te da las bases para
            trabajar en el sector eléctrico, de comunicaciones, salud,
            transporte, industria y servicios, con la posibilidad de
            especializarte más adelante en el área que más te interese.
          </p>

          {/* Dos tarjetas: área eléctrica vs electrónica */}
          <div className="space-y-4">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-ink/10 rounded-lg p-5 hover:border-copper transition-colors"
              >
                <h3 className="font-display font-bold text-ink mb-2">
                  {area.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
