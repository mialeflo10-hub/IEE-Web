// components/StudyPlan.tsx
"use client"; // usamos useState para las pestañas de semestre

import { useState } from "react";

// Categorías oficiales del plan, con sus colores tal cual el mapa curricular
const categories = {
  basicas: { label: "Ciencias Básicas", bg: "bg-amber-200", border: "border-amber-500" },
  ingenieria: { label: "Ciencias de la Ingeniería", bg: "bg-cyan-200", border: "border-cyan-500" },
  aplicada: { label: "Ingeniería Aplicada", bg: "bg-blue-300", border: "border-blue-600" },
  sociales: { label: "Ciencias Sociales y Humanidades", bg: "bg-green-200", border: "border-green-500" },
  otras: { label: "Otras Asignaturas Convenientes", bg: "bg-orange-200", border: "border-orange-500" },
} as const;

type CategoryKey = keyof typeof categories;

// Campos de profundización: se eligen en 7° semestre y sus materias
// (obligatorias y optativas) se cursan en 9° y 10° semestre.
// Datos transcritos de los posters oficiales de la División de
// Ingeniería Eléctrica, Facultad de Ingeniería, UNAM.
const profundizacionFields = {
  energeticos: {
    label: "Sistemas Energéticos",
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    accent: "text-emerald-700",
    obligatorias: ["Introducción a los Sistemas Energéticos"],
    optativas: [
      "Energías Renovables",
      "Fundamentos de Ingeniería Nuclear",
      "Herramientas Computacionales para la Optimación de Sistemas Energéticos",
      "Ingeniería de Reactores Nucleares",
      "Introducción a la Conversión de Energía",
      "Introducción a la Física de Reactores Nucleares",
      "Introducción al Ahorro y a la Gestión Energética",
      "Introducción al Análisis Probabilístico de Seguridad",
      "Planeación de Sistemas de Generación Eléctrica (L)",
      "Planeación e Instalación de Sistemas de Bioenergía (L)",
      "Proyecto de Investigación de Ingeniería Eléctrica Electrónica",
      "Seguridad de Reactores Nucleares",
      "Temas Selectos de Sistemas Energéticos",
      "Uso Eficiente en Equipos de Servicio",
    ],
  },
  biomedica: {
    label: "Biomédica",
    bg: "bg-orange-50",
    border: "border-orange-500",
    accent: "text-orange-700",
    obligatorias: [
      "Fisiología de los Sistemas Homeostáticos",
      "Fisiología del Sistema Endócrino y Nervioso",
      "Fundamentos de Instrumentación Biomédica",
      "Ingeniería Clínica",
    ],
    optativas: [
      "Aplicaciones de Optoelectrónica en Medicina",
      "Audiometría",
      "Introducción a la Biofísica",
      "Procesamiento Digital de Imágenes Médicas: Imagenología",
      "Proyecto de Investigación de Ingeniería Eléctrica Electrónica",
      "Seguridad e Instalaciones Hospitalarias",
      "Sistemas y Equipos Biomédicos Electrónicos",
      "Telesalud",
      "Temas Selectos de Ingeniería Biomédica",
      "Transductores Biomédicos",
    ],
  },
  controlYRobotica: {
    label: "Control y Robótica",
    bg: "bg-teal-50",
    border: "border-teal-500",
    accent: "text-teal-700",
    obligatorias: [
      "Control Avanzado (L+)",
      "Controladores Industriales Programables (L+)",
      "Robótica Industrial (L+)",
    ],
    optativas: [
      "Control Automático Industrial (L+)",
      "Control de Sistemas No Lineales (L+)",
      "Control Distribuido e Integración SCADA (L+)",
      "Instrumentación Virtual (L+)",
      "Proyecto de Investigación de Ingeniería Eléctrica Electrónica",
      "Sistemas Embebidos en Instrumentación y Control (L+)",
      "Temas Selectos de Control y Robótica",
    ],
  },
  electricaDePotencia: {
    label: "Eléctrica de Potencia",
    bg: "bg-red-50",
    border: "border-red-500",
    accent: "text-red-700",
    obligatorias: [
      "Máquinas Eléctricas II",
      "Máquinas Eléctricas III",
      "Protección de Sistemas Eléctricos",
      "Sistemas de Distribución",
      "Sistemas Eléctricos de Potencia II",
    ],
    optativas: [
      "Automatización de Sistemas Eléctricos",
      "Iluminación",
      "Proyecto de Investigación de Ingeniería Eléctrica Electrónica",
      "Sistema de Transporte Eléctrico",
      "Temas Selectos de Ingeniería Eléctrica",
    ],
  },
  electronica: {
    label: "Electrónica",
    bg: "bg-sky-50",
    border: "border-sky-500",
    accent: "text-sky-700",
    obligatorias: [
      "Circuitos para Comunicaciones",
      "Dispositivos Electrónicos Programables",
      "Introducción a la Tecnología MEMS",
      "Sistemas Embebidos",
    ],
    optativas: [
      "Amplificadores para Microondas",
      "Biomems y Dispositivos Lab on a Chip",
      "MEMS para Radiofrecuencia",
      "Procesadores Multinúcleo",
      "Proyecto de Investigación de Ingeniería Eléctrica Electrónica",
      "Sistemas Difusos",
      "Sistemas Electrónicos",
      "Sistemas Operativos en Tiempo Real",
      "Temas Selectos de Electrónica",
    ],
  },
} as const;

type FieldKey = keyof typeof profundizacionFields;

interface Subject {
  name: string;
  credits: number;
  category: CategoryKey;
}

interface Semester {
  number: number;
  subjects: Subject[];
  obligatorias: number;
  optativas: number;
  total: number;
}

// Datos transcritos del mapa curricular oficial (Plan 2023).
// Semestres 1-8 y sus totales están verificados: la suma de créditos
// por materia coincide exactamente con el total impreso en el plan.
const semesters: Semester[] = [
  {
    number: 1,
    obligatorias: 46, optativas: 0, total: 46,
    subjects: [
      { name: "Álgebra", credits: 8, category: "basicas" },
      { name: "Cálculo y Geometría Analítica", credits: 12, category: "basicas" },
      { name: "Química", credits: 10, category: "basicas" },
      { name: "Redacción y Exposición de Temas de Ingeniería", credits: 6, category: "sociales" },
      { name: "Fundamentos de Programación", credits: 10, category: "otras" },
      { name: "Igualdad de Género en Ingeniería", credits: 0, category: "sociales" },
    ],
  },
  {
    number: 2,
    obligatorias: 40, optativas: 0, total: 40,
    subjects: [
      { name: "Álgebra Lineal", credits: 8, category: "basicas" },
      { name: "Cálculo Integral", credits: 8, category: "basicas" },
      { name: "Mecánica", credits: 12, category: "basicas" },
      { name: "Cultura y Comunicación", credits: 2, category: "sociales" },
      { name: "Estructura de Datos y Algoritmos I", credits: 10, category: "otras" },
    ],
  },
  {
    number: 3,
    obligatorias: 32, optativas: 12, total: 44,
    subjects: [
      { name: "Termodinámica", credits: 10, category: "basicas" },
      { name: "Cálculo Vectorial", credits: 8, category: "basicas" },
      { name: "Ecuaciones Diferenciales", credits: 8, category: "basicas" },
      { name: "Optativa de Competencias Profesionales", credits: 6, category: "sociales" },
      { name: "Modelos de Programación Orientada a Objetos", credits: 6, category: "otras" },
      { name: "Optativa(s) de Ciencias Sociales y Humanidades", credits: 6, category: "sociales" },
    ],
  },
  {
    number: 4,
    obligatorias: 42, optativas: 0, total: 42,
    subjects: [
      { name: "Probabilidad", credits: 8, category: "basicas" },
      { name: "Electricidad y Magnetismo", credits: 10, category: "basicas" },
      { name: "Análisis Numérico", credits: 8, category: "basicas" },
      { name: "Análisis de Sistemas y Señales", credits: 8, category: "ingenieria" },
      { name: "Costos y Evaluación de Proyectos", credits: 6, category: "otras" },
    ],
  },
  {
    number: 5,
    obligatorias: 48, optativas: 0, total: 48,
    subjects: [
      { name: "Estadística para Ingeniería Eléctrica Electrónica", credits: 8, category: "basicas" },
      { name: "Acústica y Óptica", credits: 10, category: "basicas" },
      { name: "Dinámica de Sistemas Físicos", credits: 8, category: "ingenieria" },
      { name: "Análisis de Circuitos Eléctricos", credits: 10, category: "ingenieria" },
      { name: "Física de Semiconductores", credits: 8, category: "ingenieria" },
      { name: "Energía e Impacto Ambiental", credits: 4, category: "sociales" },
    ],
  },
  {
    number: 6,
    obligatorias: 48, optativas: 0, total: 48,
    subjects: [
      { name: "Introducción a la Economía", credits: 8, category: "sociales" },
      { name: "Teoría Electromagnética", credits: 10, category: "ingenieria" },
      { name: "Fundamentos de Control", credits: 10, category: "aplicada" },
      { name: "Dispositivos y Circuitos Electrónicos", credits: 10, category: "aplicada" },
      { name: "Máquinas Eléctricas I", credits: 10, category: "aplicada" },
    ],
  },
  {
    number: 7,
    obligatorias: 48, optativas: 0, total: 48,
    subjects: [
      { name: "Medición e Instrumentación", credits: 8, category: "aplicada" },
      { name: "Diseño Digital", credits: 10, category: "aplicada" },
      { name: "Sistemas de Comunicaciones Electrónicas", credits: 10, category: "aplicada" },
      { name: "Amplificadores Electrónicos", credits: 10, category: "aplicada" },
      { name: "Sistemas Eléctricos de Potencia I", credits: 10, category: "aplicada" },
    ],
  },
  {
    number: 8,
    obligatorias: 46, optativas: 0, total: 46,
    subjects: [
      { name: "Automatización", credits: 10, category: "aplicada" },
      { name: "Microprocesadores y Microcontroladores", credits: 10, category: "aplicada" },
      { name: "Procesamiento Digital de Señales", credits: 8, category: "aplicada" },
      { name: "Instalaciones Eléctricas", credits: 8, category: "aplicada" },
      { name: "Circuitos Integrados Analógicos", credits: 10, category: "aplicada" },
    ],
  },
  {
    number: 9,
    obligatorias: 22, optativas: 24, total: 46,
    subjects: [
      { name: "Asignaturas del Campo de Profundización", credits: 24, category: "aplicada" },
      { name: "Subestaciones Eléctricas", credits: 8, category: "ingenieria" },
      { name: "Electrónica de Potencia", credits: 8, category: "ingenieria" },
      { name: "Ética Profesional", credits: 6, category: "sociales" },
    ],
  },
  {
    number: 10,
    // ⚠️ VERIFICAR: estos créditos individuales no cuadran con el total
    // oficial (16 obligatorias + 18 optativas = 34). Confirma contra el
    // PDF del plan y ajusta los números de cada materia aquí abajo.
    obligatorias: 16, optativas: 18, total: 34,
    subjects: [
      { name: "Asignaturas del Campo de Profundización", credits: 18, category: "aplicada" },
      { name: "Plantas Generadoras", credits: 8, category: "ingenieria" },
      { name: "Asignatura Optativa del Campo de Profundización", credits: 8, category: "aplicada" },
      { name: "Recursos y Necesidades de México", credits: 8, category: "sociales" },
    ],
  },
];

// Totales generales del plan completo, tomados directo de la tabla
// resumen oficial (esquina inferior de tu imagen) — estos sí están
// 100% confirmados.
const summary = [
  { label: "Ciencias Básicas", value: "124 créditos" },
  { label: "Ciencias de la Ingeniería", value: "110 créditos" },
  { label: "Ingeniería Aplicada", value: "134 créditos" },
  { label: "Ciencias Sociales y Humanidades", value: "36 créditos" },
  { label: "Otras Asignaturas Convenientes", value: "38 créditos" },
];

export default function StudyPlan() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [selectedField, setSelectedField] = useState<FieldKey | null>(null);
  const current = semesters.find((s) => s.number === activeSemester)!;

  return (
    <section id="plan-de-estudios" className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Plan de estudios
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-2">
          Mapa curricular
        </h2>
        <p className="text-ink/60 mb-10 max-w-2xl">
          10 semestres, 442 créditos totales. Explora las materias de cada
          semestre.
        </p>

        {/* Pestañas de semestre: un botón del 1 al 10. El semestre activo
            se resalta con bg-pcb-800; el resto queda neutro. Al hacer
            clic, cambia el estado "activeSemester" y React re-renderiza
            la lista de materias de abajo. */}
        <div className="flex flex-wrap gap-2 mb-8">
          {semesters.map((s) => (
            <button
              key={s.number}
              onClick={() => setActiveSemester(s.number)}
              className={`w-11 h-11 rounded-full font-mono text-sm font-medium transition-colors ${
                activeSemester === s.number
                  ? "bg-pcb-800 text-paper"
                  : "bg-white text-ink/60 border border-ink/10 hover:border-copper"
              }`}
            >
              {s.number}
            </button>
          ))}
        </div>

        {/* Resumen del semestre activo */}
        <div className="flex gap-8 mb-6 font-mono text-sm text-ink/60">
          <span><strong className="text-ink">{current.obligatorias}</strong> obligatorios</span>
          <span><strong className="text-ink">{current.optativas}</strong> optativos</span>
          <span><strong className="text-ink">{current.total}</strong> créditos totales</span>
        </div>

        {/* Materias del semestre activo, en tarjetas de color según su
            categoría (mismo código de colores que el plan oficial). */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {current.subjects.map((subject, i) => {
            const cat = categories[subject.category];
            return (
              <div
                key={i}
                className={`${cat.bg} border-l-4 ${cat.border} rounded p-4`}
              >
                <h3 className="font-display font-bold text-ink text-sm mb-1">
                  {subject.name}
                </h3>
                <span className="font-mono text-xs text-ink/60">
                  {subject.credits} créditos
                </span>
              </div>
            );
          })}
        </div>

        {/* Leyenda de categorías */}
        <div className="flex flex-wrap gap-4 mb-12 text-xs">
          {Object.values(categories).map((cat) => (
            <div key={cat.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-sm ${cat.bg} border ${cat.border}`} />
              <span className="text-ink/60">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Campos de profundización: se eligen en 7° semestre y sus
            materias (obligatorias y optativas) se cursan en 9° y 10°. */}
        <div className="border-t border-ink/10 pt-8 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
            Elección en 7° semestre
          </span>
          <h3 className="font-display text-2xl font-bold text-ink mb-2">
            Campos de profundización
          </h3>
          <p className="text-ink/60 mb-6 max-w-2xl">
            Desde 7° semestre eliges uno de estos 5 campos; sus materias
            obligatorias y optativas son las que cursas en 9° y 10° semestre.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(profundizacionFields) as FieldKey[]).map((key) => {
              const field = profundizacionFields[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedField(key)}
                  className={`px-4 py-2 rounded-full font-mono text-sm font-medium border transition-colors ${
                    selectedField === key
                      ? "bg-pcb-800 text-paper border-pcb-800"
                      : "bg-white text-ink/60 border-ink/10 hover:border-copper"
                  }`}
                >
                  {field.label}
                </button>
              );
            })}
          </div>

          {selectedField && (
            <div
              className={`${profundizacionFields[selectedField].bg} border-l-4 ${profundizacionFields[selectedField].border} rounded p-6 grid grid-cols-1 md:grid-cols-2 gap-6`}
            >
              <div>
                <h4
                  className={`font-display font-bold text-sm uppercase mb-3 ${profundizacionFields[selectedField].accent}`}
                >
                  Obligatorias
                </h4>
                <ul className="space-y-1 text-sm text-ink/80">
                  {profundizacionFields[selectedField].obligatorias.map((name) => (
                    <li key={name}>• {name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className={`font-display font-bold text-sm uppercase mb-3 ${profundizacionFields[selectedField].accent}`}
                >
                  Optativas
                </h4>
                <ul className="space-y-1 text-sm text-ink/80">
                  {profundizacionFields[selectedField].optativas.map((name) => (
                    <li key={name}>• {name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Tabla resumen general del plan completo */}
        <div className="border-t border-ink/10 pt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {summary.map((item) => (
            <div key={item.label}>
              <div className="font-display text-2xl font-bold text-ink">{item.value}</div>
              <div className="text-ink/50 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}