import { noticiasOrdenadas } from "@/data/noticias";
import EventsCarousel from "@/components/EventsCarousel";

const categoriaColor: Record<string, string> = {
  Convocatoria: "text-gold",
  Logro: "text-copper",
  Aviso: "text-ink/50",
};

export default function Noticias() {
  const noticias = noticiasOrdenadas();

  return (
    <>
      <section className="bg-pcb-950 text-paper">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
            Canal de noticias
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-bold mb-10">
            Noticias y eventos
          </h1>

          <h2 className="font-display text-xl font-bold mb-6">
            Próximos eventos
          </h2>
          <EventsCarousel />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">
            Noticias
          </h2>

          <div className="space-y-6 max-w-3xl">
            {noticias.map((noticia) => (
              <article
                key={noticia.slug}
                className="bg-white border-l-4 border-copper rounded p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs uppercase tracking-wide ${categoriaColor[noticia.categoria]}`}
                  >
                    {noticia.categoria}
                  </span>
                  <time className="font-mono text-xs text-ink/50">
                    {new Date(noticia.fecha).toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-ink/70 leading-relaxed">{noticia.resumen}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
