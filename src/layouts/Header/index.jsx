import clsx from 'clsx'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderItems({ children }) {
  return (
    <section className="flex items-center lowercase">
      {children}
    </section>
  )
}

function HeaderItem({ to, name }) {
  return (
    <Link to={to} className="py-2 px-3 transition hover:bg-alt-blue hover:text-white">
      {name}
    </Link>
  )
}

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    gsap.to('#top-nav', {
      scrollTrigger: {
        trigger: '#home-hero',
        start: 'top top',
        // end: 'bottom 80px',
        end: 'bottom',
        // onEnter: () => setIsPastHero(true),
        onEnterBack: () => setIsPastHero(false),
        onLeave: () => setIsPastHero(true),
        // onLeaveBack: () => setIsPastHero(false),
      },
    })
  }, [])

  return (
    <nav
      id="top-nav"
      className={clsx(
        'fixed top-0 left-1/2 -translate-x-1/2 translate-y-5 backdrop-filter backdrop-blur-3xl border rounded-2xl overflow-hidden z-[99999]',
        isPastHero
          ? 'text-blue-600 bg-white/30 border-alt-blue/20'
          : 'text-white bg-blue-600/10 border-alt-blue/50',
      )}
    >
      <HeaderItems>
        <HeaderItem to="/about" name="About" />
        <HeaderItem to="/work" name="Work" />
        <HeaderItem to="/projects" name="Projects" />
        <HeaderItem to="/contact" name="Contact" />
      </HeaderItems>
    </nav>
  )
}
