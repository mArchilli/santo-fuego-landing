import React from 'react'
import clsx from 'clsx'

// Componente contenedor estilizado para bloques de información
export function Card({ as:Tag='div', className='', children, ...rest }) {
  return (
    <Tag
      className={clsx(
        'relative rounded-xl md:rounded-2xl border border-white/10 bg-black',
        'transition-colors',
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
