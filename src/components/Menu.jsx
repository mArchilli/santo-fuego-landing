import React from 'react'

export default function Menu(){
  return (
    <section id="menu" className="relative py-28 bg-neutral-950 text-white" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
            {/* Bloque textual / narrativo */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <h2
                id="menu-heading"
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]"
              >
                <span className="text-white">Nuestro</span> <span className="text-red-400">Menú</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Encontrá todos nuestros cortes, entradas, acompañamientos, postres y bebidas en un solo lugar.
              </p>
              <p className="mt-4 text-base md:text-lg text-white/65 max-w-xl">
                Entre nuestros favoritos: asado de tira, ojo de bife, provoleta a la leña y flan casero con dulce. Cada plato busca equilibrio entre brasa, punto y presentación.
              </p>
              <ul className="mt-6 space-y-2 text-sm md:text-base text-white/80">
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
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/assets/menu-santo-fuego.pdf"
                  download="menu-santo-fuego.pdf"
                  className="group w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.6)]"
                >
                  <span className="relative">Descargar menú PDF</span>
                </a>
                <a
                  href="/assets/menu-santo-fuego.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide border border-white/15 bg-white/0 text-red-300 hover:text-white hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200"
                >
                  Ver menú online
                </a>
              </div>
              <p className="mt-5 text-xs text-white/50">Tamaño aprox. del archivo: 1–3 MB. Requiere visor PDF.</p>
            </div>
            {/* Visor PDF simple */}
            <div className="lg:col-span-6 flex lg:pl-4">
              <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-neutral-900/40">
                <object
                  data="/assets/menu-santo-fuego.pdf#page=1&zoom=100"
                  type="application/pdf"
                  aria-label="Vista previa del menú PDF"
                  className="w-full h-full"
                >
                  <div className="flex items-center justify-center h-full text-xs text-white/50 p-4 text-center">
                    No se pudo mostrar el PDF. <a href="/assets/menu-santo-fuego.pdf" className="underline ml-1">Descargar</a>
                  </div>
                </object>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}