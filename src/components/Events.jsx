import React from 'react'

export default function Events(){
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
          <div className="aspect-[4/3] w-full rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/parrilla-argentina-con-fuego-intenso-y-carnes.jpg')] bg-cover bg-center opacity-90" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
              <p className="text-sm text-white/85">Ambiente ideal para celebraciones</p>
              <span className="inline-flex h-8 px-3 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-xs ring-1 ring-red-400/30">
                Santo Fuego
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
