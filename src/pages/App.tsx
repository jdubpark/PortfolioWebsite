import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

import Header from '../layouts/Header'
import Home from './Home'

// use `require` for packages with no typescript support
// eslint-disable-next-line no-undef
// const AnimatedCursor = require('react-animated-cursor')

function App() {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Header />
      <Home />
      {/* <div className="relative z-[999999]">
        <AnimatedCursor
          innerSize={8}
          outerSize={24}
          // color="22, 163, 74" // green-600
          color="37, 99, 235" // blue-600
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.1}
          trailingSpeed={5}
        />
      </div> */}
    </div>
  )
}

export default App
