import React, { useState, useEffect } from 'react'

export default function ReservationForm(){
  const [form, setForm] = useState({name: '', email: '', phone: '', date: '', time: '', people: '', notes:''})
  const [status, setStatus] = useState('idle')
  // Agregar estado para horarios disponibles y min de fecha
  const [availableTimes, setAvailableTimes] = useState([])
  const todayStr = React.useMemo(() => {
    const d = new Date()
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0,10)
  }, [])

  const handleChange = e => setForm(prev => ({...prev, [e.target.name]: e.target.value}))

  // Recalcular horarios al cambiar la fecha
  useEffect(() => {
    if (!form.date) {
      setAvailableTimes([])
      return
    }
    const wd = new Date(`${form.date}T00:00:00`).getDay() // 0=Dom, 1=Lun, ... 6=Sáb
    const pad = n => String(n).padStart(2, '0')
    const build = (fromH, fromM, toH, toM, step = 30) => {
      const start = fromH * 60 + fromM
      const end = toH * 60 + toM
      const out = []
      for (let m = start; m <= end; m += step) {
        const mm = m % 1440 // permite incluir 24:00 como 00:00
        out.push(`${pad(Math.floor(mm / 60))}:${pad(mm % 60)}`)
      }
      return out
    }

    let times = []
    if (wd >= 2 && wd <= 5) {
      // Mar-Vie: 12:00 - 15:00 (último turno 15:00)
      times = build(12, 0, 15, 0)
    } else if (wd === 6) {
      // Sáb: 12:00 - 15:00 y 20:00 - 23:00 (últimos turnos 15:00 y 23:00)
      times = [...build(12, 0, 15, 0), ...build(20, 0, 23, 0)]
    } else if (wd === 0) {
      // Dom: 12:00 - 16:00 (último turno 16:00)
      times = build(12, 0, 16, 0)
    } else {
      // Lun: cerrado
      times = []
    }

    setAvailableTimes(times)
    if (!times.includes(form.time)) {
      setForm(prev => ({ ...prev, time: '' }))
    }
  }, [form.date])

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')

    // Armar mensaje para WhatsApp
    const msg =
      `¡Hola! Quiero reservar una mesa en Santo Fuego.\n` +
      `Nombre: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Teléfono: ${form.phone}\n` +
      `Fecha: ${form.date}\n` +
      `Hora: ${form.time}\n` +
      `Personas: ${form.people}\n` +
      (form.notes ? `Notas: ${form.notes}\n` : '')

    const url = `https://wa.me/541136039118?text=${encodeURIComponent(msg)}`
    const popup = window.open(url, '_blank')

    // Fallback si el popup es bloqueado
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.location.href = url
    }

    // Reset de formulario y estado
    setForm({ name: '', email: '', phone: '', date: '', time: '', people: '', notes: '' })
    setTimeout(() => setStatus('idle'), 500)
  }

  return (
  <section id="reservations" className="relative min-h-screen bg-black text-white flex md:items-center md:justify-center" aria-labelledby="reservation-heading">
      {/* Overlay: resplandores rojos sutiles, acorde al sitio */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(60rem 60rem at 110% -10%, rgba(220,38,38,0.18), transparent 60%), radial-gradient(42rem 42rem at -10% 110%, rgba(220,38,38,0.12), transparent 60%)'
        }}
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-6 w-full py-8 md:py-12 grid lg:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
        <div className="flex flex-col justify-center relative max-w-2xl">
          <h2 id="reservation-heading" className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 md:mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
            <span className="text-red-400">Reservá</span> tu mesa
          </h2>
          <p className="text-white/80 leading-relaxed mb-6 md:mb-7 max-w-2xl text-lg md:text-xl font-light">Garantizá tu lugar y viví la experiencia completa de nuestra parrilla. Reservas para grupos, fechas especiales y celebraciones.</p>
          <ul className="space-y-3 text-sm md:text-base text-white/80">
            {[
              'Confirmación inmediata al enviar el formulario.',
              'Para eventos privados, indicá detalles en notas.',
              'Recomendamos llegar 10 minutos antes.'
            ].map((txt, i) => (
              <li key={i} className="relative pl-5">
                <span className="absolute left-0 top-2 inline-block w-2 h-2 rounded-sm bg-red-500/70 ring-1 ring-red-400/30" />
                {txt}
              </li>
            ))}
          </ul>
          <div className="mt-6 h-px w-full max-w-sm lg:w-48 bg-white/15" aria-hidden="true" />
          <p className="mt-5 text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-white/45 font-medium">Atención personalizada</p>
        </div>
        <form onSubmit={handleSubmit} className="relative p-7 md:p-8 rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/10 shadow-xl max-w-xl w-full" aria-describedby="reservation-status">
          <div className="grid gap-5 md:gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-name" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Nombre</label>
                <input id="res-name" name="name" value={form.name} onChange={handleChange} required placeholder="Nombre completo" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
              </div>
              <div>
                <label htmlFor="res-email" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Email</label>
                <input id="res-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@dominio.com" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-phone" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Teléfono</label>
                <input id="res-phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="Ej: +54 11 ..." className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
              </div>
              <div>
                <label htmlFor="res-people" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Personas</label>
                <input id="res-people" type="number" name="people" min="1" max="30" value={form.people} onChange={handleChange} required placeholder="2" className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-date" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Fecha</label>
                <input id="res-date" type="date" name="date" value={form.date} onChange={handleChange} required min={todayStr} className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
              </div>
              <div>
                <label htmlFor="res-time" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Hora</label>
                {/* Reemplazar input time por un select de horarios válidos */}
                <select
                  id="res-time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  disabled={!form.date || availableTimes.length === 0}
                  className="w-full rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none disabled:opacity-60"
                >
                  <option value="" disabled>
                    {!form.date ? 'Seleccione una fecha' : availableTimes.length === 0 ? 'Cerrado' : 'Seleccione horario'}
                  </option>
                  {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {form.date && availableTimes.length === 0 && (
                  <p className="mt-2 text-xs text-white/60">Cerrado el día seleccionado.</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="res-notes" className="block text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">Notas (opcional)</label>
              <textarea id="res-notes" name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Cumpleaños, alergias, preferencias..." className="w-full resize-none rounded-lg bg-black/40 border border-white/15 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/40 px-4 py-3 text-sm md:text-base outline-none" />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto relative inline-flex justify-center items-center rounded-lg px-8 md:px-9 py-4 text-sm md:text-base font-semibold uppercase tracking-wide bg-accent text-white hover:bg-red-600 ring-1 ring-red-500/40 transition-[box-shadow,background-color,opacity] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 shadow-[0_0_12px_rgba(185,28,28,0.55),0_0_28px_rgba(185,28,28,0.35)] hover:shadow-[0_0_18px_rgba(220,38,38,0.9),0_0_42px_rgba(220,38,38,0.6)] after:content-[''] after:absolute after:inset-0 after:rounded-lg after:-z-10 after:bg-accent hover:after:bg-red-600 after:blur-xl after:opacity-40 hover:after:opacity-60 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? 'Enviando…'
                : 'Reservar ahora'}
            </button>
            <p id="reservation-status" className="h-4 text-xs text-white/60">{status==='sent' && 'Te enviamos confirmación.'}</p>
          </div>
        </form>
      </div>
    </section>
  )
}