import Image from "next/image"; // nuevo import

export default function Hero() {
  return (
    <section className="relative bg-pcb-950 text-paper overflow-hidden">
      {/* Fondo tipo placa de circuito: pistas ortogonales con esquinas a
          45° (como el cobre de un PCB real), vías (puntos) en las
          uniones y una huella de chip DIP. Las dos "pistas bus" (recta
          horizontal y vertical, de borde a borde) hacen que el patrón
          encastre sin costuras al repetirse; el resto de las pistas
          quedan contenidas dentro del tile para lo mismo. */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <pattern id="circuit" width="220" height="220" patternUnits="userSpaceOnUse">
            {/* pistas bus, de borde a borde del tile */}
            <path d="M 0 110 L 220 110" fill="none" stroke="#EDE7D9" strokeWidth="1.5" />
            <path d="M 110 0 L 110 220" fill="none" stroke="#EDE7D9" strokeWidth="1.5" />

            {/* ramales con esquinas a 45°, contenidos dentro del tile */}
            <path d="M 60 110 L 60 76 L 84 52" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            <path d="M 150 110 L 150 142 L 176 168" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            <path d="M 110 40 L 74 40 L 50 16" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            <path d="M 110 176 L 146 176 L 170 200" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            <path d="M 30 110 L 12 110 L 12 30" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            <path d="M 190 110 L 205 110 L 205 190" fill="none" stroke="#EDE7D9" strokeWidth="1" />

            {/* vías: puntos en cruces y esquinas */}
            <circle cx="110" cy="110" r="3" fill="#EDE7D9" />
            <circle cx="84" cy="52" r="2.5" fill="#EDE7D9" />
            <circle cx="176" cy="168" r="2.5" fill="#EDE7D9" />
            <circle cx="50" cy="16" r="2.5" fill="#EDE7D9" />
            <circle cx="170" cy="200" r="2.5" fill="#EDE7D9" />
            <circle cx="12" cy="30" r="2" fill="#EDE7D9" />
            <circle cx="205" cy="190" r="2" fill="#EDE7D9" />

            {/* huella de chip tipo DIP, con patitas a los lados */}
            <rect x="150" y="40" width="34" height="22" fill="none" stroke="#EDE7D9" strokeWidth="1" />
            {[46, 52, 58].map((y) => (
              <g key={y}>
                <path d={`M 138 ${y} L 150 ${y}`} stroke="#EDE7D9" strokeWidth="1" />
                <path d={`M 184 ${y} L 196 ${y}`} stroke="#EDE7D9" strokeWidth="1" />
              </g>
            ))}

            {/* pads sueltos, tipo SMD */}
            <rect x="26" y="160" width="6" height="6" fill="#EDE7D9" />
            <rect x="196" y="70" width="6" height="6" fill="#EDE7D9" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
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