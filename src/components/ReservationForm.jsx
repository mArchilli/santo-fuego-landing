import React, { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function ReservationForm(){
  const [form, setForm] = useState({name: '', email: '', phone: '', date: '', time: '', people: '', notes:''})
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(prev => ({...prev, [e.target.name]: e.target.value}))

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setStatus('sending')
      await addDoc(collection(db, 'reservations'), {...form, createdAt: serverTimestamp()})
      setStatus('sent')
      setForm({name:'',email:'',phone:'',date:'',time:'',people:'',notes:''})
    } catch (e) {
      setStatus('error')
    } finally {
      setTimeout(()=> setStatus('idle'), 5000)
    }
  }

  return (
    <section id="reservations" className="relative py-28 bg-neutral-900 text-white" aria-labelledby="reservation-heading">
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,199,88,0.05),transparent)] opacity-70" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 id="reservation-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Reservá tu mesa</h2>
          <p className="text-white/75 leading-relaxed mb-6">Garantizá tu lugar y viví la experiencia completa de nuestra parrilla. Reservas para grupos, fechas especiales y celebraciones.</p>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex gap-3"><span className="text-gold">•</span> Confirmación inmediata al enviar el formulario.</li>
            <li className="flex gap-3"><span className="text-gold">•</span> Para eventos privados, indicá detalles en notas.</li>
            <li className="flex gap-3"><span className="text-gold">•</span> Recomendamos llegar 10 minutos antes.</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="relative p-8 rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/10 shadow-xl" aria-describedby="reservation-status">
          <div className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="res-name" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Nombre</label>
                <input id="res-name" name="name" value={form.name} onChange={handleChange} required placeholder="Nombre completo" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
              <div>
                <label htmlFor="res-email" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Email</label>
                <input id="res-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@dominio.com" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="res-phone" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Teléfono</label>
                <input id="res-phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="Ej: +54 11 ..." className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
              <div>
                <label htmlFor="res-people" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Personas</label>
                <input id="res-people" type="number" name="people" min="1" max="30" value={form.people} onChange={handleChange} required placeholder="2" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Fecha</label>
                <input id="res-date" type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
              <div>
                <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Hora</label>
                <input id="res-time" type="time" name="time" value={form.time} onChange={handleChange} required className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="res-notes" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Notas (opcional)</label>
              <textarea id="res-notes" name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Cumpleaños, alergias, preferencias..." className="w-full resize-none rounded-lg bg-black/40 border border-white/15 focus:border-gold/60 focus:ring-2 focus:ring-gold/40 px-4 py-3 text-sm outline-none" />
            </div>
            <button type="submit" disabled={status==='sending'} className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-accent to-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-xl px-6 py-3 shadow hover:from-amber-400 hover:to-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">
              {status==='sending' ? 'Enviando…' : status==='sent' ? 'Reserva Confirmada ✔' : status==='error' ? 'Error, reintentar' : 'Reservar ahora'}
            </button>
            <p id="reservation-status" className="h-4 text-xs text-white/60">{status==='sent' && 'Te enviamos confirmación.'}</p>
          </div>
        </form>
      </div>
    </section>
  )
}