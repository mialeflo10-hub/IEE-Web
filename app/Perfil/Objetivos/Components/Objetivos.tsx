// components/Objetivos.tsx
import Link from "next/link";

// Objetivos educacionales (OE1-OE4), texto oficial del programa
const objetivos = [
  "Las personas egresadas contribuyen al desarrollo tecnológico mediante la innovación, implementación de soluciones de ingeniería y mejora continua de procesos, sistemas y servicios en el ámbito de la Ingeniería Eléctrica y Electrónica.",
  "Las personas egresadas mantienen una actitud de aprendizaje permanente, actualizando, especializando y fortaleciendo continuamente sus competencias profesionales para adaptarse a la evolución tecnológica y a las necesidades cambiantes de la Ingeniería Eléctrica y Electrónica.",
  "Las personas egresadas participan y contribuyen en equipos multidisciplinarios y proyectos de ingeniería fortaleciendo la gestión, la comunicación y la toma de decisiones técnicas y organizacionales.",
  "Las personas egresadas ejercen la profesión con responsabilidad, ética y compromiso social, incorporando criterios de sostenibilidad y bienestar social en el desarrollo de proyectos y actividades de ingeniería.",
];

export default function Objetivos() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Perfil de la carrera
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-10">
          Objetivos Educacionales
        </h2>

        <p className="text-ink/60 mb-6 max-w-2xl">
          De 3 a 5 años después de titularse, los egresados son capaces de:
        </p>
        <ol className="space-y-4">
          {objetivos.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-copper shrink-0">OE{i + 1}</span>
              <span className="text-ink/70 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>

        <div className="mt-16 pt-10 border-t border-ink/10">
          <Link
            href="/Perfil"
            className="text-sm text-ink/60 hover:text-copper transition-colors"
          >
            ← Volver a Perfil de la carrera
          </Link>
        </div>
      </div>
    </section>
  );
}
