import React from 'react'
import clsx from 'clsx'

// Componente contenedor estilizado para bloques de información
export function Card({ as:Tag='div', className='', children, ...rest }) {
  return (
    <Tag
      className={clsx(
        'relative rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(248,113,113,0.35)] transition-colors',
        'p-5 md:p-6',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function CardContent({ className='', children }) {
  return (
    <div className={clsx('flex flex-col gap-3 text-sm leading-relaxed', className)}>
      {children}
    </div>
  )
}
