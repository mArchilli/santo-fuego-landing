import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Fondo decorativo sutil para coherencia visual */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.06),transparent_60%)] opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center rounded-3xl ring-1 ring-white/10 bg-black/30 backdrop-blur-sm p-8 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Texto a la izquierda */}
          <div className="md:col-span-7">
            <div className="mb-2 md:mb-3">
              <span className="block text-[72px] sm:text-8xl md:text-9xl xl:text-[10rem] font-extrabold tracking-tight leading-none text-red-600 drop-shadow-[0_10px_30px_rgba(220,38,38,0.35)]">
                404
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-red-600 font-semibold max-w-2xl leading-relaxed mb-1">
              ¡Ups!
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              Página no encontrada
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mb-8 md:mb-10 leading-relaxed">
              La parrilla no está acá: la página que buscás no existe. Volvé al inicio para seguir explorando Santo Fuego.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold uppercase tracking-wide bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 shadow-[0_12px_32px_-10px_rgba(220,38,38,0.55)]"
                aria-label="Volver al inicio"
              >
                Volver al inicio
              </Link>
            </div>
          </div>

          {/* Ilustración a la derecha: fogata apagada con humo */}
          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-[460px] aspect-[4/3]">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <radialGradient id="ember" cx="50%" cy="60%" r="40%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Suelo */}
                <ellipse cx="200" cy="220" rx="150" ry="28" fill="#0b0b0b" opacity="0.9" />
                <ellipse cx="200" cy="220" rx="140" ry="22" fill="#111827" opacity="0.65" />

                {/* Brillo tenue de brasas apagadas */}
                <ellipse cx="200" cy="210" rx="60" ry="40" fill="url(#ember)" />

                {/* Leños cruzados */}
                <g transform="translate(200 205)">
                  <g transform="rotate(-18)">
                    <rect x="-105" y="-15" width="210" height="30" rx="12" fill="#92400e" />
                    <circle cx="-95" cy="0" r="7" fill="#78350f" />
                    <circle cx="95" cy="0" r="7" fill="#78350f" />
                  </g>
                  <g transform="rotate(32)">
                    <rect x="-95" y="-14" width="190" height="28" rx="12" fill="#b45309" />
                    <circle cx="-85" cy="0" r="6" fill="#92400e" />
                    <circle cx="85" cy="0" r="6" fill="#92400e" />
                  </g>
                </g>

                {/* Cenizas */}
                <g opacity="0.7">
                  <ellipse cx="175" cy="218" rx="14" ry="5" fill="#6b7280" />
                  <ellipse cx="225" cy="222" rx="10" ry="4" fill="#6b7280" opacity="0.8" />
                  <ellipse cx="205" cy="228" rx="8" ry="3" fill="#9ca3af" opacity="0.6" />
                </g>

                {/* Humo (líneas suaves) */}
                <g className="animate-pulse">
                  <path d="M190 150 C180 130, 180 110, 195 95" stroke="#d1d5db" strokeWidth="3" fill="none" strokeOpacity="0.6" />
                  <path d="M210 160 C220 140, 220 120, 205 100" stroke="#e5e7eb" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
                  <path d="M200 170 C190 150, 195 135, 200 120" stroke="#cfd4dc" strokeWidth="2" fill="none" strokeOpacity="0.45" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
