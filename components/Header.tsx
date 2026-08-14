// components/Header.tsx
"use client"; // useState y useEffect (JS en el navegador)

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/AboutCarrer", label: "La carrera" },
  { href: "/PlanDeEstudios", label: "Plan de estudios" },
  { href: "/Perfil", label: "Perfil Del Estudiante" },
  { href: "/noticias", label: "Noticias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/admin", label: "Administración" },
];

export default function Header() {
  // Guarda si el header debe estar visible u oculto
  const [visible, setVisible] = useState(true);
  // Guarda la posición de scroll del frame anterior, para comparar
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Si está cerca del tope (menos de 80px), siempre visible —
      // evita que "parpadee" oculto/visible justo al inicio de la página.
      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // El scroll actual es MAYOR que el anterior → bajando → ocultar
        setVisible(false);
      } else {
        // El scroll actual es MENOR que el anterior → subiendo → mostrar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    // Escucha el evento "scroll" del navegador
    window.addEventListener("scroll", handleScroll);
    // Limpieza: quita el listener cuando el componente se desmonta
    // (buena práctica para evitar fugas de memoria)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // se re-ejecuta cada vez que lastScrollY cambia

  return (
    <header
      className={`sticky top-0 z-50 bg-pcb-800 border-b border-copper/30 shadow-lg shadow-black/20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Logo/IEEColor.png" alt="Logo IEE" width={52} height={52} />
          <span className="font-display font-bold text-lg text-paper">Ingenería Eléctrica Electrónica</span>
        </Link>

        <div className="flex items-center gap-4">
          <Image src="/Logo/UNAM.png" alt="UNAM" width={62} height={62} className="opacity-90" />
          <Image src="/Logo/FI.png" alt="Facultad de Ingeniería" width={52} height={52} className="opacity-90" />
          <Image src="/Logo/DIE.png" alt="DIE" width={88} height={88} className="opacity-90" />
          <Image src="/Logo/IEEColor.png" alt="IEE" width={52} height={52} className="opacity-90" />
        </div>
      </div>

      <nav className="w-full bg-gold">
        <ul className="max-w-7xl mx-auto px-8 lg:px-12 py-2 flex gap-8">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-sm text-pcb-950 hover:text-paper transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
