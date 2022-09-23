import clsx from 'clsx'
import React from 'react'

export default function CardParticular({
  children, className = '', iconImage, title,
}) {
  return (
    <div className="p-3">
      <div className={clsx('py-3 px-5 bg-stone-100 rounded-lg shadow-lg shadow-stone-300/30', className)}>
        <div className="pt-4 pb-6"><img src={iconImage} alt={title} className="max-h-20" /></div>
        <div className="text-illini-orange font-semibold">{title}</div>
        <div className="py-2 text-sm">{children}</div>
      </div>
    </div>
  )
}
