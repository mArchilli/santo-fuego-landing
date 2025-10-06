import React from 'react'

export default function About(){
  const aboutImage = {
    src: '/assets/argentine-grill-with-fire-and-meat-cooking--dark-a.jpg',
    alt: 'Cortes a la parrilla con fuego intenso'
  }
  return (
  <section id="about" className="relative h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white flex items-center justify-center" aria-labelledby="about-heading">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white,transparent_70%)] pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: contenido existente */}
        <div className="relative order-1 max-w-xl">
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">Pasión por la <span className="text-red-400">brasa</span></h2>
          <p className="text-base md:text-lg text-white/85 mb-5 md:mb-6 font-light">
            En <span className="text-red-400 font-semibold">SANTO FUEGO</span> defendemos el ritual del asado: <span className="text-red-400 font-semibold">paciencia</span>, <span className="text-red-400 font-semibold">brasa justa</span> y <span className="text-red-400 font-semibold">cortes nobles</span>. Nuestra cocina honra la esencia de la parrilla argentina, fusionando técnicas clásicas con un servicio contemporáneo.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8 md:mb-10">
            {[
              {title:'Cortes Premium',desc:'Selección certificada y maduración controlada.'},
              {title:'Vinos Argentinos',desc:'Maridajes pensados para cada corte.'},
              {title:'Provoleta y Entradas',desc:'Sabores que preparan el paladar.'},
              {title:'Experiencia Completa',desc:'Ambiente cálido y atención dedicada.'}
            ].map(f => (
              <li key={f.title} className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/60 transition overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-red-500/0 to-transparent" aria-hidden="true" />
                <p className="relative flex items-center gap-2 font-semibold text-red-400 mb-2 tracking-wide text-sm md:text-base">
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
        </div>
        {/* Columna derecha: imagen estilo carrusel de Events */}
        <div className="relative order-2 -mt-2 sm:mt-0">
          {/* Vista tablet y desktop */}
          <div className="hidden sm:block relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition" aria-hidden="true"></div>
            <div className="relative w-full h-[360px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover transform transition-all duration-[1300ms] ease-[cubic-bezier(.4,.0,.2,1)] opacity-100 scale-100 rotate-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
            </div>
          </div>
          {/* Vista mobile */}
          <div className="block sm:hidden relative group w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 select-none">
            <img
              src={aboutImage.src}
              alt={aboutImage.alt}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transform transition-all duration-[1300ms] ease-[cubic-bezier(.4,.0,.2,1)] opacity-100 scale-100 rotate-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}