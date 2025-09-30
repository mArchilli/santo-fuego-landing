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

          <h1 className="dramatic-text text-8xl md:text-9xl mb-8 uppercase">
            SANTO
            <br />
            FUEGO
          </h1>

          {/* Panel translúcido con texto y CTAs para mayor contraste sobre la imagen */}
          <div className="w-full max-w-3xl mx-auto ">
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed text-center">
              La pasión argentina por la parrilla se encuentra con la excelencia culinaria. Cada corte, cada llama, cada momento es una celebración del fuego sagrado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#reservations"
                className="w-full sm:w-auto relative inline-flex justify-center items-center rounded-lg px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-accent text-white hover:bg-red-600 ring-1 ring-red-500/40 transition-[box-shadow,background-color,opacity] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 shadow-[0_0_12px_rgba(185,28,28,0.55),0_0_28px_rgba(185,28,28,0.35)] hover:shadow-[0_0_18px_rgba(220,38,38,0.9),0_0_42px_rgba(220,38,38,0.6)] after:content-[''] after:absolute after:inset-0 after:rounded-lg after:-z-10 after:bg-accent hover:after:bg-red-600 after:blur-xl after:opacity-40 hover:after:opacity-60"
              >
                Reservar Mesa
              </a>
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-sm font-semibold uppercase tracking-wide border border-white/70 text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                Ver Menú
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Indicador de scroll */}
      <a
        href="#menu"
        className="group absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-wider font-medium text-white/60 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded"
        aria-label="Ir al menú"
      >
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/40 group-hover:border-red-400/70 transition">
          <span className="mt-1 h-2 w-1 rounded-full bg-white/70 group-hover:bg-red-400 animate-pulse" />
        </span>
        Scroll
      </a>
    </section>
  )
}