import React from 'react'

export default function About(){
  const aboutImage = {
    src: '/assets/argentine-grill-with-fire-and-meat-cooking--dark-a.jpg',
    alt: 'Cortes a la parrilla con fuego intenso'
  }
  return (
    <section id="about" className="relative py-32 bg-black text-white" aria-labelledby="about-heading">
      {/* Fondo dividido y textura sutil */}
      {/* Se quita el overlay de degradado neutro */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800" aria-hidden="true" /> */}
      {/* Se quita la textura para mantener negro puro */}
      {/* <div className="absolute inset-0 mix-blend-overlay opacity-[0.035] bg-[linear-gradient(115deg,#fff_4%,transparent_4%),linear-gradient(245deg,#fff_4%,transparent_4%)] bg-[size:32px_32px]" aria-hidden="true" /> */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_35%_40%,black,transparent_70%)] bg-[radial-gradient(circle_at_70%_75%,rgba(248,113,113,0.18),transparent_65%)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          {/* Imagen grande a la derecha en desktop */}
          <div className="hidden md:block lg:col-span-6 order-2 lg:order-2 relative">
            <div className="relative w-full max-w-xl ml-auto">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-red-500/15 via-red-400/5 to-transparent blur-2xl opacity-70" aria-hidden="true" />
              <div className="relative aspect-[5/6] rounded-[2.5rem] overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] group">
                <img
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.4,.0,.2,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" aria-hidden="true" />
                {/* Badge overlay */}
                <div className="absolute bottom-5 left-5 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-[0.65rem] tracking-[0.25em] uppercase font-semibold text-white/80">Desde 2024</div>
              </div>
            </div>
          </div>
          {/* Contenido principal */}
          <div className="lg:col-span-6 order-1 lg:order-1 max-w-2xl relative">
            <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.03] tracking-tight mb-6 drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
              Pasión, fuego y <span className="text-red-400">cultura</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-5">
              En <span className="text-red-400 font-semibold">SANTO FUEGO</span> honramos el ritual del asado argentino: paciencia, dominio de la brasa y cortes nobles trabajados con respeto. Buscamos equilibrio entre tradición y un servicio actual, creando momentos que trascienden el plato.
            </p>
            <p className="text-sm md:text-base text-white/55 italic mb-9">Una cocina que respira humo, tiempo y respeto por cada corte.</p>
            {/* Stats en grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-12">
              {[{n:'+25',l:'Cortes'}, {n:'+15',l:'Vinos'}, {n:'100%',l:'Leña'}, {n:'+10',l:'Entradas'}].map(s => (
                <div key={s.l} className="group/stat relative">
                  <div className="absolute -inset-2 rounded-xl opacity-0 group-hover/stat:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_60%_50%,rgba(248,113,113,0.22),transparent_70%)]" aria-hidden="true" />
                  <p className="relative text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {s.n}
                  </p>
                  <p className="relative text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.35em] text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
            {/* Features renovadas */}
            <ul className="grid sm:grid-cols-2 gap-5 mb-12">
              {[
                {t:'Origen controlado',d:'Selección de productores y maduración propia.'},
                {t:'Maridajes curados',d:'Carta de vinos pensada para la brasa.'},
                {t:'Ritual completo',d:'Entrada, corte, fuego y sobremesa.'},
                {t:'Experiencia cercana',d:'Atención dedicada y ambiente cálido.'}
              ].map(f => (
                <li key={f.t} className="group relative p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-red-400/40 transition overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(248,113,113,0.25),transparent_70%)]" aria-hidden="true" />
                  <p className="relative font-semibold text-red-300 mb-2 tracking-wide text-sm md:text-base flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-amber-400 shadow-[0_0_4px_rgba(248,113,113,0.55)]" />
                    {f.t}
                  </p>
                  <p className="relative text-[0.8rem] sm:text-sm text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">{f.d}</p>
                </li>
              ))}
            </ul>
            {/* CTAs removidas por redundancia */}
          </div>
        </div>
      </div>
    </section>
  )
}