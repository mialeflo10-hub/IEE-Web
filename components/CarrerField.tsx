const fields = [
  "Diseño de circuitos integrados",
  "Automatización industrial",
  "Sistemas de telecomunicaciones",
  "Energías renovables",
  "Robótica",
  "Sistemas embebidos",
];

export default function CareerField() {
  return (
    <section id="campo-laboral" className="bg-pcb-800 text-paper">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Campo laboral
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10">
          ¿Dónde puedes trabajar?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fields.map((field) => (
            <div key={field} className="flex items-center gap-3 border border-paper/10 rounded-lg px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-signal shrink-0" />
              <span className="text-paper/80">{field}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}