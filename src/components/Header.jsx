import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 backdrop-blur-md bg-black/70 text-white z-50 shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group" aria-label="Ir al inicio">
            <img src="/assets/parrilla.jpg" alt="Logo Santo Fuego" className="h-10 w-10 object-cover rounded-full ring-2 ring-gold/40 group-hover:ring-gold transition"/>
            <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">Santo Fuego</span>
          </a>
          <nav aria-label="Menú principal" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#hero" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded transition">Inicio</a>
            <a href="#menu" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded transition">Menú</a>
            <a href="#about" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded transition">Nosotros</a>
            <a href="#testimonials" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded transition">Testimonios</a>
            <a href="#contact" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded transition">Contacto</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#reservations" className="hidden md:inline-block bg-gradient-to-r from-accent to-amber-500 text-black font-semibold px-5 py-2 rounded-xl shadow hover:from-amber-400 hover:to-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">Reservar</a>
            <button onClick={() => setOpen(o=>!o)} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60" aria-label="Abrir menú móvil">
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`md:hidden origin-top overflow-hidden transition-[max-height] duration-500 bg-black/90 border-t border-white/10 ${open ? 'max-h-96' : 'max-h-0'}`}>        
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm" aria-label="Menú móvil">
          {[
            {href:'#hero',label:'Inicio'},
            {href:'#menu',label:'Menú'},
            {href:'#about',label:'Nosotros'},
            {href:'#testimonials',label:'Testimonios'},
            {href:'#contact',label:'Contacto'},
            {href:'#reservations',label:'Reservar ahora',extra:'bg-accent text-black font-semibold mt-2 text-center rounded-lg py-2 hover:bg-amber-400'}
          ].map(link => (
            <a key={link.href} href={link.href} onClick={()=>setOpen(false)} className={`hover:text-gold transition ${link.extra||''}`}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}