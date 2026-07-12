import Image from "next/image";
export default function AboutCareer() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* PLACEHOLDER, mismo caso que en el Hero */}
        <div className="relative aspect-4/3 rounded-lg overflow-hidden order-2 lg:order-1">
          <Image
            src="/Images/Que es ing elec.jpg"
            alt="Laboratorio de electrónica"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
            La carrera
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            ¿Qué es la Ingeniería Eléctrica Electrónica?
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Es la disciplina que diseña, desarrolla y mantiene los sistemas
            que generan, transmiten y controlan energía eléctrica y señales
            electrónicas — desde un microchip hasta una subestación.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Combina fundamentos de física y matemáticas con aplicaciones
            reales en telecomunicaciones, control, energía y sistemas
            digitales.
          </p>
        </div>
      </div>
    </section>
  );
}