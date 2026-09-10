// Igual que data/noticias.ts: sin backend, para agregar un evento nuevo
// basta con sumar un objeto a este arreglo (y hacer commit + deploy).

export type Evento = {
  slug: string;
  titulo: string;
  fecha: string; // formato ISO "AAAA-MM-DD"
  lugar: string;
  imagen: string; // ruta dentro de public/
  descripcion: string;
};

export const eventos: Evento[] = [
  {
    slug: "semana-ieee-2026",
    titulo: "Semana IEEE UNAM 2026",
    fecha: "2026-10-06",
    lugar: "Facultad de Ingeniería, Ciudad Universitaria",
    // PLACEHOLDER: usar foto real del evento cuando exista.
    imagen: "/Images/IEEw.png",
    descripcion:
      "Talleres de electrónica, robótica y sistemas embebidos, además de conferencias con egresados de la carrera.",
  },
  {
    slug: "coloquio-egresados-2026",
    titulo: "Coloquio de egresados IEE",
    fecha: "2026-09-25",
    lugar: "Auditorio Ing. Javier Barros Sierra",
    // PLACEHOLDER: usar foto real del evento cuando exista.
    imagen: "/Images/Que es ing elec.jpg",
    descripcion:
      "Egresados de la carrera comparten su experiencia profesional en distintas áreas de la ingeniería eléctrica electrónica.",
  },
  {
    slug: "feria-posgrados-fi-2026",
    titulo: "Feria de posgrados de la Facultad de Ingeniería",
    fecha: "2026-09-12",
    lugar: "Explanada de la Facultad de Ingeniería",
    // PLACEHOLDER: usar foto real del evento cuando exista.
    imagen: "/Images/IEEw.png",
    descripcion:
      "Conoce las opciones de maestría y doctorado disponibles al terminar la licenciatura.",
  },
];

export function eventosOrdenados(): Evento[] {
  return [...eventos].sort(
    (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
  );
}
