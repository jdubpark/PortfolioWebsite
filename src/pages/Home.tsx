import Box from '@mui/material/Box'
import React from 'react'

import HomeAbout from '../layouts/Home/About'
import HomeHero from '../layouts/Home/Hero'
import HomeProjects from '../layouts/Home/Projects'
import HomeWork from '../layouts/Home/Work'

function HomeMainContent({ children }: { children: React.ReactNode[] }) {
  return (
    <Box
      width="100vw"
      maxWidth="100vw"
      sx={{
        paddingY: { xs: 8, md: 12 },
        overflowX: 'hidden',
      }}
    >
      {children}
    </Box>
  )
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeMainContent>
        <HomeAbout />
        <HomeWork />
        <HomeProjects />
      </HomeMainContent>
      {
      //   <div
      //     className="py-16"
      //     style={{
      //       background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 85, 46, 0.15), rgba(255, 85, 46, 0.03) 100%)',
      //     }}
      //   >
      //     <Container>
      //       <div className="pb-8 text-lg text-center">
      //         In particular, I&apos;m interested in
      //         {' '}
      //         <Pill bgColor="illini-orange" text="blockchain" />
      //         {' '}
      //         and
      //         {' '}
      //         <Pill bgColor="green-600" text="DeFi" />
      //       </div>
      //       <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
      //         <CardParticular title="Expanding the ecosystem." iconImage={sunglassSmileEmoji}>
      //           I use
      //           {' '}
      //           <b>Solidity</b>
      //           {' '}
      //           to build on EVM-compatible blockchains and
      //           {' '}
      //           <b>Rust</b>
      //           {' '}
      //           on Solana and Terra. I also pride in my
      //           {' '}
      //           <b>Javascript</b>
      //           {' '}
      //           and
      //           {' '}
      //           <b>React.js</b>
      //           {' '}
      //           skill for Web3.
      //         </CardParticular>
      //         <CardParticular title="Understanding the quirky math." iconImage={ghostEmoji}>
      //           I enjoy grasping the
      //           {' '}
      //           <b>fundamentals</b>
      //           {' '}
      //           of
      //           {' '}
      //           <b>advanced</b>
      //           {' '}
      //           blockchain technologies, such as zkEVM/zk-Rollup, parallel PoH, and many whitepapers (e.g. Ethereum).
      //         </CardParticular>
      //         <CardParticular title="Leveraging the untapped fields." iconImage={indexRightEmoji}>
      //           I explore untapped
      //           {' '}
      //           <b>on-chain markets</b>
      //           {' '}
      //           and inefficiency in
      //           {' '}
      //           <b>cross-exchange settings</b>
      //           {' '}
      //           to maximize both monetary and programmatic efficiency.
      //         </CardParticular>
      //       </div>
      //     </Container>
      //   </div>
      //   <div className="py-12">
      //   <Container>
      //   <div className="pb-8 text-lg text-center">
      //   I also do other stuff. Here are my
      // {' '}
      //   <b>Projects</b>
      //   </div>
      //   <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
      //   sdfsdf
      //   </div>
      //   </Container>
      //   </div>
      }
    </>
  )
}
