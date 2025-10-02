import React, { useState, useEffect, useRef } from 'react'

export default function About(){
  // Carrusel de imágenes (asumo usar las imágenes que existen en /public/assets)
  // Si agregas nuevas imágenes, solo extiende este array.
  const images = [
    { src: '/assets/traditional-argentine-asado-master-grilling-meat-o.jpg', alt: 'Parrilla encendida con brasas vivas' },
    { src: '/assets/parrilla-argentina-con-fuego-intenso-y-carnes.jpg', alt: 'Cortes de asado argentino en cocción' },
    { src: '/assets/cortes-de-carne-premium-argentinos-en-parrilla.jpg', alt: 'Corte de vacío sellándose al fuego' },
    { src: '/assets/ambiente-acogedor-de-parrilla-argentina-tradiciona.jpg', alt: 'Provoleta fundida lista para servir' }
  ]
  const [currentImage, setCurrentImage] = useState(0)
  const touchStartX = useRef(null)
  const touchCurrentX = useRef(null)

  const nextImage = () => setCurrentImage(prev => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage(prev => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white" aria-labelledby="about-heading">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white,transparent_70%)] pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">


        {/* Carrusel vista tablet y desktop reemplazando la imagen estática original */}
        <div className="hidden sm:block relative group">
          {/* Halo / Glow al hacer hover */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
          <div className="relative w-full h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {images.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[1300ms] ease-[cubic-bezier(.4,.0,.2,1)]
                  ${idx === currentImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-[1.07] rotate-[1.5deg]'}
                `}
              />
            ))}

            {/* Indicadores (dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ring-1 ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
                    ${idx === currentImage ? 'bg-red-400 scale-110 shadow' : 'bg-white/40 hover:bg-white/70'}
                  `}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span className="block px-1">←</span>
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span className="block px-1">→</span>
            </button>

            {/* Etiqueta flotante conservando la idea original */}
            {/* <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-sm px-4 py-3 rounded-xl text-sm flex items-center gap-3 border border-white/10">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-400 shadow animate-pulse"></span>
              Brasas vivas, sabor auténtico.
            </div> */}
            {/* Overlay sutil para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>


        <div className="relative">
          <h2 id="about-heading" className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">Tradición que se <span className="text-red-400">enciende</span> en cada servicio</h2>
          <p className="text-lg text-white/85 mb-6 font-light">
            En <span className="text-red-400 font-semibold">SANTO FUEGO</span> defendemos el ritual del asado: <span className="text-red-400 font-semibold">paciencia</span>, <span className="text-red-400 font-semibold">brasa justa</span> y <span className="text-red-400 font-semibold">cortes nobles</span>. Nuestra cocina honra la esencia de la parrilla argentina, fusionando técnicas clásicas con un servicio contemporáneo.
          </p>
          <ul className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              {title:'Cortes Premium',desc:'Selección certificada y maduración controlada.'},
              {title:'Vinos Argentinos',desc:'Maridajes pensados para cada corte.'},
              {title:'Provoleta y Entradas',desc:'Sabores que preparan el paladar.'},
              {title:'Experiencia Completa',desc:'Ambiente cálido y atención dedicada.'}
            ].map(f => (
              <li key={f.title} className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/60 transition overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-red-500/0 to-transparent" aria-hidden="true" />
                <p className="relative flex items-center gap-2 font-semibold text-red-400 mb-2 tracking-wide">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-amber-400 shadow-[0_0_6px_rgba(248,113,113,0.6)] ring-1 ring-red-400/40" aria-hidden="true" />
                  <span className="relative">
                    {f.title}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-red-400 via-amber-400 to-red-500 transition-all duration-500 ease-out" aria-hidden="true" />
                  </span>
                </p>
                <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{f.desc}</p>
              </li>
            ))}
          </ul>


          {/* <div className="flex flex-wrap gap-4">
            <a href="#reservations" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-amber-500 text-black font-semibold px-6 py-3 rounded-xl shadow hover:from-amber-400 hover:to-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">
              Reservar Experiencia
              <span className="text-lg">🔥</span>
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 hover:border-gold text-white backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">
              Ver Cortes
            </a>
          </div> */}


        </div>

            {/* Carrusel mobile reemplazando la imagen estática original */}
        <div className="block sm:hidden relative group">
          {/* Halo / Glow al hacer hover */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
          <div
            className="relative w-full h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 select-none touch-pan-y"
            onTouchStart={(e) => {
              if (e.touches && e.touches.length > 0) {
                touchStartX.current = e.touches[0].clientX
                touchCurrentX.current = e.touches[0].clientX
              }
            }}
            onTouchMove={(e) => {
              if (e.touches && e.touches.length > 0) {
                touchCurrentX.current = e.touches[0].clientX
              }
            }}
            onTouchEnd={() => {
              if (touchStartX.current != null && touchCurrentX.current != null) {
                const deltaX = touchCurrentX.current - touchStartX.current
                const threshold = 50 // px
                if (Math.abs(deltaX) > threshold) {
                  if (deltaX < 0) {
                    nextImage()
                  } else {
                    prevImage()
                  }
                }
              }
              touchStartX.current = null
              touchCurrentX.current = null
            }}
          >
            {images.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                draggable="false"
                className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[1300ms] ease-[cubic-bezier(.4,.0,.2,1)]
                  ${idx === currentImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-[1.07] rotate-[1.5deg]'}
                `}
              />
            ))}

            {/* Indicadores (dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ring-1 ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
                    ${idx === currentImage ? 'bg-red-400 scale-110 shadow' : 'bg-white/40 hover:bg-white/70'}
                  `}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span className="block px-1">←</span>
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span className="block px-1">→</span>
            </button>

            {/* Etiqueta flotante conservando la idea original */}
            {/* <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-sm px-4 py-3 rounded-xl text-sm flex items-center gap-3 border border-white/10">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-400 shadow animate-pulse"></span>
              Brasas vivas, sabor auténtico.
            </div> */}
            {/* Overlay sutil para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}