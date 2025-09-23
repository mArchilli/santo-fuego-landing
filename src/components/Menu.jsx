import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Menu(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'menu'))
        if (!active) return
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setItems(data)
      } catch (e) {
        setError('No se pudo cargar el menú por el momento.')
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
    return () => { active = false }
  }, [])

  const skeletons = Array.from({length:6})

  return (
    <section id="menu" className="relative py-28 bg-neutral-950 text-white" aria-labelledby="menu-heading">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,199,88,0.05),transparent)] pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="menu-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Nuestro Menú</h2>
          <p className="text-base md:text-lg text-white/70">Selección de cortes y especialidades de la parrilla. Sabores que respetan el origen y el fuego.</p>
        </div>
        {error && <p className="text-center text-red-400 mb-8" role="alert">{error}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && skeletons.map((_,i)=>(
            <div key={i} className="animate-pulse rounded-2xl border border-white/5 bg-white/[0.03] p-4 h-full flex flex-col">
              <div className="rounded-xl bg-white/10 h-48 w-full mb-4"></div>
              <div className="h-5 bg-white/10 rounded w-2/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
              <div className="h-4 bg-white/10 rounded w-5/6 mb-4"></div>
              <div className="mt-auto h-6 bg-white/10 rounded w-24"></div>
            </div>
          ))}
          {!loading && items.length === 0 && (
            <div className="col-span-full text-center text-white/70">
              <p>El menú está en preparación. Mientras tanto, probá nuestras recomendaciones:</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {[
                  {name:'Asado de Tira',img:'/assets/asado.jpg',desc:'Corte clásico jugoso y ahumado.'},
                  {name:'Provoleta a las Brasas',img:'/assets/provoleta.jpg',desc:'Queso fundente, orégano y chimichurri.'},
                  {name:'Vacio Marinado',img:'/assets/vacio.jpg',desc:'Sabor intenso y textura perfecta.'}
                ].map(card => (
                  <div key={card.name} className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden hover:border-gold/50 transition">
                    <div className="relative h-40 overflow-hidden">
                      <img src={card.img} alt={card.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                      <span className="absolute top-2 left-2 bg-black/60 text-xs px-2 py-1 rounded-full border border-white/10">Recomendado</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gold mb-1">{card.name}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {items.map(item => (
            <article key={item.id} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden flex flex-col hover:border-gold/50 transition" itemScope itemType="https://schema.org/MenuItem">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image || '/assets/placeholder.jpg'} alt={item.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" itemProp="image" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" aria-hidden="true"></div>
                {item.highlight && <span className="absolute top-2 left-2 bg-amber-500/90 text-black text-xs font-semibold px-2 py-1 rounded-full">Destacado</span>}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-1 text-gold" itemProp="name">{item.name}</h3>
                <p className="text-sm text-white/70 mb-4 leading-relaxed line-clamp-4" itemProp="description">{item.description}</p>
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/10">
                  <p className="text-base font-bold text-amber-400" itemProp="offers" itemScope itemType="https://schema.org/Offer"><span itemProp="price">{item.price}</span></p>
                  <button className="text-xs uppercase tracking-wide font-semibold bg-accent text-black px-3 py-2 rounded-lg hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition">Detalle</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}