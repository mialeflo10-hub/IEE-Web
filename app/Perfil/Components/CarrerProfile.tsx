// components/CareerProfile.tsx
"use client";

import { useState } from "react";

const tabs = [
  { key: "objetivos", label: "Objetivos educacionales" },
  { key: "atributos", label: "Atributos del egresado" },
  { key: "ingreso", label: "Perfil de ingreso" },
  { key: "egreso", label: "Perfil de egreso" },
  { key: "profesional", label: "Perfil profesional" },
  { key: "acreditaciones", label: "Acreditaciones" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

// Objetivos educacionales (OE1-OE4), texto oficial del programa
const objetivos = [
  "Las personas egresadas contribuyen al desarrollo tecnológico mediante la innovación, implementación de soluciones de ingeniería y mejora continua de procesos, sistemas y servicios en el ámbito de la Ingeniería Eléctrica y Electrónica.",
  "Las personas egresadas mantienen una actitud de aprendizaje permanente, actualizando, especializando y fortaleciendo continuamente sus competencias profesionales para adaptarse a la evolución tecnológica y a las necesidades cambiantes de la Ingeniería Eléctrica y Electrónica.",
  "Las personas egresadas participan y contribuyen en equipos multidisciplinarios y proyectos de ingeniería fortaleciendo la gestión, la comunicación y la toma de decisiones técnicas y organizacionales.",
  "Las personas egresadas ejercen la profesión con responsabilidad, ética y compromiso social, incorporando criterios de sostenibilidad y bienestar social en el desarrollo de proyectos y actividades de ingeniería.",
];

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
                    OE{i + 1}
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
                    AE{i + 1}
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
              El estudiante interesado en ingresar a la licenciatura en
              Ingeniería Eléctrica Electrónica, en la Facultad de Ingeniería
              de la UNAM, debe ser egresado de la Escuela Nacional
              Preparatoria, del Colegio de Ciencias y Humanidades o de otros
              programas de Educación Media Superior. Es conveniente que haya
              cursado el área de las Ciencias Físico-Matemáticas o el
              conjunto de asignaturas relacionadas con estos campos de
              conocimiento en el Colegio de Ciencias y Humanidades, o en
              otros planes de estudio de Educación Media Superior. Para
              todos los casos, el perfil deseable incluye los siguientes
              conocimientos, habilidades y actitudes.
            </p>
            <p>
              El estudiante requiere poseer conocimientos de matemáticas en
              álgebra, geometría analítica y cálculo diferencial e integral
              de funciones de una variable; también debe contar con
              conocimientos de física, particularmente en lo que respecta a
              temas relacionados con mecánica clásica, así como
              conocimientos generales de química y de computación. Es
              también conveniente que posea conocimientos de inglés, por lo
              menos a nivel de comprensión de textos. Por lo que respecta a
              las habilidades y actitudes, es importante que tenga
              disposición para el trabajo en equipo, capacidad de análisis y
              síntesis, y de adaptación a situaciones nuevas, así como
              espíritu creativo.
            </p>
            <p>
              Particularmente para la licenciatura en Ingeniería Eléctrica
              Electrónica, el estudiante deberá mostrar gran interés en el
              diseño e integración de sistemas que incluyen a los
              dispositivos electrónicos que se aplican en la electrónica,
              microelectrónica, comunicaciones, biotecnología, robótica,
              automatización, cómputo e instrumentación electrónica;
              conjuntamente con el interés por la generación, trasmisión,
              distribución y utilización de la energía eléctrica en sus
              diversas formas, así como por los distintas formas alternas de
              generación de energía eléctrica.
            </p>
            <p>
              Adicionalmente, el estudiante interesado en ingresar a esta
              Ingeniería deberá mostrar interés en otros campos relacionados
              como la electrónica de alta frecuencia, los sistemas
              embebidos, los sistemas difusos y el procesamiento digital de
              señales.
            </p>
          </div>
        )}

        {/* Perfil de egreso */}
        {active === "egreso" && (
          <div className="max-w-3xl space-y-8">
            <div>
              <h3 className="font-display font-bold text-ink mb-3">General</h3>
              <p className="text-ink/70 leading-relaxed">
                Los egresados de la Facultad de Ingeniería deberán poseer:
                capacidades para la innovación, potencial para aportar a la
                creación de tecnologías y actitud emprendedora, con
                sensibilidad social y ética profesional; y con potencialidad
                y vocación para constituirse en factor de cambio.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Específico</h3>
              <p className="text-ink/70 leading-relaxed mb-4">
                Los egresados de la licenciatura en Ingeniería Eléctrica
                Electrónica tendrán una formación con amplio espectro que
                les permita participar con éxito en las distintas áreas que
                integran la eléctrica y la electrónica, y adaptarse a los
                cambios de las tecnologías en este campo.
              </p>
              <p className="text-ink/70 leading-relaxed">
                Tendrán ideas claras sobre modelado matemático de fenómenos
                físicos y optimización; estarán abiertos tanto al
                aprendizaje continuo como a la interdisciplinariedad.
                Deberán contar con conocimientos sólidos de su idioma y de
                otra lengua, preferentemente inglés; con capacidad de
                comunicación oral y escrita.
              </p>
            </div>

            <p className="text-ink/70 leading-relaxed">
              El perfil del egresado de la licenciatura en Ingeniería
              Eléctrica Electrónica de la Facultad de Ingeniería de la UNAM
              puede calificarse de acuerdo con sus conocimientos,
              habilidades, aptitudes y actitudes, que son los y las que a
              continuación se muestran:
            </p>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Conocimientos</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Sólidos en las áreas de matemáticas, física y química para entender, comprender y desarrollar habilidades y destrezas para la solución de diversos problemas de ingeniería.</li>
                <li>En la generación, la transmisión y la distribución de la energía eléctrica.</li>
                <li>Para planear, diseñar, proyectar y construir sistemas eléctricos aplicables a las redes eléctricas, al control, la instrumentación y la automatización industrial.</li>
                <li>La planeación, el diseño y la construcción de instalaciones eléctricas residenciales e industriales.</li>
                <li>Modelado y análisis de sistemas eléctricos y electrónicos.</li>
                <li>Diseño y desarrollo de sistemas electrónicos para medir, analizar, controlar y automatizar diversos procesos industriales, biomédicos, informáticos y de comunicaciones, haciendo uso intensivo de circuitos microprocesadores y microcontroladores, así como de sistemas electrónicos analógicos y digitales.</li>
                <li>Siguiendo los lineamientos de la investigación científica y tecnológica, desarrolla y construye equipos y materiales eléctricos y electrónicos.</li>
                <li>Dominio de métodos computacionales y de las tecnologías de información y la comunicación (TIC) para la generación de reportes y evaluación de la información.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Habilidades</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Evaluar, comparar y seleccionar el equipo necesario para la integración de los sistemas eléctricos y electrónicos.</li>
                <li>Modelar, simular e interpretar el comportamiento de los sistemas eléctricos y electrónicos.</li>
                <li>Diseñar, generar tecnología, innovar, desarrollar, integrar, planear y poner en operación sistemas eléctricos y electrónicos.</li>
                <li>Modelar fenómenos físicos mediante el conocimiento sólido de las matemáticas, física y química.</li>
                <li>Realizar trabajos de innovación tecnológica.</li>
                <li>Realizar diseño y construcción especial de componentes y partes eléctricas y electrónicas.</li>
                <li>Diseñar, construir, implantar y dar soporte técnico a los programas aplicados a los sistemas eléctricos y electrónicos.</li>
                <li>Diseñar y construir interfaces para acoplar equipos eléctricos y electrónicos.</li>
                <li>Diseñar e instalar redes eléctricas.</li>
                <li>Preparar y actualizar al personal a su cargo.</li>
                <li>Integrar y coordinar a personas y grupos interdisciplinarios.</li>
                <li>Facilidad de comunicación oral y escrita.</li>
                <li>Alta capacidad de análisis y síntesis.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Actitudes</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Ser creativo e innovador.</li>
                <li>Ser disciplinado y dinámico.</li>
                <li>Gusto por las matemáticas y la física.</li>
                <li>Actitud emprendedora y de liderazgo con iniciativa propia para generar fuentes de trabajo.</li>
                <li>Confianza en su preparación académica y posterior.</li>
                <li>Tener una mente abierta orientada hacia la solución de problemas en la Ingeniería.</li>
                <li>Ser responsable y crítico.</li>
                <li>Poseer deseos de actualización, superación y competencia en su profesión.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Actitudes sociales</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>Conciencia de la problemática nacional, basada en el conocimiento de la realidad del país.</li>
                <li>Vocación de servicio profesional.</li>
                <li>Promover el cambio en la mentalidad frente a la competitividad internacional.</li>
                <li>Tener una actitud humanista y de servicio hacia la sociedad.</li>
              </ul>
            </div>

            <p className="text-ink/70 leading-relaxed text-sm">
              El perfil de egreso específico se verá enriquecido con los
              conocimientos, habilidades y actitudes propias del campo de
              profundización elegido por el estudiante.
            </p>
          </div>
        )}

        {/* Perfil profesional */}
        {active === "profesional" && (
          <div className="max-w-3xl space-y-8">
            <p className="text-ink/70 leading-relaxed">
              La licenciatura en Ingeniería Eléctrica Electrónica tiene como
              objetivo fundamental la formación de profesionales de alto
              nivel en el campo de la ingeniería eléctrica y electrónica con
              capacidad de planear, diseñar, innovar, generar tecnología,
              integrar, desarrollar y poner en operación a los sistemas
              eléctricos y electrónicos, los cuales se apliquen a sectores
              diversos como son el de comunicaciones, eléctrico,
              electrónico, salud, transporte, energético, industrial y de
              servicios, contemplando y manteniendo siempre altos niveles de
              calidad para elevar la productividad y la competitividad de
              las empresas y el bienestar de la sociedad.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Dada su formación de amplio espectro le permite laborar con
              éxito en casi todos los sectores económicos del país y en los
              cuatro eslabones de la cadena productiva de la industria
              eléctrica y electrónica: 1) procesamiento de las materias
              primas, 2) fabricación de partes y componentes, 3) fabricación
              de componentes intermedios y 4) manufactura de productos
              terminales.
            </p>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Área eléctrica</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>El Ingeniero Eléctrico Electrónico participa en la explotación de los recursos naturales para la obtención de la energía eléctrica, desde su generación hasta su aprovechamiento en todas sus aplicaciones.</li>
                <li>Interviene en el diseño y construcción de plantas hidroeléctricas, termoeléctricas y nucleoeléctricas, así como en los sistemas de transmisión y de distribución correspondientes.</li>
                <li>Igualmente participa en el diseño de todo tipo de máquinas e instalaciones eléctricas y en la fabricación, mantenimiento, conservación y administración de equipo y material eléctrico de alta complejidad técnica, buscando la mayor eficiencia en el uso de la energía.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-ink mb-3">Área electrónica</h3>
              <ul className="list-disc list-inside space-y-2 text-ink/70 text-sm">
                <li>El Ingeniero Eléctrico Electrónico apoya a todos los campos del conocimiento y actividades del ser humano, para facilitarle y simplificarle su trabajo, a través del desarrollo de sistemas electrónicos que le permiten: medir, analizar, controlar y automatizar diversos procesos industriales, biomédicos, informáticos y de comunicaciones.</li>
                <li>Participa en la formulación e instrumentación de proyectos para la solución de problemas de ingeniería, en las áreas de la biología, salud, ciencias sociales, artes, humanidades y entretenimiento, haciendo uso intensivo de circuitos microprocesadores y microcontroladores, así como de sistemas electrónicos analógicos y digitales.</li>
                <li>Siguiendo los lineamientos de la investigación científica y tecnológica, desarrolla y construye equipos y materiales electrónicos.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Acreditaciones */}
        {active === "acreditaciones" && (
          <div className="max-w-3xl space-y-4 text-ink/70 leading-relaxed">
            <p>
              El programa de Ingeniería Eléctrica Electrónica cuenta con
              reconocimiento nacional e internacional de la calidad de su
              plan de estudios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong className="text-ink">Acreditación EUR-ACE Bachelor</strong> —
                sello de calidad europeo que reconoce internacionalmente la
                formación en ingeniería del programa.
              </li>
              <li>
                <strong className="text-ink">Acreditación del CACEI</strong> —
                Consejo de Acreditación de la Enseñanza de la Ingeniería,
                organismo mexicano que certifica que el programa cumple con
                los estándares de calidad exigidos.
              </li>
            </ul>
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
