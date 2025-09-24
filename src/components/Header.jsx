import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 backdrop-blur-md bg-black/70 text-white z-50 shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Marca a la izquierda */}
          <span className="text-xl font-extrabold tracking-wide text-white shrink-0 hover:text-red-400 transition">SANTO FUEGO</span>

          {/* Contenedor derecho: nav en desktop, botón en móvil */}
          <div className="flex items-center gap-6">
            <nav aria-label="Menú principal" className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#hero" className="hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded transition">INICIO</a>
              <a href="#menu" className="hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded transition">MENU</a>
              <a href="#about" className="hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded transition">NOSOTROS</a>
              <a href="#testimonials" className="hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded transition">TESTIMONIOS</a>
              <a href="#contact" className="hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded transition">CONTACTO</a>
            </nav>

            <button onClick={() => setOpen(o=>!o)} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60" aria-label="Abrir menú móvil">
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
            <a key={link.href} href={link.href} onClick={()=>setOpen(false)} className={`hover:text-red-400 transition ${link.extra||''}`}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}