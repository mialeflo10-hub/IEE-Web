// components/CareerProfile.tsx
"use client";

import { useState } from "react";

const tabs = [
  { key: "objetivos", label: "Objetivos educacionales" },
  { key: "atributos", label: "Atributos del egresado" },
  { key: "ingreso", label: "Perfil de ingreso" },
  { key: "egreso", label: "Perfil de egreso" },
  { key: "profesional", label: "Perfil profesional" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

// Objetivos: qué logran los egresados 3-5 años después de titularse
const objetivos = [
  "Trabajan en proyectos de ingeniería eléctrica y electrónica orientados al bienestar social y la sustentabilidad ambiental, aplicando tecnología de punta.",
  "Continúan su formación con especializaciones, posgrados o educación continua para mantenerse actualizados.",
  "Participan como integrantes o líderes de equipos multidisciplinarios, desarrollando productos tecnológicos de alto valor.",
  "Gestionan proyectos en los sectores público y privado, o ejercen de forma independiente, incluyendo la creación de sus propias empresas.",
  "En el área eléctrica: generan y aprovechan energía eléctrica asi como diseño, construcción y operación de plantas, equipo y redes de transmisión/distribución, buscando la mayor eficiencia posible.",
  "En el área electrónica: desarrollan sistemas para medir, controlar y automatizar procesos en energía, comunicaciones, salud y entretenimiento, usando circuitos analógicos, digitales y de potencia.",
];

// Atributos: lo que un egresado debe SER CAPAZ de hacer al momento de titularse
const atributos = [
  "Identificar, formular y resolver problemas de ingeniería aplicando ciencias básicas y principios de ingeniería.",
  "Diseñar soluciones de ingeniería eléctrica electrónica que resuelvan necesidades específicas.",
  "Conducir experimentos, analizar datos e interpretar resultados con base en su formación.",
  "Comunicarse eficazmente, de forma oral y escrita, sobre temas de ingeniería.",
  "Actuar con ética y sensibilidad social, considerando el impacto ambiental y económico de sus soluciones.",
  "Mantenerse actualizado ante los cambios tecnológicos de su especialidad.",
  "Trabajar en equipo para diseñar, desarrollar e implementar sistemas eléctricos y electrónicos, evaluando riesgos.",
];

export default function CareerProfile() {
  const [active, setActive] = useState<TabKey>("objetivos");

  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Perfil de la carrera
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-10">
          Objetivos, Perfiles y Atributos de Egreso
        </h2>

        {/* Pestañas — mismo patrón que StudyPlan.tsx */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-ink/10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                active === tab.key
                  ? "border-copper text-ink"
                  : "border-transparent text-ink/50 hover:text-ink/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Objetivos educacionales */}
        {active === "objetivos" && (
          <div>
            <p className="text-ink/60 mb-6 max-w-2xl">
              De 3 a 5 años después de titularse, los egresados son capaces de:
            </p>
            <ol className="space-y-4">
              {objetivos.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-copper shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Atributos del egresado */}
        {active === "atributos" && (
          <div>
            <p className="text-ink/60 mb-6 max-w-2xl">
              Al momento de titularse, el egresado debe ser capaz de:
            </p>
            <ol className="space-y-4">
              {atributos.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-copper shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Perfil de ingreso */}
        {active === "ingreso" && (
          <div className="max-w-3xl space-y-4 text-ink/70 leading-relaxed">
            <p>
              Está pensado para egresados de bachillerato (Prepa, CCH u otro
              sistema equivalente), idealmente con formación en el área
              físico-matemática.
            </p>
            <p>
              Se recomienda contar con bases sólidas en álgebra, geometría
              analítica y cálculo, además de física (sobre todo mecánica
              clásica), química general y nociones de computación. El inglés
              a nivel de comprensión de lectura también ayuda.
            </p>
            <p>
              En cuanto a habilidades y actitudes, se valora la disposición
              para trabajar en equipo, capacidad de análisis y síntesis,
              adaptabilidad y espíritu creativo — junto con interés genuino
              en el diseño de sistemas eléctricos y electrónicos, desde
              microelectrónica y comunicaciones hasta la generación y
              distribución de energía.
            </p>
          </div>
        )}

        {/* Perfil de egreso */}
        {active === "egreso" && (
          <div className="max-w-3xl space-y-8">
            <p className="text-ink/70 leading-relaxed">
              El egresado tiene una formación de espectro amplio que le
              permite adaptarse a distintas áreas de la eléctrica y la
              electrónica, con bases sólidas en modelado matemático,
              aprendizaje continuo y comunicación oral y escrita —idealmente
              también en inglés.
            </p>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Conocimientos</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Bases sólidas en matemáticas, física y química.</li>
                <li>Generación, transmisión y distribución de energía eléctrica.</li>
                <li>Diseño de sistemas eléctricos, control, instrumentación y automatización industrial.</li>
                <li>Instalaciones eléctricas residenciales e industriales.</li>
                <li>Modelado y análisis de sistemas eléctricos y electrónicos.</li>
                <li>Sistemas electrónicos con microprocesadores y microcontroladores.</li>
                <li>Herramientas computacionales y TIC para análisis y reportes.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Habilidades</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Evaluar, comparar y seleccionar equipo para sistemas eléctricos/electrónicos.</li>
                <li>Modelar, simular e interpretar el comportamiento de estos sistemas.</li>
                <li>Diseñar, innovar e integrar soluciones tecnológicas.</li>
                <li>Diseñar e instalar redes eléctricas.</li>
                <li>Coordinar equipos interdisciplinarios.</li>
                <li>Comunicación oral y escrita efectiva.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Actitudes</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Creatividad, disciplina e iniciativa emprendedora.</li>
                <li>Gusto genuino por las matemáticas y la física.</li>
                <li>Mentalidad crítica y orientada a resolver problemas.</li>
                <li>Compromiso con la actualización profesional constante.</li>
                <li>Conciencia social y vocación de servicio hacia el país.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Perfil profesional */}
        {active === "profesional" && (
          <div className="max-w-3xl space-y-8">
            <p className="text-ink/70 leading-relaxed">
              Forma profesionales capaces de planear, diseñar, innovar e
              integrar sistemas eléctricos y electrónicos aplicables a
              comunicaciones, salud, transporte, energía, industria y
              servicios — participando en toda la cadena productiva, desde
              materias primas hasta el producto terminado.
            </p>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Área eléctrica</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Participa en la generación y aprovechamiento de energía eléctrica.</li>
                <li>Diseña y construye plantas hidroeléctricas, termoeléctricas y nucleoeléctricas, además de sistemas de transmisión y distribución.</li>
                <li>Diseña máquinas e instalaciones eléctricas, y da mantenimiento a equipo de alta complejidad técnica.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Área electrónica</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Desarrolla sistemas electrónicos para medir, analizar, controlar y automatizar procesos industriales, biomédicos y de comunicaciones.</li>
                <li>Participa en proyectos de biología, salud, ciencias sociales y entretenimiento usando circuitos analógicos y digitales.</li>
                <li>Diseña y construye equipo electrónico siguiendo lineamientos de investigación científica.</li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-ink text-lg mb-1">
              ¿Quieres ver la información completa?
            </h3>
            <p className="text-ink/60 text-sm max-w-md">
              Consulta la ficha oficial de la carrera en el sitio de la
              Facultad de Ingeniería, UNAM.
            </p>
          </div>
          <a
            href="https://www.ingenieria.unam.mx/base_carrer.php?carrer=electrica"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-pcb-800 text-paper font-medium px-6 py-3 rounded hover:bg-pcb-950 transition-colors"
          >
            Ir a la página de la FI
          </a>
        </div>
      </div>
    </section>
  );
}
