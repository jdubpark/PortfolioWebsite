import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import cartoonPortrait from '../../assets/images/cartoon-portrait.png'
import gradientWaveBg from '../../assets/video/gradient-wave.mp4'

export default function HomeHero() {
  return (
    <Box
      id="hero"
      // position="relative"
      height={{ xs: '75vh', md: '95vh' }}
      // width="100vw"
      // maxWidth="100vw"
      // overflow="hidden"
      className="bg-alt-blue shadow-xl"
      borderRadius="0 0 20px 20px"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-screen max-w-6xl m-auto z-10"
      >
        <source src={gradientWaveBg} type="video/mp4" />
      </video>
      <Container className="relative h-full z-20">
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="h-full text-white"
        >
          <Box />
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              width="100%"
              paddingX={2}
            >
              <Box paddingBottom={2} className="opacity-95">
                <img src={cartoonPortrait} alt="Cartoon portrait" className="h-32 sm:h-40 md:h-56 m-auto" />
              </Box>
              <Typography variant="h3" fontWeight={700} className="whitespace-nowrap">Jongwon Park</Typography>
              <Typography
                variant="h5"
                fontWeight={700}
                align="center"
                className="text-illini-orange"
                sx={{ maxWidth: { xs: '16rem', sm: '100%' }, lineHeight: 1.25 }}
              >
                Head of Engineering, Poseidon
              </Typography>
              <Typography variant="body1">UIUC CS &apos;24</Typography>
            </Stack>
          </Box>
          <Box paddingBottom={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              width="100%"
              paddingX={3}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{ width: '100%', maxWidth: { xs: '15rem', sm: '40rem' } }}
              >
                AI data systems, blockchain, distributed systems
              </Typography>
              <Box>
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
