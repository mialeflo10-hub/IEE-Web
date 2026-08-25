"use client"; // usamos useState para las pestañas

import Image from "next/image";
import { useState } from "react";

// Contenido oficial transcrito de
// https://www.ingenieria.unam.mx/base_carrer.php?carrer=electrica

const objetivosEducacionales = [
  {
    code: "OE1",
    text: "Las personas egresadas contribuyen al desarrollo tecnológico mediante la innovación, implementación de soluciones de ingeniería y mejora continua de procesos, sistemas y servicios en el ámbito de la Ingeniería Eléctrica y Electrónica.",
  },
  {
    code: "OE2",
    text: "Las personas egresadas mantienen una actitud de aprendizaje permanente, actualizando, especializando y fortaleciendo continuamente sus competencias profesionales para adaptarse a la evolución tecnológica y a las necesidades cambiantes de la Ingeniería Eléctrica y Electrónica.",
  },
  {
    code: "OE3",
    text: "Las personas egresadas participan y contribuyen en equipos multidisciplinarios y proyectos de ingeniería fortaleciendo la gestión, la comunicación y la toma de decisiones técnicas y organizacionales.",
  },
  {
    code: "OE4",
    text: "Las personas egresadas ejercen la profesión con responsabilidad, ética y compromiso social, incorporando criterios de sostenibilidad y bienestar social en el desarrollo de proyectos y actividades de ingeniería.",
  },
];

const atributosEgresado = [
  {
    code: "AE1",
    text: "Aplica los conocimientos de ciencias básicas, ciencias sociales, ciencias de la ingeniería e ingeniería aplicada para desarrollar soluciones a problemas de ingeniería.",
  },
  {
    code: "AE2",
    text: "Identifica, plantea y analiza problemas de ingeniería mediante la investigación y revisión de fuentes bibliográficas, formulando conclusiones fundamentadas, considerando de manera integral los aspectos técnicos, sociales, económicos y ambientales.",
  },
  {
    code: "AE3",
    text: "Diseña soluciones innovadoras y viables a problemas de ingeniería, mediante la creación de sistemas, componentes o procesos que respondan a necesidades específicas considerando el desarrollo sostenible.",
  },
  {
    code: "AE4",
    text: "Investiga problemas de ingeniería mediante la aplicación de métodos científicos y técnicas experimentales para generar conclusiones técnicamente válidas y sustentadas.",
  },
  {
    code: "AE5",
    text: "Selecciona, adapta y aplica técnicas, herramientas modernas de ingeniería y tecnologías de la información pertinentes para la solución de problemas, reconociendo sus alcances y limitaciones.",
  },
  {
    code: "AE6",
    text: "Analiza y evalúa el impacto de las soluciones de ingeniería integrando principios del desarrollo sostenible y responsabilidad social.",
  },
  {
    code: "AE7",
    text: "Comprende y aplica principios éticos y normas profesionales en la práctica de la ingeniería.",
  },
  {
    code: "AE8",
    text: "Participa de manera efectiva en equipos multidisciplinarios asumiendo roles diversos, estableciendo metas claras en un ambiente inclusivo y colaborativo.",
  },
  {
    code: "AE9",
    text: "Se comunica de manera clara, profesional e inclusiva en diversos contextos de la ingeniería, tanto de forma oral como escrita, tomando en cuenta las diferentes audiencias.",
  },
  {
    code: "AE10",
    text: "Comprende y aplica principios de gestión de la ingeniería y análisis económico para la toma de decisiones. Está capacitado para liderar y gestionar proyectos en contextos multidisciplinarios, optimizando recursos y alineando los objetivos técnicos con criterios económicos y organizacionales.",
  },
  {
    code: "AE11",
    text: "Reconoce la importancia del aprendizaje permanente y demuestra la capacidad para desarrollarse de manera autónoma a lo largo de su vida profesional. Está preparado para adaptarse a tecnologías emergentes y ejercer un pensamiento crítico frente a los desafíos y transformaciones derivados del avance tecnológico.",
  },
];

const perfilIngreso = [
  "El estudiante interesado en ingresar a la licenciatura en Ingeniería Eléctrica Electrónica, en la Facultad de Ingeniería de la UNAM, debe ser egresado de la Escuela Nacional Preparatoria, del Colegio de Ciencias y Humanidades o de otros programas de Educación Media Superior. Es conveniente que haya cursado el área de las Ciencias Físico-Matemáticas o el conjunto de asignaturas relacionadas con estos campos de conocimiento.",
  "El estudiante requiere poseer conocimientos de matemáticas en álgebra, geometría analítica y cálculo diferencial e integral de funciones de una variable; también debe contar con conocimientos de física, particularmente en mecánica clásica, así como conocimientos generales de química y de computación. Es también conveniente que posea conocimientos de inglés, por lo menos a nivel de comprensión de textos. Por lo que respecta a las habilidades y actitudes, es importante que tenga disposición para el trabajo en equipo, capacidad de análisis y síntesis, y de adaptación a situaciones nuevas, así como espíritu creativo.",
  "Particularmente para la licenciatura en Ingeniería Eléctrica Electrónica, el estudiante deberá mostrar gran interés en el diseño e integración de sistemas que incluyen a los dispositivos electrónicos que se aplican en la electrónica, microelectrónica, comunicaciones, biotecnología, robótica, automatización, cómputo e instrumentación electrónica; conjuntamente con el interés por la generación, trasmisión, distribución y utilización de la energía eléctrica en sus diversas formas.",
];

const perfilEgresoConocimientos = [
  "Sólidos en las áreas de matemáticas, física y química para entender, comprender y desarrollar habilidades y destrezas para la solución de diversos problemas de ingeniería.",
  "En la generación, la transmisión y la distribución de la energía eléctrica.",
  "Para planear, diseñar, proyectar y construir sistemas eléctricos aplicables a las redes eléctricas, al control, la instrumentación y la automatización industrial.",
  "La planeación, el diseño y la construcción de instalaciones eléctricas residenciales e industriales.",
  "Modelado y análisis de sistemas eléctricos y electrónicos.",
  "Diseño y desarrollo de sistemas electrónicos para medir, analizar, controlar y automatizar diversos procesos industriales, biomédicos, informáticos y de comunicaciones.",
  "Dominio de métodos computacionales y de las tecnologías de información y la comunicación (TIC) para la generación de reportes y evaluación de la información.",
];

const perfilEgresoHabilidades = [
  "Evaluar, comparar y seleccionar el equipo necesario para la integración de los sistemas eléctricos y electrónicos.",
  "Modelar, simular e interpretar el comportamiento de los sistemas eléctricos y electrónicos.",
  "Diseñar, generar tecnología, innovar, desarrollar, integrar, planear y poner en operación sistemas eléctricos y electrónicos.",
  "Realizar trabajos de innovación tecnológica.",
  "Diseñar, construir, implantar y dar soporte técnico a los programas aplicados a los sistemas eléctricos y electrónicos.",
  "Diseñar e instalar redes eléctricas.",
  "Integrar y coordinar a personas y grupos interdisciplinarios.",
  "Facilidad de comunicación oral y escrita, y alta capacidad de análisis y síntesis.",
];

const perfilEgresoActitudes = [
  "Ser creativo, innovador, disciplinado y dinámico.",
  "Gusto por las matemáticas y la física.",
  "Actitud emprendedora y de liderazgo con iniciativa propia para generar fuentes de trabajo.",
  "Mente abierta orientada hacia la solución de problemas en la ingeniería.",
  "Ser responsable y crítico, con deseo de actualización y superación en su profesión.",
  "Conciencia de la problemática nacional y vocación de servicio profesional.",
];

const perfilProfesionalAreas = [
  {
    label: "Área eléctrica",
    items: [
      "Participa en la explotación de los recursos naturales para la obtención de la energía eléctrica, desde su generación hasta su aprovechamiento en todas sus aplicaciones.",
      "Interviene en el diseño y construcción de plantas hidroeléctricas, termoeléctricas y nucleoeléctricas, así como en los sistemas de transmisión y distribución correspondientes.",
      "Participa en el diseño de máquinas e instalaciones eléctricas y en la fabricación, mantenimiento, conservación y administración de equipo eléctrico de alta complejidad técnica.",
    ],
  },
  {
    label: "Área electrónica",
    items: [
      "Desarrolla sistemas electrónicos que permiten medir, analizar, controlar y automatizar diversos procesos industriales, biomédicos, informáticos y de comunicaciones.",
      "Participa en la formulación e instrumentación de proyectos para la solución de problemas de ingeniería en las áreas de biología, salud, ciencias sociales, artes y entretenimiento.",
      "Diseña y construye equipos y materiales electrónicos, haciendo uso intensivo de circuitos microprocesadores y microcontroladores.",
    ],
  },
];

const tabs = [
  { key: "objetivos", label: "Objetivos educacionales" },
  { key: "atributos", label: "Atributos del egresado" },
  { key: "ingreso", label: "Perfil de ingreso" },
  { key: "egreso", label: "Perfil de egreso" },
  { key: "profesional", label: "Perfil profesional" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function AboutCareer() {
  const [activeTab, setActiveTab] = useState<TabKey>("objetivos");

  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* PLACEHOLDER, mismo caso que en el Hero */}
        <div className="relative aspect-4/3 rounded-lg overflow-hidden order-2 lg:order-1">
          <Image
            src="/Images/Que es ing elec.jpg"
            alt="Laboratorio de electrónica"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
            La carrera
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            ¿Qué es la Ingeniería Eléctrica Electrónica?
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Es la disciplina que diseña, desarrolla y mantiene los sistemas
            que generan, transmiten y controlan energía eléctrica y señales
            electrónicas — desde un microchip hasta una subestación.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Combina fundamentos de física y matemáticas con aplicaciones
            reales en telecomunicaciones, control, energía y sistemas
            digitales.
          </p>
        </div>
      </div>

      {/* Objetivos, perfiles y atributos de egreso oficiales del programa
          (fuente: ingenieria.unam.mx/base_carrer.php?carrer=electrica) */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-16 border-t border-ink/10 pt-12">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Acreditación EUR-ACE / CACEI
        </span>
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink mb-8">
          Objetivos, perfiles y atributos de egreso
        </h3>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full font-mono text-sm font-medium border transition-colors ${
                activeTab === tab.key
                  ? "bg-pcb-800 text-paper border-pcb-800"
                  : "bg-white text-ink/60 border-ink/10 hover:border-copper"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "objetivos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objetivosEducacionales.map((oe) => (
              <div key={oe.code} className="bg-white border-l-4 border-copper rounded p-4">
                <h4 className="font-display font-bold text-ink text-sm mb-1">{oe.code}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">{oe.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "atributos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atributosEgresado.map((ae) => (
              <div key={ae.code} className="bg-white border-l-4 border-cyan-500 rounded p-4">
                <h4 className="font-display font-bold text-ink text-sm mb-1">{ae.code}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">{ae.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ingreso" && (
          <div className="max-w-3xl space-y-4">
            {perfilIngreso.map((p, i) => (
              <p key={i} className="text-ink/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        {activeTab === "egreso" && (
          <div className="space-y-8">
            <p className="text-ink/70 leading-relaxed max-w-3xl">
              Los egresados de la licenciatura en Ingeniería Eléctrica
              Electrónica tendrán una formación con amplio espectro que les
              permita participar con éxito en las distintas áreas que
              integran la eléctrica y la electrónica, y adaptarse a los
              cambios de las tecnologías en este campo. Tendrán ideas claras
              sobre modelado matemático de fenómenos físicos y optimización;
              estarán abiertos tanto al aprendizaje continuo como a la
              interdisciplinariedad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-display font-bold text-ink text-sm uppercase mb-3">
                  Conocimientos
                </h4>
                <ul className="space-y-2 text-sm text-ink/70">
                  {perfilEgresoConocimientos.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-ink text-sm uppercase mb-3">
                  Habilidades
                </h4>
                <ul className="space-y-2 text-sm text-ink/70">
                  {perfilEgresoHabilidades.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-ink text-sm uppercase mb-3">
                  Actitudes
                </h4>
                <ul className="space-y-2 text-sm text-ink/70">
                  {perfilEgresoActitudes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-ink/60 text-sm italic max-w-3xl">
              El perfil de egreso específico se ve enriquecido con los
              conocimientos, habilidades y actitudes propias del{" "}
              <a href="/PlanDeEstudios#plan-de-estudios" className="text-copper hover:underline">
                campo de profundización
              </a>{" "}
              elegido por el estudiante en 7° semestre.
            </p>
          </div>
        )}

        {activeTab === "profesional" && (
          <div className="space-y-8">
            <p className="text-ink/70 leading-relaxed max-w-3xl">
              La licenciatura en Ingeniería Eléctrica Electrónica forma
              profesionales de alto nivel con capacidad de planear, diseñar,
              innovar, generar tecnología, integrar, desarrollar y poner en
              operación sistemas eléctricos y electrónicos, aplicados a
              sectores como comunicaciones, salud, transporte, energía,
              industria y servicios. Su formación de amplio espectro le
              permite laborar con éxito en casi todos los sectores
              económicos del país.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perfilProfesionalAreas.map((area) => (
                <div key={area.label}>
                  <h4 className="font-display font-bold text-ink text-sm uppercase mb-3">
                    {area.label}
                  </h4>
                  <ul className="space-y-2 text-sm text-ink/70">
                    {area.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
