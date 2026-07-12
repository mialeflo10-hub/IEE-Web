import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiX, SiYoutube, SiInstagram } from "@icons-pack/react-simple-icons";

const socialLinks = [
  { href: "https://www.facebook.com/people/Coordinaci%C3%B3n-IEE/61567124520307/", icon: SiFacebook, label: "Facebook" },
  { href: "https://twitter.com/die_fi_unam", icon: SiX, label: "Twitter" }, // Twitter ahora se llama "X" en Simple Icons
  { href: "https://www.youtube.com/channel/UCN2VqvoX-WyPvjbGG_r0IZw", icon: SiYoutube, label: "YouTube" },
  { href: "https://www.instagram.com/https://www.instagram.com/iee_coordinacion//", icon: SiInstagram, label: "Instagram" },
];

const sitiosInteres = [
  { href: "http://www.anfei.mx", label: "ANFEI" },
  { href: "http://www.alianzafiidem.org", label: "Alianza FIDEM" },
  { href: "http://cacei.org.mx", label: "CACEI" },
  { href: "http://ingenet.com.mx", label: "INGENET" },
];

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/AboutCarrer", label: "La carrera" },
  { href: "/PlanDeEstudios", label: "Plan de estudios" },
  { href: "/Perfil", label: "Perfil" },
  { href: "/noticias", label: "Noticias" },
  { href: "/eventos", label: "Eventos" },
];

export default function Footer() {
  return (
    <footer className="bg-pcb-950 text-paper border-t border-copper/30">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* 4 columnas en desktop, apiladas en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: identidad + redes */}
          <div>
            <h3 className="font-display font-bold text-lg mb-3">IEE</h3>
            <p className="text-paper/60 text-sm leading-relaxed mb-6">
              Coordinación de Ingeniería Eléctrica Electrónica, Facultad de
              Ingeniería, UNAM.
            </p>
            {/* Iconos de redes sociales: cada uno es un componente de
                lucide-react, del mismo tamaño (20px), dentro de un link
                que abre en pestaña nueva por ser sitio externo. */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-paper/20 hover:border-copper hover:text-copper transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: contacto de la coordinación */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-copper uppercase mb-4">
              Contacto
            </h3>
            <p className="text-paper/80 text-sm mb-1">
              M.I. María del Socorro Guevara Rodríguez
            </p>
            <p className="text-paper/50 text-xs mb-4">Coordinadora de la carrera</p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-copper shrink-0 mt-0.5" />
                <a href="mailto:coordinacion.iee@fi.unam.edu" className="text-paper/70 hover:text-signal transition-colors break-all">
                  coordinacion.iee@fi.unam.edu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-copper shrink-0 mt-0.5" />
                <span className="text-paper/70">(55) 5622-3100 </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-copper shrink-0 mt-0.5" />
                <span className="text-paper/70">
                  Planta baja, edificio P, cubículo P3-39 · Ciudad Universitaria
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 3: navegación rápida (reusa las mismas rutas del Header) */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-copper uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/70 hover:text-signal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: sitios de interés (asociaciones externas) */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-copper uppercase mb-4">
              Sitios de interés
            </h3>
            <ul className="space-y-2 text-sm">
              {sitiosInteres.map((site) => (
                <li key={site.label}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/70 hover:text-signal transition-colors"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mapa de ubicación, ancho completo debajo de las columnas */}
        <div className="mt-12 rounded-lg overflow-hidden border border-copper/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.112964233862!2d-99.18253845507635!3d19.32796104237964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0005b2e0bbab%3A0xc3ee8e021c39e723!2sUNAM%20Divisi%C3%B3n%20de%20Ingenier%C3%ADa%20El%C3%A9ctrica!5e0!3m2!1ses-419!2smx!4v1648143340122!5m2!1ses-419!2smx"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación División de Ingeniería Eléctrica"
          />
        </div>
      </div>

      {/* Barra legal inferior, más angosta y sutil, en su propio bg
          ligeramente distinto para separarla visualmente */}
      <div className="border-t border-copper/20 bg-pcb-800/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <span>
            Hecho por Michel Alejandro Flores Guevara / DIE / Facultad de Ingeniería / UNAM
          </span>
        </div>
      </div>
    </footer>
  );
}
