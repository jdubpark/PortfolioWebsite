import {
	FcAddressBook, FcBriefcase, FcWikipedia, FcCollect, FcGlobe, FcGraduationCap
} from 'react-icons/fc'

const profileShorts: AboutShortProfileProps[] = [
  { logo: FcGlobe, header: 'From', content: 'Seoul, Korea' },
  { logo: FcAddressBook, header: 'Email', content: 'contact@{this domain}' },
  { logo: FcBriefcase, header: 'Summer 23', content: 'Solana Labs' },
  { logo: FcCollect, header: 'Around', content: 'Chicago, IL' },
  { logo: FcGraduationCap, header: 'Studying', content: 'UIUC CS (2024)' },
  // { logo: FcCalendar, header: 'Next up', content: 'ETH Denver' },
  { logo: FcWikipedia, header: 'Click for my', content: 'Resume', linked: 'https://parkjongwon.com/Resume_Blockchain.pdf' }
]

const shortWords: AboutShortWordsProps[] = [
	{
		title: 'Intro',
		content: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		],
		// My first code was written in a elementary school class on my old, loud HP laptop. Fascinated by the basic HTML website flashing my name (http://localhost:3000) and enchanted by the speed of finger-to-screen reflection, I continued to code day and night.
	},
	{
		title: 'Interests',
		content: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		],
	},
]

// <p>
// 	I&apos;m a highly motivated student & learner, actively developing in the blockchain ecosystem. I&apos;ve spent the last two years developing on-chain dApps in Solidity and Rust. With my extensive TypeScript/React background of four years, I&apos; comfortable writing Web3 applications.
// </p>
// <p>
// 	Within blockchain, I extensively research in DeFi and build prop trading tools around it for a trading firm I work at. I&apos;m also diving into MEV, actively writing tools for JIT liquidity and other less-invasive actions. I&apos;ve recently got into the block building world of Ethereum 2.0.
// </p>
// <p>
// 	I&apos;m also an avid math-er, focusing on derivatives and quantitative analysis of MM and lending/hedging markets.
// </p>
// <p>
// 	Though I started out as an NLP enthusiast, I&apos;ve now pivoted to combine NLP with blockchain to develop advanced tools around cross-chain DeFi.
// </p>

export default {
	profileShorts,
	shortWords,
}