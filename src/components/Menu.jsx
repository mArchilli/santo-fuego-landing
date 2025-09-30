import React from 'react'

export default function Menu(){
  return (
    <section id="menu" className="relative py-28 bg-neutral-950 text-white" aria-labelledby="menu-heading">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,199,88,0.05),transparent)] pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Columna izquierda: título + descripción + CTAs */}
          <div className="flex flex-col justify-center">
            <h2 id="menu-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Nuestro Menú</h2>
            <p className="text-base md:text-lg text-white/70">
              Encontrá todos nuestros cortes, entradas, acompañamientos, postres y bebidas en un solo lugar.
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
              {/* Botón principal: Descargar */}
              <a
                href="/assets/menu-santo-fuego.pdf"
                download="menu-santo-fuego.pdf"
                className="w-full sm:w-auto relative inline-flex justify-center items-center rounded-lg px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-accent text-white hover:bg-red-600 ring-1 ring-red-500/40 transition-[box-shadow,background-color,opacity] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 shadow-[0_0_12px_rgba(185,28,28,0.55),0_0_28px_rgba(185,28,28,0.35)] hover:shadow-[0_0_18px_rgba(220,38,38,0.9),0_0_42px_rgba(220,38,38,0.6)] after:content-[''] after:absolute after:inset-0 after:rounded-lg after:-z-10 after:bg-accent hover:after:bg-red-600 after:blur-xl after:opacity-40 hover:after:opacity-60 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Descargar menú PDF
              </a>
              {/* Botón secundario: Ver online (variante outline) */}
              <a
                href="/assets/menu-santo-fuego.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-sm font-semibold uppercase tracking-wide border border-white/20 text-white bg-transparent hover:text-red-400 hover:border-red-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70"
              >
                Ver menú online
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">Tamaño aprox. del archivo: 1–3 MB. Requiere visor PDF.</p>
          </div>

          {/* Columna derecha: ilustración SVG directamente sobre el fondo */}
          <div className="w-full h-[420px] md:h-[520px] flex items-center justify-center">
            <svg
              viewBox="0 0 600 420"
              className="w-[90%] h-[90%] max-w-full max-h-full text-white/80"
              role="img"
              aria-labelledby="menuSvgTitle menuSvgDesc"
            >
              <title id="menuSvgTitle">Ilustración de parrilla argentina</title>
              <desc id="menuSvgDesc">Brasas y llama sobre una parrilla, representando la cocina a las brasas.</desc>
              <defs>
                <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f87171"/>
                  <stop offset="65%" stopColor="#ef4444"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
                <radialGradient id="glowGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35"/>
                  <stop offset="70%" stopColor="#ef4444" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Resplandor */}
              <ellipse cx="300" cy="190" rx="170" ry="120" fill="url(#glowGrad)"/>

              {/* Borde de la parrilla */}
              <ellipse cx="300" cy="240" rx="200" ry="60" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3"/>

              {/* Rejilla */}
              <g stroke="currentColor" strokeOpacity="0.25" strokeWidth="2">
                <line x1="140" y1="220" x2="460" y2="220"/>
                <line x1="140" y1="235" x2="460" y2="235"/>
                <line x1="140" y1="250" x2="460" y2="250"/>
                <line x1="140" y1="265" x2="460" y2="265"/>
                {/* Barras verticales sutiles */}
                <line x1="200" y1="210" x2="200" y2="270"/>
                <line x1="260" y1="210" x2="260" y2="270"/>
                <line x1="320" y1="210" x2="320" y2="270"/>
                <line x1="380" y1="210" x2="380" y2="270"/>
              </g>

              {/* Cuerpo/mesa */}
              <ellipse cx="300" cy="270" rx="185" ry="35" fill="currentColor" opacity="0.06"/>

              {/* Patas de la parrilla */}
              <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round">
                <line x1="210" y1="285" x2="210" y2="345"/>
                <line x1="390" y1="285" x2="390" y2="345"/>
              </g>

              {/* Llama central */}
              <g>
                <path
                  d="M300 130c-38 26-48 58-26 86 18 24 60 26 81 2 22-25 8-60-24-90 4 22-6 30-31 2z"
                  fill="url(#flameGrad)"
                />
                {/* Llamas secundarias */}
                <path d="M260 165c-16 12-18 28-8 42 9 13 31 14 42 1 11-13 3-32-18-51 3 12-3 16-16 0z" fill="url(#flameGrad)" opacity="0.85"/>
                <path d="M352 170c-14 10-16 24-7 36 8 11 27 12 36 1 10-11 4-27-15-43 3 10-2 13-14 0z" fill="url(#flameGrad)" opacity="0.85"/>
              </g>

              {/* Utensilios: tenedor y espátula */}
              <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                {/* Tenedor */}
                <path d="M98 120v38M112 120v38M84 120v38" />
                <path d="M84 158h28v92c0 10-8 18-18 18h-2c-10 0-18-8-18-18v-44" />
                {/* Espátula */}
                <rect x="470" y="120" width="42" height="44" rx="6" fill="currentColor" opacity="0.08" />
                <rect x="470" y="120" width="42" height="44" rx="6" fill="none" stroke="currentColor"/>
                <path d="M491 164v74" />
                <path d="M491 238c0 10 8 18 18 18" opacity="0.5"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}