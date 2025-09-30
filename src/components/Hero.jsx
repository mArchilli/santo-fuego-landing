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
          {/* <div className="mb-6 text-6xl md:text-7xl leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] select-none" aria-hidden="true">🔥</div> */}

          {/* <h1
            id="hero-heading"
            className="font-extrabold tracking-tight text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] drop-shadow-sm"
          >
            <span className="text-white">Santo</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gold to-amber-500">Fuego</span>
          </h1> */}

          <h1 className="dramatic-text text-8xl md:text-9xl mb-4 uppercase">
            SANTO
            <br />
            FUEGO
          </h1>
          <p className="text-red-500 tracking-[0.2em] text-xs md:text-sm font-medium uppercase mb-8 select-none">
            Restaurante. Carne. Vinos
          </p>

          {/* Panel translúcido con texto y CTAs para mayor contraste sobre la imagen */}
          <div className="w-full max-w-3xl mx-auto ">
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed text-center">
              La pasión argentina por la parrilla se encuentra con la excelencia culinaria. Cada corte, cada llama, cada momento es una celebración del fuego sagrado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Botón primario minimalista */}
              <a
                href="#reservations"
                className="group w-full sm:w-auto inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-semibold uppercase tracking-wide bg-red-600 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 hover:bg-red-500 active:bg-red-700"
              >
                Reservar Mesa
              </a>
              {/* Botón secundario estilo outline minimal */}
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-semibold uppercase tracking-wide border border-red-600/70 text-red-400 hover:text-white hover:bg-red-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200"
              >
                Ver Menú
              </a>
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