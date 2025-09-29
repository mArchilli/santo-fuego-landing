import React from 'react'
import { Card, CardContent } from './ui/Card'

export default function Contact(){
  return (
    <section id="contact" className="relative py-32 bg-neutral-950 text-white" aria-labelledby="contact-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,199,88,0.10),transparent_70%)] opacity-40" aria-hidden="true"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Visitános en <span className="text-gold">Santo Fuego</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">
            Te esperamos en nuestro acogedor restaurante. Vení a vivir la auténtica experiencia
            de la parrilla argentina en un ambiente cálido y familiar.
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Columna de tarjetas informativas */}
          <div className="space-y-6">
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent text-sm ring-1 ring-accent/30">📞</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <ul className="text-white/70 text-sm leading-relaxed space-y-1">
                      <li><a className="hover:text-gold" href="tel:+541136039118">+54 11 3603 - 9118</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent text-sm ring-1 ring-accent/30">✉️</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <ul className="text-white/70 text-sm leading-relaxed space-y-1">
                      <li><a className="hover:text-gold" href="mailto:info@santofuego.com.ar">info@santofuego.com.ar</a></li>
                      <li><a className="hover:text-gold" href="mailto:reservas@santofuego.com.ar">reservas@santofuego.com.ar</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent text-sm ring-1 ring-accent/30">🕒</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Horarios</h3>
                    <ul className="text-white/70 text-sm leading-relaxed space-y-1">
                      <li><span className="text-white">Martes a Viernes:</span> 12:00 - 16:00</li>
                      <li><span className="text-white">Sábado:</span> 12:00 - 16:00 || 20:00 - 00:00</li>
                      <li><span className="text-white">Domingo:</span> 12:00 - 17:00</li>
                    </ul>
                    <p className="mt-2 text-[11px] text-accent/80 italic">*Última orden 30 min antes del cierre</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Mapa */}
          <Card className="h-[460px] flex flex-col">
            <div className="flex-1 relative rounded-lg overflow-hidden bg-black/40 border border-white/5">
              <iframe
                title="Mapa Interactivo Santo Fuego"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8731411394706!2d-58.657330323326214!3d-34.6326459729439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf0047734c07%3A0x47fd275a8af23789!2sParrilla%20Fuego%20Santo!5e0!3m2!1es!2sar!4v1758583882014!5m2!1es!2sar"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="pt-5 text-center">
              <h3 className="font-semibold text-white text-sm tracking-wide">Mapa Interactivo</h3>
              <p className="text-[11px] text-white/60 mt-1">Av. Corrientes 1234, Palermo</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}