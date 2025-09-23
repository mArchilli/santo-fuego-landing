import React, { useEffect, useState } from 'react'
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
    { id:'f3', name:'Soledad', text:'Experiencia completa, volveré pronto.', rating:4 }
  ]

  const list = reviews.length ? reviews : (!loading ? fallback : [])

  return (
    <section id="testimonials" className="relative py-28 bg-black text-white" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,88,0.12),transparent_70%)] opacity-40" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-white/70 text-lg">Opiniones reales de quienes viven la experiencia de nuestra parrilla.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {loading && Array.from({length:3}).map((_,i)=>(
            <div key={i} className="animate-pulse rounded-2xl bg-white/[0.05] border border-white/10 p-6 h-56 flex flex-col">
              <div className="h-4 w-2/3 bg-white/10 rounded mb-4"></div>
              <div className="h-3 w-full bg-white/10 rounded mb-2"></div>
              <div className="h-3 w-5/6 bg-white/10 rounded mb-2"></div>
              <div className="h-3 w-4/6 bg-white/10 rounded mb-4"></div>
              <div className="h-4 w-24 bg-white/10 rounded mt-auto"></div>
            </div>
          ))}
          {!loading && list.map(r => (
            <figure key={r.id} className="relative rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,199,88,0.4)] transition" itemScope itemType="https://schema.org/Review">
              <blockquote className="text-sm md:text-base italic leading-relaxed text-white/85 mb-6" itemProp="reviewBody">“{r.text}”</blockquote>
              <figcaption className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gold" itemProp="author">{r.name}</span>
                </div>
                <div className="flex items-center gap-1" aria-label={`Valoración ${r.rating} de 5`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={r.rating} />
                  {Array.from({length:5}).map((_,i)=>(
                    <span key={i} className={`text-sm ${i < r.rating ? 'text-amber-400' : 'text-white/20'}`}>★</span>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}