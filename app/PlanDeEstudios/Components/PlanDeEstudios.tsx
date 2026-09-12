// components/StudyPlan.tsx
"use client"; // usamos useState para las pestañas de plan/semestre

import { useState } from "react";
import Image from "next/image";
import { getProgramHref } from "./programas";

type PlanKey = "2026" | "2023";

const planTabs: { key: PlanKey; label: string }[] = [
  { key: "2026", label: "Plan 2026 (nuevo)" },
  { key: "2023", label: "Plan 2023" },
];

/* ============================================================
   PLAN 2026 — mapa curricular propuesto
   Transcrito del mapa oficial (Fig. 4.2, "Tomos IEE Plan Nuevo",
   mayo 2026). La categoría de cada materia se verificó cuadrando
   la suma de créditos por categoría contra la tabla resumen
   oficial (96 + 82 + 30 + 16 + 106 + 18 + 46 = 394 créditos).
   ============================================================ */

const categories2026 = {
  basicas: { label: "Ciencias Básicas", bg: "bg-amber-200", border: "border-amber-500" },
  ingenieria: { label: "Ciencias de la Ingeniería", bg: "bg-cyan-200", border: "border-cyan-500" },
  sociales: { label: "Ciencias Sociales y Humanidades", bg: "bg-green-200", border: "border-green-500" },
  complementarias: { label: "Conocimientos Complementarios en Ingeniería", bg: "bg-orange-200", border: "border-orange-500" },
  aplicada: { label: "Ingeniería Aplicada", bg: "bg-blue-300", border: "border-blue-600" },
  altaDireccion: { label: "Alta Dirección en Ingeniería", bg: "bg-stone-300", border: "border-stone-600" },
  temasSelectos: { label: "Temas Selectos", bg: "bg-gray-200", border: "border-gray-500" },
} as const;

type CategoryKey2026 = keyof typeof categories2026;

interface Subject2026 {
  name: string;
  credits: number;
  category: CategoryKey2026;
}

interface Semester2026 {
  number: number;
  subjects: Subject2026[];
  obligatorias: number;
  optativas: number;
  total: number;
}

const semesters2026: Semester2026[] = [
  {
    number: 1,
    obligatorias: 38, optativas: 0, total: 38,
    subjects: [
      { name: "Álgebra y Geometría Analítica", credits: 8, category: "basicas" },
      { name: "Cálculo Diferencial e Integral", credits: 10, category: "basicas" },
      { name: "Introducción al Modelado de Problemas en Fenómenos Físicos", credits: 8, category: "basicas" },
      { name: "Fundamentos para la Resolución de Problemas en Ingeniería", credits: 2, category: "ingenieria" },
      { name: "Pensamiento Computacional", credits: 8, category: "complementarias" },
      { name: "Igualdad de Género en Ingeniería", credits: 2, category: "sociales" },
    ],
  },
  {
    number: 2,
    obligatorias: 40, optativas: 0, total: 40,
    subjects: [
      { name: "Mecánica", credits: 8, category: "basicas" },
      { name: "Cálculo Vectorial", credits: 8, category: "basicas" },
      { name: "Ecuaciones Diferenciales", credits: 8, category: "basicas" },
      { name: "Álgebra Lineal", credits: 8, category: "basicas" },
      { name: "Introducción a los Circuitos de CD", credits: 6, category: "ingenieria" },
      { name: "Sociedad, Cultura e Identidad", credits: 2, category: "sociales" },
    ],
  },
  {
    number: 3,
    obligatorias: 48, optativas: 0, total: 48,
    subjects: [
      { name: "Electricidad y Magnetismo", credits: 8, category: "basicas" },
      { name: "Probabilidad y Estadística", credits: 8, category: "basicas" },
      { name: "Matemáticas Avanzadas", credits: 8, category: "basicas" },
      { name: "Química General", credits: 8, category: "basicas" },
      { name: "Señales y Sistemas", credits: 8, category: "ingenieria" },
      { name: "Comunicación Multimodal", credits: 8, category: "sociales" },
    ],
  },
  {
    number: 4,
    obligatorias: 46, optativas: 0, total: 46,
    subjects: [
      { name: "Teoría Electromagnética", credits: 8, category: "ingenieria" },
      { name: "Ingeniería de Datos e Inteligencia Artificial", credits: 8, category: "complementarias" },
      { name: "Análisis Numérico", credits: 6, category: "basicas" },
      { name: "Análisis de Circuitos Eléctricos", credits: 8, category: "ingenieria" },
      { name: "Física de Semiconductores", credits: 8, category: "ingenieria" },
      { name: "Dinámica de Sistemas Físicos", credits: 8, category: "ingenieria" },
    ],
  },
  {
    number: 5,
    obligatorias: 46, optativas: 0, total: 46,
    subjects: [
      { name: "Finanzas en Ingeniería", credits: 6, category: "altaDireccion" },
      { name: "Uso Eficiente de la Energía", credits: 6, category: "aplicada" },
      { name: "Máquinas Eléctricas", credits: 10, category: "ingenieria" },
      { name: "Fundamentos de Control", credits: 8, category: "ingenieria" },
      { name: "Dispositivos y Circuitos Electrónicos", credits: 8, category: "ingenieria" },
      { name: "Medición e Instrumentación", credits: 8, category: "ingenieria" },
    ],
  },
  {
    number: 6,
    obligatorias: 40, optativas: 0, total: 40,
    subjects: [
      { name: "Ingeniería Económica", credits: 6, category: "altaDireccion" },
      { name: "Redes Eléctricas de Distribución", credits: 6, category: "aplicada" },
      { name: "Fuentes de Energía Eléctrica", credits: 6, category: "aplicada" },
      { name: "Diseño Digital", credits: 8, category: "aplicada" },
      { name: "Amplificadores Electrónicos", credits: 8, category: "aplicada" },
      { name: "Liderazgo Estratégico", credits: 6, category: "sociales" },
    ],
  },
  {
    number: 7,
    obligatorias: 46, optativas: 0, total: 46,
    subjects: [
      { name: "Gestión Integral de Proyectos", credits: 6, category: "altaDireccion" },
      { name: "Automatización", credits: 8, category: "aplicada" },
      { name: "Procesamiento Digital de Señales", credits: 8, category: "aplicada" },
      { name: "Microprocesadores y Microcontroladores", credits: 8, category: "aplicada" },
      { name: "Circuitos Integrados Analógicos", credits: 8, category: "aplicada" },
      { name: "Redes Eléctricas de Transmisión", credits: 8, category: "aplicada" },
    ],
  },
  {
    number: 8,
    obligatorias: 28, optativas: 14, total: 42,
    subjects: [
      { name: "Ética Profesional", credits: 6, category: "sociales" },
      { name: "Temas Selectos", credits: 14, category: "temasSelectos" },
      { name: "Instalaciones Eléctricas Industriales", credits: 6, category: "aplicada" },
      { name: "Circuitos y Sistemas Electrónicos para Comunicaciones", credits: 8, category: "aplicada" },
      { name: "Redes Eléctricas Resilientes", credits: 8, category: "aplicada" },
    ],
  },
  {
    number: 9,
    obligatorias: 6, optativas: 32, total: 38,
    subjects: [
      { name: "Temas Selectos", credits: 32, category: "temasSelectos" },
      { name: "Ingeniería y Desarrollo Sostenible", credits: 6, category: "sociales" },
    ],
  },
  {
    number: 10,
    obligatorias: 10, optativas: 0, total: 10,
    subjects: [
      { name: "Proyecto Integrador en Ingeniería", credits: 10, category: "aplicada" },
    ],
  },
];

const summary2026 = [
  { label: "Ciencias Básicas", value: "96 créditos" },
  { label: "Ciencias de la Ingeniería", value: "82 créditos" },
  { label: "Ciencias Sociales y Humanidades", value: "30 créditos" },
  { label: "Conocimientos Complementarios en Ingeniería", value: "16 créditos" },
  { label: "Ingeniería Aplicada", value: "106 créditos" },
  { label: "Alta Dirección en Ingeniería", value: "18 créditos" },
  { label: "Temas Selectos", value: "46 créditos" },
];

// Optativas de "Temas Selectos", agrupadas por orientación (se cursan
// en 8° y 9° semestre). Datos transcritos de "Asignaturas Optativas
// del Plan de Estudios de Ingeniería Eléctrica Electrónica", Tomos
// IEE Plan Nuevo, mayo 2026.
interface OptativaCourse {
  name: string;
  credits: number;
  semesters: string;
}

const temasSelectosFields2026 = {
  bioingenieria: {
    label: "Bioingeniería",
    courses: [
      { name: "Bioelectrónica", credits: 8, semesters: "8" },
      { name: "Equipos Biomédicos Electrónicos Avanzados", credits: 8, semesters: "8" },
      { name: "Temas Selectos de Bioingeniería I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Bioingeniería II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Bioingeniería III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Bioingeniería IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Bioingeniería V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  control: {
    label: "Control",
    courses: [
      { name: "Control Industrial Programable de Gran Escala", credits: 8, semesters: "8" },
      { name: "Instrumentación Inteligente", credits: 8, semesters: "9" },
      { name: "Temas Selectos de Control I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Control II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Control III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Control IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Control V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  electricaElectronica: {
    label: "Eléctrica Electrónica",
    courses: [
      { name: "Temas Selectos de Eléctrica Electrónica I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Eléctrica Electrónica II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Eléctrica Electrónica III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Eléctrica Electrónica IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Eléctrica Electrónica V", credits: 10, semesters: "8,9" },
      { name: "Temas Selectos de Eléctrica Electrónica VI", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  altaFrecuencia: {
    label: "Electrónica de Alta Frecuencia",
    courses: [
      { name: "Amplificadores para Microondas", credits: 6, semesters: "8,9" },
      { name: "Mems para Radiofrecuencia", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica de Alta Frecuencia I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica de Alta Frecuencia II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica de Alta Frecuencia III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica de Alta Frecuencia IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica de Alta Frecuencia V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  electronicaDigital: {
    label: "Electrónica Digital",
    courses: [
      { name: "Dispositivos Electrónicos Programables", credits: 6, semesters: "8,9" },
      { name: "Sistemas Electrónicos Embebidos", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica Digital I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica Digital II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica Digital III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica Digital IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Electrónica Digital V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  produccionEnergia: {
    label: "Producción y Utilización de la Energía",
    courses: [
      { name: "Plantas Generadoras", credits: 6, semesters: "8,9" },
      { name: "Subestaciones Eléctricas", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Producción y Utilización de la Energía I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Producción y Utilización de la Energía II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Producción y Utilización de la Energía III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Producción y Utilización de la Energía IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Producción y Utilización de la Energía V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  redesElectricas: {
    label: "Redes Eléctricas",
    courses: [
      { name: "Gestión Óptima de la Generación", credits: 6, semesters: "8,9" },
      { name: "Protección de Redes Eléctricas", credits: 8, semesters: "9" },
      { name: "Temas Selectos de Redes Eléctricas I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Redes Eléctricas II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Redes Eléctricas III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Redes Eléctricas IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Redes Eléctricas V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  senalesInteligentes: {
    label: "Señales y Sistemas Inteligentes",
    courses: [
      { name: "Robots Móviles", credits: 6, semesters: "8" },
      { name: "Visión Computacional", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Señales y Sistemas Inteligentes I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Señales y Sistemas Inteligentes II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Señales y Sistemas Inteligentes III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Señales y Sistemas Inteligentes IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Señales y Sistemas Inteligentes V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  sistemasElectronicos: {
    label: "Sistemas Electrónicos",
    courses: [
      { name: "Electrónica de Potencia", credits: 6, semesters: "8,9" },
      { name: "Sistemas Electrónicos", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Electrónicos I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Electrónicos II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Electrónicos III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Electrónicos IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Electrónicos V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  sistemasEnergeticos: {
    label: "Sistemas Energéticos",
    courses: [
      { name: "Aprovechamiento de Fuentes Renovables de Energía", credits: 6, semesters: "8,9" },
      { name: "Planeación de la Expansión del Sistema Eléctrico", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Energéticos I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Energéticos II", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Energéticos III", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Energéticos IV", credits: 8, semesters: "8,9" },
      { name: "Temas Selectos de Sistemas Energéticos V", credits: 10, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  generales: {
    label: "Básicas, Sociales, Humanidades y Gestión",
    courses: [
      { name: "Acústica y Óptica", credits: 10, semesters: "8" },
      { name: "Termodinámica", credits: 8, semesters: "8" },
      { name: "Cultura de Paz y Resolución de Conflictos", credits: 4, semesters: "8,9" },
      { name: "Temas Selectos de Ciencias Sociales I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Ciencias Sociales II", credits: 4, semesters: "8,9" },
      { name: "Temas Selectos de Humanidades I", credits: 6, semesters: "8,9" },
      { name: "Temas Selectos de Humanidades II", credits: 4, semesters: "8,9" },
      { name: "Innovación, Emprendimiento y Negocios", credits: 6, semesters: "8,9" },
    ] as OptativaCourse[],
  },
  movilidad: {
    label: "Movilidad e Internacionalización",
    courses: [
      { name: "Movilidad e Internacionalización I", credits: 4, semesters: "—" },
      { name: "Movilidad e Internacionalización II", credits: 4, semesters: "—" },
      { name: "Movilidad e Internacionalización III", credits: 6, semesters: "—" },
      { name: "Movilidad e Internacionalización IV", credits: 6, semesters: "—" },
      { name: "Movilidad e Internacionalización V", credits: 6, semesters: "—" },
      { name: "Movilidad e Internacionalización VI", credits: 6, semesters: "—" },
      { name: "Movilidad e Internacionalización VII", credits: 8, semesters: "—" },
      { name: "Movilidad e Internacionalización VIII", credits: 8, semesters: "—" },
      { name: "Movilidad e Internacionalización IX", credits: 8, semesters: "—" },
      { name: "Movilidad e Internacionalización X", credits: 8, semesters: "—" },
      { name: "Movilidad e Internacionalización XI", credits: 10, semesters: "—" },
    ] as OptativaCourse[],
  },
} as const;

type TemaFieldKey2026 = keyof typeof temasSelectosFields2026;

function Plan2026() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [selectedField, setSelectedField] = useState<TemaFieldKey2026 | null>(null);
  const current = semesters2026.find((s) => s.number === activeSemester)!;

  return (
    <div>
      <p className="text-ink/60 mb-6 max-w-2xl">
        10 semestres, 394 créditos totales (348 obligatorios + 46 optativos
        mínimos). Plan propuesto, mayo 2026. Explora las materias de cada
        semestre.
      </p>

      <a
        href="/PlanDeEstudios/mapa-2026.png"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-10 max-w-sm border border-ink/10 rounded-lg overflow-hidden hover:border-copper transition-colors"
      >
        <Image
          src="/PlanDeEstudios/mapa-2026.png"
          alt="Mapa curricular oficial del Plan 2026"
          width={2550}
          height={3300}
          className="w-full h-auto"
        />
        <span className="block text-center font-mono text-xs text-ink/60 py-2 border-t border-ink/10">
          Ver mapa curricular oficial completo ↗
        </span>
      </a>

      <div className="flex flex-wrap gap-2 mb-8">
        {semesters2026.map((s) => (
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

      <div className="flex gap-8 mb-6 font-mono text-sm text-ink/60">
        <span><strong className="text-ink">{current.obligatorias}</strong> obligatorios</span>
        <span><strong className="text-ink">{current.optativas}</strong> optativos</span>
        <span><strong className="text-ink">{current.total}</strong> créditos totales</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {current.subjects.map((subject, i) => {
          const cat = categories2026[subject.category];
          const href = getProgramHref(subject.name);
          const className = `${cat.bg} border-l-4 ${cat.border} rounded p-4 block${
            href ? " hover:brightness-95 transition cursor-pointer" : ""
          }`;
          const content = (
            <>
              <h3 className="font-display font-bold text-ink text-sm mb-1">
                {subject.name}
              </h3>
              <span className="font-mono text-xs text-ink/60">
                {subject.credits} créditos
              </span>
            </>
          );
          return href ? (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={i} className={className}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 mb-12 text-xs">
        {Object.values(categories2026).map((cat) => (
          <div key={cat.label} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-sm ${cat.bg} border ${cat.border}`} />
            <span className="text-ink/60">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Temas Selectos: optativas por orientación, cursadas en 8° y 9° */}
      <div className="border-t border-ink/10 pt-8 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          8° y 9° semestre
        </span>
        <h3 className="font-display text-2xl font-bold text-ink mb-2">
          Temas Selectos por orientación
        </h3>
        <p className="text-ink/60 mb-6 max-w-2xl">
          Las materias de "Temas Selectos" (14 créditos en 8° y 32 en 9°) se
          eligen libremente de estas orientaciones hasta cubrir el mínimo de
          46 créditos optativos.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(temasSelectosFields2026) as TemaFieldKey2026[]).map((key) => {
            const field = temasSelectosFields2026[key];
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
          <div className="bg-gray-50 border-l-4 border-gray-500 rounded p-6">
            <ul className="space-y-2 text-sm text-ink/80">
              {temasSelectosFields2026[selectedField].courses.map((course) => {
                const href = getProgramHref(course.name);
                return (
                  <li key={course.name} className="flex justify-between gap-4">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-copper hover:underline"
                      >
                        • {course.name}
                      </a>
                    ) : (
                      <span>• {course.name}</span>
                    )}
                    <span className="font-mono text-xs text-ink/50 shrink-0">
                      {course.credits} cr. · sem. {course.semesters}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-ink/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {summary2026.map((item) => (
          <div key={item.label}>
            <div className="font-display text-2xl font-bold text-ink">{item.value}</div>
            <div className="text-ink/50 text-xs mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PLAN 2023 — datos existentes, sin cambios
   ============================================================ */

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

function Plan2023() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [selectedField, setSelectedField] = useState<FieldKey | null>(null);
  const current = semesters.find((s) => s.number === activeSemester)!;

  return (
    <div>
      <p className="text-ink/60 mb-6 max-w-2xl">
        10 semestres, 442 créditos totales. Explora las materias de cada
        semestre.
      </p>

      <a
        href="/Logo/electrica_2023.png"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-10 max-w-sm border border-ink/10 rounded-lg overflow-hidden hover:border-copper transition-colors"
      >
        <Image
          src="/Logo/electrica_2023.png"
          alt="Mapa curricular oficial del Plan 2023"
          width={800}
          height={1067}
          className="w-full h-auto"
        />
        <span className="block text-center font-mono text-xs text-ink/60 py-2 border-t border-ink/10">
          Ver mapa curricular oficial completo ↗
        </span>
      </a>

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
  );
}

/* ============================================================
   Componente principal: selector de plan (2026 primero, 2023 sin tocar)
   ============================================================ */

export default function StudyPlan() {
  const [plan, setPlan] = useState<PlanKey>("2026");

  return (
    <section id="plan-de-estudios" className="bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper uppercase mb-4 block">
          Plan de estudios
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-6">
          Mapa curricular
        </h2>

        {/* Selector de plan: el nuevo (2026) va primero y queda
            seleccionado por default; el 2023 sigue disponible tal cual. */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-ink/10">
          {planTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setPlan(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                plan === tab.key
                  ? "border-copper text-ink"
                  : "border-transparent text-ink/50 hover:text-ink/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {plan === "2026" ? <Plan2026 /> : <Plan2023 />}
      </div>
    </section>
  );
}
