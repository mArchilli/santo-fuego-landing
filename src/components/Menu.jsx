import React from 'react'

export default function Menu(){
  return (
  <section id="menu" className="relative h-screen bg-neutral-950 text-white flex items-center justify-center" aria-labelledby="menu-heading">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,199,88,0.05),transparent)] pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 w-full">
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Columna izquierda: título + descripción + CTAs */}
          <div className="flex flex-col justify-center">
            <h2
              id="menu-heading"
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            >
              <span className="text-white">Nuestro</span> <span className="text-red-400">Menú</span>
            </h2>
            <p className="text-base md:text-lg text-white/70">
              Encontrá todos nuestros cortes, entradas, acompañamientos, postres y bebidas en un solo lugar.
            </p>

            {/* Texto adicional para contexto */}
            <p className="mt-3 text-sm md:text-base text-white/60 max-w-xl">
              Entre nuestros favoritos: asado de tira, ojo de bife, provoleta a la leña y flan casero con dulce.
              Cada plato busca equilibrio entre brasa, punto y presentación.
            </p>

            {/* Bloque informativo con bullets (restaurado) */}
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">•</span>
                Formato PDF optimizado para móvil y escritorio.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">•</span>
                Siempre actualizado con precios vigentes en salón.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">•</span>
                Ideal para compartir por WhatsApp o imprimir.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              {/* Botón principal: Descargar (coherente con primario Hero) */}
              <a
                href="/assets/menu-santo-fuego.pdf"
                download="menu-santo-fuego.pdf"
                className="group w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.6)]"
              >
                <span className="relative">Descargar menú PDF</span>
              </a>
              {/* Botón secundario: Ver online (outline translúcido similar a secundario Hero) */}
              <a
                href="/assets/menu-santo-fuego.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide border border-white/15 bg-white/0 text-red-300 hover:text-white hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200"
              >
                Ver menú online
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">Tamaño aprox. del archivo: 1–3 MB. Requiere visor PDF.</p>
          </div>

          {/* Columna derecha: ilustración pulida con glow y overlay */}
          <div className="relative group w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
            <svg
              viewBox="0 0 640 420"
              className="absolute inset-0 w-full h-full text-white/85"
              role="img"
              aria-labelledby="menuSvgTitle menuSvgDesc"
            >
              <title id="menuSvgTitle">Parrilla con brasas y cortes</title>
              <desc id="menuSvgDesc">Una parrilla sencilla con rejilla, brasas y una llama sutil, representando la cocina a las brasas.</desc>
              <defs>
                <linearGradient id="m_flame" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fca5a5"/>
                  <stop offset="55%" stopColor="#ef4444"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
                <radialGradient id="m_glow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                  <stop offset="70%" stopColor="#ef4444" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Resplandor general */}
              <ellipse cx="320" cy="210" rx="210" ry="140" fill="url(#m_glow)"/>

              {/* Rejilla elíptica */}
              <ellipse cx="320" cy="250" rx="210" ry="62" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3"/>
              <g stroke="currentColor" strokeOpacity="0.25" strokeWidth="2">
                <line x1="140" y1="230" x2="500" y2="230"/>
                <line x1="140" y1="245" x2="500" y2="245"/>
                <line x1="140" y1="260" x2="500" y2="260"/>
                <line x1="140" y1="275" x2="500" y2="275"/>
                <line x1="200" y1="220" x2="200" y2="285"/>
                <line x1="260" y1="220" x2="260" y2="285"/>
                <line x1="320" y1="220" x2="320" y2="285"/>
                <line x1="380" y1="220" x2="380" y2="285"/>
                <line x1="440" y1="220" x2="440" y2="285"/>
              </g>

              {/* Cuerpo/mesa sutil */}
              <ellipse cx="320" cy="290" rx="195" ry="36" fill="currentColor" opacity="0.06"/>

              {/* Patas */}
              <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round">
                <line x1="220" y1="305" x2="220" y2="360"/>
                <line x1="420" y1="305" x2="420" y2="360"/>
              </g>

              {/* Llama simple */}
              <g>
                <path d="M320 150c-30 20-38 46-20 68 14 19 46 21 62 2 17-19 6-47-18-72 3 17-4 24-24 2z" fill="url(#m_flame)"/>
                <path d="M292 175c-12 9-14 21-6 31 7 10 24 11 32 1 8-10 3-24-14-39 2 9-3 12-12 0z" fill="url(#m_flame)" opacity="0.85"/>
                <path d="M356 178c-10 8-12 18-5 27 6 8 20 9 27 1 7-8 3-21-11-33 2 8-2 10-11 0z" fill="url(#m_flame)" opacity="0.85"/>
              </g>

              {/* Corte de carne estilizado */}
              <g>
                <rect x="260" y="215" width="120" height="34" rx="8" fill="currentColor" opacity="0.08" />
                <rect x="260" y="215" width="120" height="34" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.5"/>
                <path d="M275 232h90" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"/>
              </g>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}