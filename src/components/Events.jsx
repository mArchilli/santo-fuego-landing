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
  <section id="events" className="relative bg-black text-white flex md:items-center md:justify-center lg:min-h-screen" aria-labelledby="events-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.05),transparent_60%)] opacity-40" aria-hidden="true" />
  {/* Layout mobile / tablet (se oculta en desktop) */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-8 md:py-12 grid lg:hidden gap-10 items-start md:items-center">
        {/* Texto: visible solo en tablet, oculto en mobile (xs) */}
        <div className="hidden sm:block lg:order-2">
          <div className="relative lg:h-[440px] lg:flex lg:flex-col">
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
          <div className="mt-6 sm:mt-8 lg:mt-auto">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-[0.75rem] md:text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.6)]"
              aria-label="Consultar eventos por WhatsApp"
            >
              <span className="relative">Consultar por WhatsApp</span>
            </a>
          </div>
          </div>
    </div>
    {/* Mobile integrado (xs) inspirado en desktop */}
    <div
      className="block sm:hidden relative group w-full h-[460px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 select-none"
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
      {/* imágenes de fondo */}
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={idx === 0 ? 'eager' : 'lazy'}
          draggable="false"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(.4,.0,.2,1)] will-change-transform will-change-opacity [transform:translateZ(0)]
            ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}
          `}
        />
      ))}
      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" aria-hidden="true" />
      {/* contenido overlay (arriba) */}
      <div className="relative z-10 h-full flex flex-col justify-start p-5 pt-6 pb-24">
        <div>
          <h2 id="events-heading" className="text-3xl font-extrabold tracking-tight mb-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            <span className="text-red-400">Eventos</span> a tu medida
          </h2>
          <p className="text-white/85 text-base leading-snug">
            Experiencias para empresas, familias y momentos especiales. Detalles cuidados: cortes, tiempos y ambientación.
          </p>
          <ul className="mt-4 space-y-1.5 text-[0.8rem] text-white/80">
            <li className="flex gap-2"><span className="text-red-400">•</span> Menús curados y asesoramiento.</li>
            <li className="flex gap-2"><span className="text-red-400">•</span> Reservas y logística integral.</li>
            <li className="flex gap-2"><span className="text-red-400">•</span> Ambientación y timing a medida.</li>
          </ul>
          <div className="mt-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_6px_18px_-8px_rgba(220,38,38,0.6)]"
              aria-label="Consultar eventos por WhatsApp"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
      {/* barra de control inferior */}
      <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center z-20">
        <div className="flex items-center gap-4 px-4 py-2 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5)]">
          <button
            type="button"
            onClick={prevImage}
            aria-label="Imagen anterior"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full text-white/85 hover:text-white bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                aria-label={`Ir a la imagen ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ring-1 ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
                  ${idx === currentImage ? 'bg-red-400 scale-110 shadow-[0_0_0_3px_rgba(248,113,113,0.25)]' : 'bg-white/35 hover:bg-white/60'}
                `}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextImage}
            aria-label="Imagen siguiente"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full text-white/85 hover:text-white bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  <div className="relative -mt-2 sm:mt-0">
          {/* Carrusel vista tablet y desktop */}
          <div className="hidden sm:block relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
            <div className="relative w-full h-[360px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {images.map((img, idx) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(.4,.0,.2,1)] will-change-transform will-change-opacity [transform:translateZ(0)]
                    ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}
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

          {/* Carrusel mobile eliminado (reemplazado por móvil integrado arriba) */}
        </div>
      </div>

      {/* Layout desktop integrado */}
      <div className="hidden lg:block relative z-10 w-full max-w-[92rem] mx-auto px-10 py-20">
        <div className="relative rounded-[2.2rem] overflow-hidden ring-1 ring-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Carousel background */}
          <div className="absolute inset-0">
            {images.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(.4,.0,.2,1)] will-change-transform will-change-opacity [transform:translateZ(0)]
                  ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}
                `}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 grid grid-cols-12 gap-12 px-14 py-20 xl:py-24">
            <div className="col-span-7 flex flex-col justify-center max-w-3xl">
              <h2 className="text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                <span className="text-red-400">Eventos</span> a tu medida
              </h2>
              <p className="text-2xl text-white/85 leading-snug mb-10 font-light max-w-2xl">
                Organizamos experiencias gastronómicas completas para empresas, familias y momentos especiales.
                Cuidamos cada detalle: selección de cortes, tiempos de servicio y ambientación.
              </p>
              <ul className="space-y-4 text-lg text-white/80 mb-12">
                <li className="flex items-start gap-4"><span className="mt-2 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.25)]" /> Menús curados y asesoramiento personalizado.</li>
                <li className="flex items-start gap-4"><span className="mt-2 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.25)]" /> Coordinación de reservas y logística integral.</li>
                <li className="flex items-start gap-4"><span className="mt-2 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.25)]" /> Ambientación y timing alineados a tu objetivo.</li>
              </ul>
              <div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-3 rounded-xl px-12 py-5 text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-all duration-200 shadow-[0_12px_32px_-10px_rgba(220,38,38,0.55)] hover:shadow-[0_16px_38px_-8px_rgba(220,38,38,0.7)] hover:scale-[1.03]"
                  aria-label="Consultar eventos por WhatsApp"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="col-span-5 relative">
              {/* Reemplazado radial intenso por un fade lateral muy suave */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/5 via-black/0 to-black/0" />
            </div>
          </div>

          {/* Carousel controls (desktop) - nueva barra inferior */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center z-20">
            <div className="flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5)]">
              <button
                type="button"
                onClick={prevImage}
                aria-label="Imagen anterior"
                className="h-11 w-11 inline-flex items-center justify-center rounded-full text-white/85 hover:text-white bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="flex gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    aria-label={`Ir a la imagen ${idx + 1}`}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ring-1 ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
                      ${idx === currentImage ? 'bg-red-400 scale-110 shadow-[0_0_0_4px_rgba(248,113,113,0.25)]' : 'bg-white/35 hover:bg-white/60'}
                    `}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Imagen siguiente"
                className="h-11 w-11 inline-flex items-center justify-center rounded-full text-white/85 hover:text-white bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
