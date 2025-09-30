import React, { useEffect, useState, useRef } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Testimonials(){
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'))
        if (!active) return
        setReviews(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
    return () => { active = false }
  }, [])

  const fallback = [
    { id:'f1', name:'Lucía', text:'La mejor provoleta y atención impecable.', rating:5 },
    { id:'f2', name:'Martín', text:'Carnes perfectas y ambiente cálido.', rating:5 },
    { id:'f3', name:'Soledad', text:'Experiencia completa, volveré pronto.', rating:4 },
    { id:'f4', name:'Liliana Kocmann', text:'Muy buena atención! Comida excelente!', rating:4 },
    { id:'f5', name:'Daniela', text:'Muy amables y si tenes suerte te visita su gatita preciosa 💖.', rating:5 },
    { id:'f6', name:'Ana Lopez', text:'Un lugar excelente 👌 y muy buena atención…', rating:5 },
  ]

  const list = reviews.length ? reviews : (!loading ? fallback : [])

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
    if (!loading && list.length > slidesPerView) {
      setDisableTransition(true)
      setIndex(slidesPerView)
      const t = setTimeout(() => setDisableTransition(false), 20)
      startAuto()
      return () => { clearTimeout(t); stopAuto() }
    }
  }, [loading, list.length, slidesPerView])

  // Slides con clones para loop infinito (clona slidesPerView a cada lado)
  const trackSlides = (!loading && list.length > slidesPerView)
    ? [...list.slice(-slidesPerView), ...list, ...list.slice(0, slidesPerView)]
    : []

  // Reset al cruzar clones
  const handleTransitionEnd = () => {
    if (loading || list.length <= slidesPerView) return
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
    <section id="testimonials" className="relative py-28 bg-black text-white" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,88,0.12),transparent_70%)] opacity-40" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-white/70 text-lg">Opiniones reales de quienes viven la experiencia de nuestra parrilla.</p>
        </div>

        {/* Skeletons */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({length:3}).map((_,i)=>(
              <div key={i} className="animate-pulse rounded-2xl bg-white/[0.05] border border-white/10 p-6 h-56 flex flex-col">
                <div className="h-4 w-2/3 bg-white/10 rounded mb-4"></div>
                <div className="h-3 w-full bg-white/10 rounded mb-2"></div>
                <div className="h-3 w-5/6 bg-white/10 rounded mb-2"></div>
                <div className="h-3 w-4/6 bg-white/10 rounded mb-4"></div>
                <div className="h-4 w-24 bg-white/10 rounded mt-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* Si hay <= slidesPerView: grilla estática */}
        {!loading && list.length <= slidesPerView && (
          <div className="grid md:grid-cols-3 gap-8">
            {list.map(r => (
              <figure key={r.id} className="relative rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,199,88,0.4)] transition" itemScope itemType="https://schema.org/Review">
                <blockquote className="text-sm md:text-base italic leading-relaxed text-white/85 mb-6" itemProp="reviewBody">“{r.text}”</blockquote>
                <figcaption className="mt-auto flex items-center justify-between">
                  <span className="font-semibold text-red-400" itemProp="author">{r.name}</span>
                  <div className="flex items-center gap-1" aria-label={`Valoración ${r.rating} de 5`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={r.rating} />
                    {Array.from({length:5}).map((_,i)=>(
                      <span key={i} className={`text-sm ${i < r.rating ? 'text-red-400' : 'text-white/20'}`}>★</span>
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Carrusel infinito (mobile 1 card, desktop 3 cards) */}
        {!loading && list.length > slidesPerView && (
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
                    className="h-full rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,199,88,0.4)]"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <blockquote className="text-sm md:text-base italic leading-relaxed text-white/85 mb-6" itemProp="reviewBody">“{r.text}”</blockquote>
                    <figcaption className="mt-auto flex items-center justify-between">
                      <span className="font-semibold text-red-400" itemProp="author">{r.name}</span>
                      <div className="flex items-center gap-1" aria-label={`Valoración ${r.rating} de 5`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={r.rating} />
                        {Array.from({length:5}).map((_,j)=>(
                          <span key={j} className={`text-sm ${j < r.rating ? 'text-red-400' : 'text-white/20'}`}>★</span>
                        ))}
                      </div>
                    </figcaption>
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