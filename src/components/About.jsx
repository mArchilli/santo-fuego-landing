import React, { useState, useEffect } from 'react'

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
        {/* Carrusel reemplazando la imagen estática original */}
        <div className="relative group">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ring-1 ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold
                    ${idx === currentImage ? 'bg-gold scale-110 shadow' : 'bg-white/40 hover:bg-white/70'}
                  `}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              type="button"
              onClick={() => setCurrentImage(prev => (prev - 1 + images.length) % images.length)}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="block px-1">←</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentImage(prev => (prev + 1) % images.length)}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="block px-1">→</span>
            </button>

            {/* Etiqueta flotante conservando la idea original */}
            <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-sm px-4 py-3 rounded-xl text-sm flex items-center gap-3 border border-white/10">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-400 shadow animate-pulse"></span>
              Brasas vivas, sabor auténtico.
            </div>
            {/* Overlay sutil para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
        <div className="relative">
          <h2 id="about-heading" className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">Tradición que se enciende en cada servicio</h2>
          <p className="text-lg text-white/85 mb-6 font-light">
            En <strong className="text-gold font-semibold">Santo Fuego</strong> defendemos el ritual del asado: paciencia, brasa justa y cortes nobles. Nuestra cocina honra la esencia de la parrilla argentina, fusionando técnicas clásicas con un servicio contemporáneo.
          </p>
          <ul className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              {title:'Cortes Premium',desc:'Selección certificada y maduración controlada.'},
              {title:'Vinos Argentinos',desc:'Maridajes pensados para cada corte.'},
              {title:'Provoleta & Entradas',desc:'Sabores que preparan el paladar.'},
              {title:'Experiencia Completa',desc:'Ambiente cálido y atención dedicada.'}
            ].map(f => (
              <li key={f.title} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition">
                <p className="font-semibold text-gold mb-1">{f.title}</p>
                <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href="#reservations" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-amber-500 text-black font-semibold px-6 py-3 rounded-xl shadow hover:from-amber-400 hover:to-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">
              Reservar Experiencia
              <span className="text-lg">🔥</span>
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 hover:border-gold text-white backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">
              Ver Cortes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}