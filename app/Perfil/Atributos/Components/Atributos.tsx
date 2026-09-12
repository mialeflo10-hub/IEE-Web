// components/Atributos.tsx
import Link from "next/link";

// Atributos de egreso (AE1-AE11), texto oficial del programa
const atributos = [
  "Aplica los conocimientos de ciencias básicas, ciencias sociales, ciencias de la ingeniería e ingeniería aplicada para desarrollar soluciones a problemas de ingeniería.",
  "Identifica, plantea y analiza problemas de ingeniería mediante la investigación y revisión de fuentes bibliográficas, formulando conclusiones fundamentadas, considerando de manera integral los aspectos técnicos, sociales, económicos y ambientales.",
  "Diseña soluciones innovadoras y viables a problemas de ingeniería, mediante la creación de sistemas, componentes o procesos que respondan a necesidades específicas considerando el desarrollo sostenible.",
  "Investiga problemas de ingeniería mediante la aplicación de métodos científicos y técnicas experimentales para generar conclusiones técnicamente válidas y sustentadas.",
  "Selecciona, adapta y aplica técnicas, herramientas modernas de ingeniería y tecnologías de la información pertinentes para la solución de problemas, reconociendo sus alcances y limitaciones.",
  "Analiza y evalúa el impacto de las soluciones de ingeniería integrando principios del desarrollo sostenible y responsabilidad social.",
  "Comprende y aplica principios éticos y normas profesionales en la práctica de la ingeniería.",
  "Participa de manera efectiva en equipos multidisciplinarios asumiendo roles diversos, estableciendo metas claras en un ambiente inclusivo y colaborativo.",
  "Se comunica de manera clara, profesional e inclusiva en diversos contextos de la ingeniería, tanto de forma oral como escrita, tomando en cuenta las diferentes audiencias.",
  "Comprende y aplica principios de gestión de la ingeniería y análisis económico para la toma de decisiones. Está capacitado para liderar y gestionar proyectos en contextos multidisciplinarios, optimizando recursos y alineando los objetivos técnicos con criterios económicos y organizacionales.",
  "Reconoce la importancia del aprendizaje permanente y demuestra la capacidad para desarrollarse de manera autónoma a lo largo de su vida profesional. Está preparado para adaptarse a tecnologías emergentes y ejercer un pensamiento crítico frente a los desafíos y transformaciones derivados del avance tecnológico.",
];

export default function Atributos() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Perfil de la carrera
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-10">
          Atributos de Egreso
        </h2>

        <p className="text-ink/60 mb-6 max-w-2xl">
          Al momento de titularse, el egresado debe ser capaz de:
        </p>
        <ol className="space-y-4">
          {atributos.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-copper shrink-0">AE{i + 1}</span>
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
