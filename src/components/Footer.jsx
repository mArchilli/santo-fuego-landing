import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Footer(){
  const year = new Date().getFullYear()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Santo Fuego",
    "image": "/assets/asado.jpg",
    "servesCuisine": "Parrilla Argentina",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Corrientes 1234",
      "addressLocality": "Buenos Aires",
      "addressCountry": "AR"
    },
    "openingHoursSpecification": [{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"12:00","closes":"00:00"}],
    "telephone": "+54 11 5555-5555",
    "url": "https://santofuego.example.com"
  }

  return (
    <footer className="relative bg-black text-white pt-16 pb-10 border-t border-white/10" role="contentinfo">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-semibold tracking-wide text-red-500 mb-4">SANTO FUEGO</h3>
          <p className="text-sm text-white/70 leading-relaxed">Parrilla argentina contemporánea. Fuego, materia prima seleccionada y hospitalidad.</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-red-500 mb-3">Secciones</h4>
          <ul className="space-y-2 text-sm">
            {['Inicio','Menú','Nosotros','Testimonios','Contacto','Reservas'].map(label => (
              <li key={label}><a href={`#${label.toLowerCase()==='inicio'?'hero':label.toLowerCase()}`} className="hover:text-red-400 transition">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-red-500 mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Bruselas 23, esq. Colectora Sur Acceso Oeste, Ituzaingó Buenos Aires</li>
            <li><p className="hover:text-red-400">+54 11 3603 - 9118</p></li>
            <li>Mar - Jue: 12:00 a 16:00</li>
            <li>Vier - Sab: 12:00 a 16:00 || 20:00 - 00:00</li>
            <li>Dom: 12:00 - 17:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-red-500 mb-3">Seguinos</h4>
          <div className="flex gap-4">
            { [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/santofuego.arg/',
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" fill="currentColor">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM18 6.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                ),
              },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:border-red-400 hover:text-red-400 transition">
                {s.icon}
              </a>
            )) }
          </div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © {year} Santo Fuego — Todos los derechos reservados.
        <br />Desarrollado por <a target="_blank" href="https://archillimatias.dev/" className='text-red-500 hover:text-red-400'>Archilli Matias</a> y <a target="_blank" href="https://comollileon.dev/" className='text-red-500 hover:text-red-400'>Comolli Leon</a>
      </div>
    </footer>
  )
}