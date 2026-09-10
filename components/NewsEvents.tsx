import Link from "next/link";
import { noticiasOrdenadas } from "@/data/noticias";
import EventsCarousel from "@/components/EventsCarousel";

const categoriaColor: Record<string, string> = {
  Convocatoria: "text-gold",
  Logro: "text-copper",
  Aviso: "text-paper/60",
};

export default function NewsEvents() {
  const ultimasNoticias = noticiasOrdenadas().slice(0, 3);

  return (
    <section className="bg-pcb-950 text-paper">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
              Noticias y eventos
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Próximos eventos
            </h2>
          </div>
          <Link
            href="/noticias"
            className="font-mono text-sm text-signal hover:underline"
          >
            Ver todo →
          </Link>
        </div>

        <EventsCarousel />

        <h3 className="font-display text-2xl font-bold mt-16 mb-8">
          Últimas noticias
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ultimasNoticias.map((noticia) => (
            <article
              key={noticia.slug}
              className="border border-paper/10 rounded-lg p-6 hover:border-copper/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-mono text-xs uppercase tracking-wide ${categoriaColor[noticia.categoria]}`}
                >
                  {noticia.categoria}
                </span>
                <time className="font-mono text-xs text-paper/50">
                  {new Date(noticia.fecha).toLocaleDateString("es-MX", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h4 className="font-display font-bold text-lg mb-2">
                {noticia.titulo}
              </h4>
              <p className="text-paper/70 text-sm leading-relaxed">
                {noticia.resumen}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
