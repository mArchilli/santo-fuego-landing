import React, { useState, useEffect, useRef } from 'react'

export default function Events(){
  // Carrusel de imágenes reutilizado desde About
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
  const whatsapp = 'https://wa.me/541136039118?text=' + encodeURIComponent('¡Hola! Me gustaría consultar por eventos en Santo Fuego (empresariales, familiares, cenas).')
  return (
    <section id="events" className="relative py-28 bg-neutral-950 text-white" aria-labelledby="events-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.05),transparent_60%)] opacity-40" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">Servicios</p>
          <h2 id="events-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-red-400">Eventos</span> a tu medida
          </h2>
          <p className="text-white/75 leading-relaxed max-w-xl">
            La parrilla Santo Fuego también realiza eventos empresariales, familiares y cenas especiales. 
            Nos ocupamos de los detalles para que disfrutes de una experiencia auténtica y cálida, con el sabor de siempre.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/75">
            <li className="flex gap-3"><span className="text-red-400">•</span> Menús personalizables y asesoramiento del equipo.</li>
            <li className="flex gap-3"><span className="text-red-400">•</span> Reservas para grupos y fechas especiales.</li>
            <li className="flex gap-3"><span className="text-red-400">•</span> Opciones para ambientación y tiempos del servicio.</li>
          </ul>
          <div className="mt-8">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-accent text-white hover:bg-red-600 ring-1 ring-red-500/40 transition-[box-shadow,background-color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 shadow-[0_0_12px_rgba(185,28,28,0.55),0_0_28px_rgba(185,28,28,0.35)] hover:shadow-[0_0_18px_rgba(220,38,38,0.9),0_0_42px_rgba(220,38,38,0.6)]"
              aria-label="Consultar eventos por WhatsApp"
            >
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Carrusel vista tablet y desktop */}
          <div className="hidden sm:block relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
            <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
            </div>
          </div>

          {/* Carrusel mobile */}
          <div
            className="block sm:hidden relative group w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 select-none touch-pan-y"
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
                const threshold = 50
                if (Math.abs(deltaX) > threshold) {
                  if (deltaX < 0) nextImage(); else prevImage()
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
