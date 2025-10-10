import React from 'react'

export default function Menu(){
  return (
    <section
      id="menu"
      className="relative min-h-screen bg-neutral-950 text-white overflow-hidden"
      aria-labelledby="menu-heading"
    >
      {/* Imagen de fondo con gradiente propio (mobile) y también válido para desktop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[position:center] md:bg-[position:-160px_center] lg:bg-[position:-280px_center]"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 75%), url('/assets/image-menu.jpg')"
        }}
        aria-hidden="true"
      />
      {/* Overlay extra: oculto en mobile, visible en md+ para mantener estilo desktop */}
      <div
        className="absolute inset-0 z-10 hidden md:block bg-[linear-gradient(to_left,rgba(0,0,0,0.98)_45%,rgba(0,0,0,0.98)_50%,rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.35)_70%,transparent_80%)]"
        aria-hidden="true"
      />

      {/* Contenido por encima del degradado */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-12 md:py-16 flex items-center min-h-screen">
        <div className="ml-auto w-full max-w-xl bg-black/70 backdrop-blur-sm rounded-xl p-6 py-12 sm:p-8 md:bg-transparent md:backdrop-blur-0 md:rounded-none md:p-0">
          <h2
            id="menu-heading"
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold">Nuestro</span>{' '}
            <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-red-400">Menú</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Encontrá todos nuestros cortes, entradas, acompañamientos, postres y bebidas en un solo lugar.
          </p>
          <p className="mt-4 text-base md:text-lg text-white/65">
            Entre nuestros favoritos: asado de tira, ojo de bife, provoleta a la leña y flan casero con dulce. Cada plato busca equilibrio entre brasa, punto y presentación.
          </p>

          <div className="mt-10">
            <a
              href="/assets/menu-santo-fuego.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex justify-center items-center rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.6)]"
            >
              Ver menú online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}