
const areas = [
  { code: "A01", name: "Circuitos y electrónica", desc: "Análisis y diseño de circuitos analógicos y digitales." },
  { code: "A02", name: "Sistemas de control", desc: "Modelado y automatización de procesos." },
  { code: "A03", name: "Energía eléctrica", desc: "Generación, transmisión y distribución de potencia." },
  { code: "A04", name: "Telecomunicaciones", desc: "Transmisión de señales e infraestructura de red." },
];

export default function StudyPlan() {
  return (
    <section id="plan-de-estudios" className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Plan de estudios
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-10">
          Campos de Profundización
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div key={area.code} className="bg-white border border-ink/10 rounded-lg p-6 hover:border-copper transition-colors">
              <span className="font-mono text-xs text-copper">{area.code}</span>
              <h3 className="font-display font-bold text-ink text-lg mt-2 mb-2">{area.name}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );    
}