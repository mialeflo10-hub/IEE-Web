import Image from "next/image"; // nuevo import

export default function Hero() {
  return (
    <section className="relative bg-pcb-950 text-paper overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EDE7D9" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-6 block">
            Facultad de Ingeniería · UNAM
          </span>
          <h1 className="font-display text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Ingeniería Eléctrica Electrónica
          </h1>
          <p className="text-paper/70 text-lg leading-relaxed mb-8 max-w-lg">
            Del diseño de circuitos a los sistemas que mueven una ciudad.
            Conoce el plan de estudios, el campo laboral y todo lo que
            necesitas para decidir tu carrera.
          </p>
          <div className="flex gap-4">
            <a href="#plan-de-estudios" className="bg-gold text-pcb-950 font-medium px-6 py-3 rounded hover:bg-gold/90 transition-colors">
              Plan de estudios
            </a>
            <a href="#campo-laboral" className="border border-paper/30 text-paper px-6 py-3 rounded hover:border-signal hover:text-signal transition-colors">
              Campo laboral
            </a>
          </div>
        </div>

        {/* "fill" hace que la imagen llene el contenedor padre (por eso
            el padre necesita "relative" y un tamaño definido, aquí con
            aspect-[4/3]). Es la forma correcta de usar next/image cuando
            no sabes el tamaño exacto en px de antemano.
            "priority" le dice a Next.js: esta imagen es lo primero que
            se ve (LCP), cárgala de inmediato, no hagas lazy loading. */}
        <div className="relative inline-block rounded-lg overflow-hidden ">       {// border border-copper/30 p-3
          <Image
            src="/Images/IEEw.png"   // ruta dentro de public/
            alt="Foto de ing"        // obligatorio
            width={800} height={600}  
            className="w-full h-auto"              // o width={800} height={600} si conoces el tamaño exacto 
                                //className="object-contain" // mismo className que le pondrías a un img normal
          />}
        </div>
      </div>
    </section>
  );
}