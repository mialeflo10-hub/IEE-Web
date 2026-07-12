import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// next/font descarga y optimiza las fuentes de Google en build time
// (no se piden al navegador de Google en cada visita, Next las sirve
// desde su propio servidor — por eso es más rápido que un <link> normal).
//
// "variable: '--font-x'" crea una variable CSS con ese nombre, que
// luego usamos en globals.css (--font-display: var(--font-space-grotesk)).
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

// Next.js busca esta exportación específicamente y genera las etiquetas
// <title> y <meta description> del <head> automáticamente.
export const metadata: Metadata = {
  title: "IEE · Facultad de Ingeniería UNAM",
  description: "Coordinación de Ingeniería Eléctrica Electrónica",
};

// Este componente envuelve TODAS las páginas del sitio (por eso "layout").
// Todo lo que pongas aquí (fuentes, header fijo, footer, etc.) se repite
// en cada página sin que tengas que copiarlo.
export default function RootLayout({
  children, // "children" es la página actual que Next.js inserta aquí
}: {
  children: React.ReactNode;
}) {
  return (
    // Metemos las 3 variables de fuente como clases en el <html>,
    // para que estén disponibles en TODA la página (cualquier hijo
    // puede usar var(--font-inter), por ejemplo).
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      {/* font-sans aplica Inter como fuente por defecto del body.
          flex flex-col + min-h-screen: hacen que el body ocupe al menos
          toda la altura de la pantalla en columna (Header arriba,
          contenido en medio, Footer abajo) — así el Footer no queda
          "flotando" a medio de la pantalla en páginas con poco contenido,
          siempre se pega hasta abajo. */}
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        {/* flex-1: el contenido crece para llenar todo el espacio
            sobrante entre Header y Footer, empujando al Footer hasta
            el fondo aunque la página tenga poco texto. */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}