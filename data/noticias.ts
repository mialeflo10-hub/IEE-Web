// Fuente de datos de las noticias del sitio.
// No hay backend/base de datos: para publicar una noticia nueva basta con
// agregar un objeto a este arreglo (y hacer commit + deploy). Ver README.md
// para la explicación completa de por qué se eligió este enfoque.

export type Noticia = {
  slug: string;
  titulo: string;
  fecha: string; // formato ISO "AAAA-MM-DD", para poder ordenar por fecha
  categoria: "Convocatoria" | "Logro" | "Aviso";
  resumen: string;
};

// Los eventos (con fecha/lugar/imagen propios) viven en data/eventos.ts,
// no aquí — ver components/EventsCarousel.tsx.
export const noticias: Noticia[] = [
  {
    slug: "convocatoria-servicio-social-2026-1",
    titulo: "Abre convocatoria de servicio social 2026-1",
    fecha: "2026-08-20",
    categoria: "Convocatoria",
    resumen:
      "Ya están disponibles los programas de servicio social registrados por la coordinación para el semestre 2026-1. Registro en línea hasta el 15 de septiembre.",
  },
  {
    slug: "equipo-robotica-primer-lugar",
    titulo: "Equipo de robótica de la facultad gana primer lugar nacional",
    fecha: "2026-07-28",
    categoria: "Logro",
    resumen:
      "El equipo formado por estudiantes de Ingeniería Eléctrica Electrónica obtuvo el primer lugar en la competencia nacional de robótica autónoma.",
  },
  {
    slug: "cambio-horario-atencion-coordinacion",
    titulo: "Cambio de horario de atención de la coordinación",
    fecha: "2026-07-15",
    categoria: "Aviso",
    resumen:
      "A partir del próximo lunes, la coordinación atenderá de 9:00 a 15:00 horas. Los trámites en línea no sufren cambios.",
  },
];

export function noticiasOrdenadas(): Noticia[] {
  return [...noticias].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}
