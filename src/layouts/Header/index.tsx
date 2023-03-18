import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import dataNav from '../../data/nav'

function HeaderItems({ children }) {
  return (
    <section className="flex items-center lowercase">
      {children}
    </section>
  )
}

function HeaderItem({ to, name }: HeaderItemProps) {
  return (
    <a href={to} className="py-2 px-3 transition hover:bg-alt-blue hover:text-white">
      <Typography variant="body1" fontSize={18}>{name}</Typography>
    </a>
  )
}

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    gsap.to('#top-nav', {
      scrollTrigger: {
        trigger: '#hero',
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
    <Box
      id="top-nav"
      position="fixed"
      top={0}
      left="50%"
      borderRadius={4}
      overflow="hidden"
      zIndex={99999}
      sx={{ translate: '-50% 20px' }}
      // do border with classes for conditional border-color
      className={clsx(
        'backdrop-filter backdrop-blur-3xl border',
        isPastHero
          ? 'text-blue-600 bg-blue-600/30 border-alt-blue/20'
          : 'text-white bg-blue-600/10 border-alt-blue/50',
      )}
    >
      <HeaderItems>
        {dataNav.map((navItem) => (<HeaderItem key={navItem.to} to={navItem.to} name={navItem.name} />))}
      </HeaderItems>
    </Box>
  )
}
