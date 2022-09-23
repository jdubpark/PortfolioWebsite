import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import {
  // FcCandleSticks, FcDocument, FcGenealogy, FcReading, FcCurrencyExchange, FcMultipleDevices,
  FcGlobe, FcAddressBook, FcOrganization, FcGraduationCap, FcDownRight,
  FcMindMap, FcElectronics, FcCurrencyExchange, FcAbout,
} from 'react-icons/fc'
import { useInView } from 'react-intersection-observer'
import { SocialIcon } from 'react-social-icons'

import indexRightEmoji from '../assets/3d/index-right.png'
import ghostEmoji from '../assets/3d/ghost.png'
import sunglassSmileEmoji from '../assets/3d/sunglass-smile.png'
import cartoonPortrait from '../assets/images/cartoon-portrait.png'
import vaxxedDoggo652 from '../assets/images/vaxxed-doggo-652.png'
import gradientWaveBg from '../assets/video/gradient-wave.mp4'
import { LINKS } from '../constants'
import Container from '../components/Container'
import CardInterest from '../components/Card/Interest'
import Pill from '../components/Pill'
import CardParticular from '../components/Card/Particular'

function LazyAnimation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  return (
    <motion.div ref={ref} className={clsx('text-6xl opacity-0 animate-wiggle-slow transition', inView && 'opacity-100')}>
      <span aria-label="Wave">👋</span>
    </motion.div>
  )
}

function HomeHero() {
  return (
    <>
      <div id="home-hero" className="h-screen w-screen bg-alt-blue shadow-xl">
        <video autoPlay loop muted className="absolute inset-0 h-screen w-screen max-w-6xl m-auto z-10">
          <source src={gradientWaveBg} type="video/mp4" />
        </video>
        <div className="relative h-full -top-8 flex flex-col justify-center space-y-4 text-center z-30 select-none">
          <div className="opacity-95">
            <img src={cartoonPortrait} alt="Cartoon portrait" className="h-32 sm:h-40 md:h-56 m-auto" />
          </div>
          <div className="pt-4 text-2xl sm:text-3xl md:text-5xl text-transparent text-white font-extrabold whitespace-nowrap">
            Jongwon Park
          </div>
          <div className="text-illini-orange text-xl font-semibold">
            UIUC CS &apos;24
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-[99999]">
        <div className="text-white">
          Blockchain, Derivatives, DeFi, and NLP
        </div>
      </div>
    </>
  )
}

function LightSocialCards({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 bg-gray-100 rounded-xl overflow-hidden">
      {children}
    </div>
  )
}

function LightSocialCard({ logo: Logo, header, content }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 md:items-center p-3 md:py-4 md:px-5 hover:bg-gray-200">
      <Logo size="28" />
      <div>
        <div className="text-sm text-gray-400 leading-none">{header}</div>
        <div className="pt-1 md:pt-0">{content}</div>
      </div>
    </div>
  )
}

function LightResumeItems({ children }) {
  return (
    <div className="w-full md:w-auto bg-white py-4 px-6 shadow-2xl rounded-2xl">
      {
        // <div className="flex flex-col items-end justify-center">
        //   <h2 className="pb-1 text-illini-blue font-bold leading-tight">
        //     Domain
        //     <br/>
        //     <span>Resumes</span>
        //   </h2>
        //   <FcDownRight size="40"/>
        // </div>
      }
      <div className="flex flex-row flex-wrap md:flex-nowrap space-x-4 space-y-4 md:space-y-0 py-2 md:py-0">
        <div className="flex flex-col items-center justify-center w-full md:w-auto pr-2">
          <h2 className="md:max-w-[80px] pb-1 text-illini-blue font-bold leading-tight md:whitespace-wrap">
            Domain Resumes
          </h2>
          <div className="hidden md:inline">
            <FcDownRight size="40" />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

function LightResumeItem({ logo: Logo, name, link }) {
  return (
    <div className="w:1/2 md:w-auto">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-4 w-32 bg-gray-100 hover:bg-gray-200 text-center rounded-xl transition"
      >
        <div className="flex flex-col space-y-2 items-center">
          <Logo size="36" />
          <h3 className="font-semibold">{name}</h3>
        </div>
      </a>
    </div>
  )
}

function LightAboutMeSection() {
  return (
    <div className="w-full bg-white py-6 px-6 md:px-8 shadow-2xl rounded-2xl">
      <div className="flex space-x-2 items-center">
        <FcAbout size={32} />
        <h2 className="text-lg font-semibold">About me!</h2>
      </div>
      <div className="flex flex-col space-y-4 mt-4 py-2 md:py-3 px-3 md:px-4 bg-gray-50 rounded md:rounded-lg text-sm">
        <p>
          I&apos;m a highly motivated student & learner, actively developing in the blockchain ecosystem. I&apos;ve spent the last two years developing on-chain dApps in Solidity and Rust. With my extensive TypeScript/React background of four years, I&apos; comfortable writing Web3 applications.
        </p>
        <p>
          Within blockchain, I extensively research in DeFi and build prop trading tools around it for a trading firm I work at. I&apos;m also diving into MEV, actively writing tools for JIT liquidity and other less-invasive actions. I&apos;ve recently got into the block building world of Ethereum 2.0.
        </p>
        <p>
          I&apos;m also an avid math-er, focusing on derivatives and quantitative analysis of MM and lending/hedging markets.
        </p>
        <p>
          Though I started out as an NLP enthusiast, I&apos;ve now pivoted to combine NLP with blockchain to develop advanced tools around cross-chain DeFi.
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <section id="after-hero" className="relative py-12 bg-gray-100">
        {
          // <video autoPlay loop muted className="absolute inset-0 -top-12 h-full w-screen z-10">
          //   <source src={clayEmitterBg} type="video/mp4" />
          // </video>
        }
        <Container className="grid grid-cols-1 md:grid-cols-3 md:gap-14">
          <section className="flex flex-col items-center">
            <div className="relative w-36 md:w-48 rounded-2xl shadow-lg overflow-hidden z-10">
              <img src={vaxxedDoggo652} alt="Vaxxed Doggo 652" className="w-full h-auto" />
            </div>
            <div className="w-full p-6 pt-32 bg-white -translate-y-24 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col space-y-4">
                <h2 className="font-bold text-2xl text-center">Jongwon Park</h2>
                <div className="flex space-x-2 justify-center">
                  <SocialIcon url={LINKS.twitter} style={{ height: 35, width: 35, cursor: 'pointer' }} />
                  <SocialIcon url={LINKS.linkedin} style={{ height: 35, width: 35, cursor: 'pointer' }} />
                  <SocialIcon url={LINKS.github} style={{ height: 35, width: 35, cursor: 'pointer' }} />
                </div>
                <LightSocialCards>
                  <LightSocialCard
                    logo={FcGlobe}
                    header="From"
                    content="Seoul, Korea"
                  />
                  <LightSocialCard
                    logo={FcOrganization}
                    header="Location"
                    content="Chicago, IL"
                  />
                  <LightSocialCard
                    logo={FcAddressBook}
                    header="Email"
                    content="contact@{this domain}"
                  />
                  <LightSocialCard
                    logo={FcGraduationCap}
                    header="Currently"
                    content="UIUC CS (2024)"
                  />
                </LightSocialCards>
              </div>
            </div>
          </section>
          <section className="col-span-2 flex flex-col items-end space-y-8">
            <LightResumeItems>
              <LightResumeItem
                logo={FcMindMap}
                name="Blockchain"
                link="/Resume_Blockchain.pdf"
              />
              <LightResumeItem
                logo={FcCurrencyExchange}
                name="Fund"
                link="/Resume_Fund.pdf"
              />
              <LightResumeItem
                logo={FcElectronics}
                name="SWE"
                link="/Resume_SWE.pdf"
              />
            </LightResumeItems>
            <LightAboutMeSection />
          </section>
        </Container>
      </section>
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
