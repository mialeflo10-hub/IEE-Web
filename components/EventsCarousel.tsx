"use client"; // useRef + botones que desplazan el carrusel

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventosOrdenados } from "@/data/eventos";

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const eventos = eventosOrdenados();

  // Desplaza el carrusel aproximadamente una tarjeta (320px + gap) por click.
  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -336 : 336,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Evento anterior"
        className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-pcb-800 border border-paper/20 text-paper hover:border-copper hover:text-copper transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {eventos.map((evento) => (
          <article
            key={evento.slug}
            className="snap-start shrink-0 w-80 border border-paper/10 rounded-lg overflow-hidden hover:border-copper/50 transition-colors"
          >
            <div className="relative aspect-video">
              <Image
                src={evento.imagen}
                alt={evento.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <time className="font-mono text-xs text-copper block mb-2">
                {new Date(evento.fecha).toLocaleDateString("es-MX", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="font-display font-bold text-lg text-paper mb-1">
                {evento.titulo}
              </h3>
              <p className="text-paper/50 text-xs mb-3">{evento.lugar}</p>
              <p className="text-paper/70 text-sm leading-relaxed">
                {evento.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Siguiente evento"
        className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-pcb-800 border border-paper/20 text-paper hover:border-copper hover:text-copper transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
