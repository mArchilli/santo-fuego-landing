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
    <footer className="relative bg-neutral-950 text-white pt-16 pb-10 border-t border-white/10" role="contentinfo">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-semibold tracking-wide text-gold mb-4">Santo Fuego</h3>
          <p className="text-sm text-white/70 leading-relaxed">Parrilla argentina contemporánea. Fuego, materia prima seleccionada y hospitalidad.</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-white/70 mb-3">Secciones</h4>
          <ul className="space-y-2 text-sm">
            {['Inicio','Menú','Nosotros','Testimonios','Contacto','Reservas'].map(label => (
              <li key={label}><a href={`#${label.toLowerCase()==='inicio'?'hero':label.toLowerCase()}`} className="hover:text-gold transition">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-white/70 mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Av. Corrientes 1234, Buenos Aires</li>
            <li><a href="tel:+541155555555" className="hover:text-gold">+54 11 5555-5555</a></li>
            <li><a href="mailto:info@santofuego.com" className="hover:text-gold">info@santofuego.com</a></li>
            <li>Lun - Dom 12:00 a 00:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm tracking-wide uppercase text-white/70 mb-3">Seguinos</h4>
          <div className="flex gap-4">
            {[
              {label:'Facebook',href:'#',icon:'𝔽'},
              {label:'Instagram',href:'#',icon:'ⓘ'},
              {label:'Twitter',href:'#',icon:'𝕏'}
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition">{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © {year} Santo Fuego — Todos los derechos reservados.
      </div>
    </footer>
  )
}