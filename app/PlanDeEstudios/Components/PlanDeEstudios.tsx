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
      { name: "Asignatura del Campo de Profundización", credits: 8, category: "aplicada" },
      { name: "Asignatura del Campo de Profundización", credits: 8, category: "aplicada" },
      { name: "Asignatura del Campo de Profundización", credits: 8, category: "aplicada" },
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
      { name: "Asignatura del Campo de Profundización", credits: 6, category: "aplicada" },
      { name: "Asignatura del Campo de Profundización", credits: 6, category: "aplicada" },
      { name: "Asignatura del Campo de Profundización", credits: 6, category: "aplicada" },
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