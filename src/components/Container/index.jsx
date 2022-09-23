import clsx from 'clsx'
import React from 'react'

export default function Container({
  children, className = '', id = '',
}) {
  return (
    <div id={id} className={clsx('p-5 max-w-6xl m-auto', className)}>
      {children}
    </div>
  )
}
