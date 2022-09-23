import clsx from 'clsx'
import React from 'react'

export default function CardInterest({
  className = '', title, description, icon: Icon,
}) {
  return (
    <div className={clsx('py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xl hover:shadow-blue-700/30 transition', className)}>
      <div className="flex items-center space-x-3">
        <Icon className="text-2xl" />
        <div className="font-bold">{title}</div>
      </div>
      <div className="pt-2 text-stone-300 text-xs">
        {description}
      </div>
    </div>
  )
}
