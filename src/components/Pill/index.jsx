import clsx from 'clsx'
import React from 'react'

export default function Pill({
  bgColor = 'blue-600', className = '', color = 'white', text,
}) {
  return (
    <span
      className={clsx('px-2 font-semibold rounded-full', `text-${color}`, `bg-${bgColor}`, className)}
    >
      {text}
    </span>
  )
}
