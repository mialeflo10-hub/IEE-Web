// Arreglo de datos: edita los números/textos aquí, no en el JSX.
const stats = [
  { value: "70+", label: "años formando ingenieros" },
  { value: "1700+", label: "estudiantes activos" },
  { value: "Alta", label: "empleabilidad al egresar" },
  { value: "10", label: "semestres" },
];

export default function Stats() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left border-t-2 border-copper pt-4">
            <div className="font-display text-4xl font-bold text-ink">{stat.value}</div>
            <div className="text-ink/60 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}