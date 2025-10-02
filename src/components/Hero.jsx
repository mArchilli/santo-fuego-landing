import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Hero(){
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black text-white"
      aria-labelledby="hero-heading"
    >
      <Helmet>
        <title>Santo Fuego | Parrilla Argentina Tradicional</title>
        <meta name="description" content="La auténtica experiencia del asado argentino: carnes premium, tradición familiar y el sabor inconfundible del fuego sagrado." />
        <meta property="og:title" content="Santo Fuego | Parrilla Argentina" />
        <meta property="og:description" content="Carnes premium, tradición y fuego argentino. Viví el ritual del asado." />
        <meta property="og:image" content="/assets/argentine-grill-with-fire-and-meat-cooking--dark-a.jpg" />
      </Helmet>
      {/* Imagen de fondo */}
      <img
        src="/assets/argentine-grill-with-fire-and-meat-cooking--dark-a.jpg"
        alt="Carne asándose sobre parrilla con llamas vivas"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />
      {/* Capa oscura + viñeteado para legibilidad */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.85)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/45 mix-blend-multiply" aria-hidden="true" />
      {/* Contenido */}
      <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-center">
  <div className="flex flex-col items-center">
          <h1 className="dramatic-text text-8xl md:text-9xl mb-2 uppercase">
            SANTO
            <br />
            FUEGO
          </h1>
          <p className="text-red-500 tracking-[0.18em] md:tracking-[0.28em] text-[0.7rem] md:text-sm font-semibold uppercase mb-8 select-none [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_0_4px_rgba(0,0,0,0.55)]">
            Parrilla. Carne. Vinos
          </p>

          {/* Panel translúcido con texto y CTAs para mayor contraste sobre la imagen */}
          <div className="w-full max-w-3xl mx-auto ">
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed text-center">
              La pasión argentina por la parrilla se encuentra con la excelencia culinaria. Cada corte, cada llama, cada momento es una celebración del fuego sagrado.
            </p>
            {/* Botonera segmentada */}
            <div className="mt-10 inline-flex flex-row items-stretch justify-center rounded-xl overflow-hidden relative max-w-full w-full sm:w-auto">
              {/* Glow sutil detrás */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/25 via-red-500/10 to-transparent blur-xl" />
              <div className="group/button flex flex-row w-full sm:w-auto backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.6)] rounded-xl divide-x divide-white/10 overflow-hidden">
                <a
                  href="#reservations"
                  className="relative flex-1 px-8 py-4 text-[0.75rem] md:text-sm font-semibold tracking-wide uppercase text-white flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-none first:rounded-l-xl"
                >
                  <span className="inline-block">Reservar</span>
                  <span className="hidden md:inline-block">Mesa</span>
                </a>
                <a
                  href="#menu"
                  className="relative flex-1 px-8 py-4 text-[0.75rem] md:text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 text-red-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition duration-200 bg-white/0 hover:bg-white/5 rounded-none last:rounded-r-xl"
                >
                  <span>Ver Menú</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Indicador de scroll (flecha sola) */}
      <a
        href="#menu"
        aria-label="Ir al menú"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center text-white/85 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 rounded-full transition"
      >
        <svg
          className="h-5 w-5 animate-bounce-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}