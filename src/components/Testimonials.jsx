import React, { useEffect, useState, useRef } from 'react'

export default function Testimonials(){

  const fallback = [
    { id:'f1', name:'Lucía', text:'La mejor provoleta y atención impecable.', rating:5 },
    { id:'f2', name:'Martín', text:'Carnes perfectas y ambiente cálido.', rating:5 },
    { id:'f3', name:'Soledad', text:'Experiencia completa, volveré pronto.', rating:4 },
    { id:'f4', name:'Liliana', text:'Muy buena atención! Comida excelente!', rating:4 },
    { id:'f5', name:'Daniela', text:'Muy amables y si tenes suerte te visita su gatita preciosa 💖.', rating:5 },
    { id:'f6', name:'Ana Lopez', text:'Un lugar excelente 👌 y muy buena atención…', rating:5 },
  ]

  const list = fallback

  // Config carrusel: dinámico por breakpoint (1 en mobile, 3 en desktop)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [slidePct, setSlidePct] = useState(33.3333) // 100% en mobile, 33.333% en md+
  const [index, setIndex] = useState(3)             // índice sobre track con clones
  const [disableTransition, setDisableTransition] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => {
      const spv = mq.matches ? 3 : 1
      setSlidesPerView(spv)
      setSlidePct(mq.matches ? 33.3333 : 100)
    }
    apply()
    if (mq.addEventListener) mq.addEventListener('change', apply)
    else mq.addListener(apply)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', apply)
      else mq.removeListener(apply)
    }
  }, [])

  // Auto-slide
  const autoRef = useRef(null)
  const startAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (list.length > slidesPerView) {
      autoRef.current = setInterval(() => setIndex(prev => prev + 1), 3000)
    }
  }
  const stopAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null }
  }

  // Init/reset cuando hay datos o cambia el breakpoint
  useEffect(() => {
    if (list.length > slidesPerView) {
      setDisableTransition(true)
      setIndex(slidesPerView)
      const t = setTimeout(() => setDisableTransition(false), 20)
      startAuto()
      return () => { clearTimeout(t); stopAuto() }
    } else {
      stopAuto()
    }
  }, [list.length, slidesPerView])

  // Slides con clones para loop infinito (clona slidesPerView a cada lado)
  const trackSlides = (list.length > slidesPerView)
    ? [...list.slice(-slidesPerView), ...list, ...list.slice(0, slidesPerView)]
    : []

  // Reset al cruzar clones
  const handleTransitionEnd = () => {
    if (list.length <= slidesPerView) return
    const N = list.length
    if (index >= N + slidesPerView) {
      setDisableTransition(true)
      setIndex(slidesPerView)
      setTimeout(() => setDisableTransition(false), 20)
    } else if (index <= slidesPerView - 1) {
      setDisableTransition(true)
      setIndex(N + slidesPerView - 1)
      setTimeout(() => setDisableTransition(false), 20)
    }
  }

  // Swipe táctil/drag (mobile y desktop)
  const containerRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [deltaX, setDeltaX] = useState(0)

  const onPointerDown = e => {
    stopAuto()
    setDragging(true)
    setDisableTransition(true)
    setStartX(e.clientX ?? e.touches?.[0]?.clientX ?? 0)
    setDeltaX(0)
  }
  const onPointerMove = e => {
    if (!dragging) return
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    setDeltaX(x - startX)
  }
  const onPointerUp = () => {
    if (!dragging) return
    const width = containerRef.current?.offsetWidth || 1
    const threshold = width * 0.1
    setDragging(false)
    setDisableTransition(false)
    if (Math.abs(deltaX) > threshold) {
      setIndex(prev => prev + (deltaX < 0 ? 1 : -1))
    }
    setDeltaX(0)
    startAuto()
  }

  return (
  <section id="testimonials" className="relative md:min-h-screen bg-black text-white flex md:items-center md:justify-center" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,88,0.12),transparent_70%)] opacity-40" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 w-full py-8 md:py-14">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block mb-3 text-[0.7rem] tracking-[0.28em] font-semibold uppercase text-red-400/80">Testimonios</span>
          <h2 id="testimonials-heading" className="text-3xl md:text-[2.75rem] font-extrabold leading-tight tracking-tight mb-5">
            Lo que dicen nuestros <span className="text-red-400">clientes</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Opiniones reales de quienes viven la experiencia de nuestra parrilla.
          </p>
        </div>

        {/* Si hay <= slidesPerView: grilla estática */}
        {list.length <= slidesPerView && (
          <div className="grid md:grid-cols-3 gap-8">
            {list.map(r => (
              <figure key={r.id} className="group relative rounded-2xl overflow-hidden bg-neutral-950/70 backdrop-blur-sm border border-white/10 p-7 pt-8 flex flex-col shadow-[0_2px_6px_-2px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.55)] hover:border-red-400/50 transition duration-300" itemScope itemType="https://schema.org/Review">
                <span className="absolute left-0 top-0 h-1.5 w-full bg-red-500" aria-hidden="true" />
                <div className="relative mb-6">
                  <blockquote className="text-sm md:text-base leading-relaxed text-white/80 relative z-10 px-5 py-3" itemProp="reviewBody">
                    <span className="absolute top-0 left-0 -translate-y-1 -translate-x-1 text-red-500/60 text-3xl md:text-4xl leading-none select-none" aria-hidden="true">“</span>
                    {r.text}
                    <span className="absolute bottom-0 right-0 translate-y-1 translate-x-1 text-red-500/60 text-3xl md:text-4xl leading-none select-none" aria-hidden="true">”</span>
                  </blockquote>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <figcaption className="flex items-center gap-2 text-[0.8rem] md:text-sm">
                    <span className="font-semibold text-red-400" itemProp="author">{r.name}</span>
                  </figcaption>
                  <div className="flex items-center gap-1 text-[0.7rem] md:text-sm" aria-label={`Valoración ${r.rating} de 5`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={r.rating} />
                    {Array.from({length:5}).map((_,i)=>(
                      <span key={i} className={`${i < r.rating ? 'text-red-400' : 'text-white/15'}`}>★</span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_70%_20%,rgba(248,113,113,0.18),transparent_65%)]" aria-hidden="true"></div>
              </figure>
            ))}
          </div>
        )}

        {/* Carrusel infinito (mobile 1 card, desktop 3 cards) */}
        {list.length > slidesPerView && (
          <div
            ref={containerRef}
            className={`overflow-hidden md:-mx-4 ${dragging ? 'select-none' : ''}`}
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
          >
            <div
              className={`${disableTransition ? '' : 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'} flex gap-0`}
              style={{
                transform: `translateX(-${
                  (index * slidePct) - (
                    dragging && containerRef.current
                      ? (deltaX / containerRef.current.offsetWidth) * 100
                      : 0
                  )
                }%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {trackSlides.map((r, i) => (
                <div key={`${r.id}-${i}`} className="basis-full md:basis-1/3 shrink-0 px-0 md:px-4">
                  <figure
                    className="group h-full rounded-2xl overflow-hidden bg-neutral-950/70 backdrop-blur-sm border border-white/10 p-7 pt-8 flex flex-col shadow-[0_2px_6px_-2px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.55)] hover:border-red-400/50 transition duration-300"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <span className="absolute left-0 top-0 h-1.5 w-full bg-red-500" aria-hidden="true" />
                    <div className="relative mb-6">
                      <blockquote className="text-sm md:text-base leading-relaxed text-white/80 relative z-10 px-5 py-3" itemProp="reviewBody">
                        <span className="absolute top-0 left-0 -translate-y-1 -translate-x-1 text-red-500/60 text-3xl md:text-4xl leading-none select-none" aria-hidden="true">“</span>
                        {r.text}
                        <span className="absolute bottom-0 right-0 translate-y-1 translate-x-1 text-red-500/60 text-3xl md:text-4xl leading-none select-none" aria-hidden="true">”</span>
                      </blockquote>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                      <figcaption className="flex items-center gap-2 text-[0.8rem] md:text-sm">
                        <span className="font-semibold text-red-400" itemProp="author">{r.name}</span>
                      </figcaption>
                      <div className="flex items-center gap-1 text-[0.7rem] md:text-sm" aria-label={`Valoración ${r.rating} de 5`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={r.rating} />
                        {Array.from({length:5}).map((_,j)=>(
                          <span key={j} className={`${j < r.rating ? 'text-red-400' : 'text-white/15'}`}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_70%_20%,rgba(248,113,113,0.18),transparent_65%)]" aria-hidden="true"></div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}