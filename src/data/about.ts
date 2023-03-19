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
  { logo: FcWikipedia, header: 'Click for my', content: 'Resume', linked: 'https://resume.parkjongwon.com' }
]

const shortWords: AboutShortWordsProps[] = [
	{
		title: 'Intro',
		content: [
			'I\'m a highly motivated student & learner, actively developing in the blockchain ecosystem. I\'ve spent the last two years developing on-chain dApps in Solidity and Rust and many more years on JavaScript/TypeScript for fullstack',
		],
		// My first code was written in a elementary school class on my old, loud HP laptop. Fascinated by the basic HTML website flashing my name (http://localhost:3000) and enchanted by the speed of finger-to-screen reflection, I continued to code day and night.
	},
	{
		title: 'Interests',
		content: [
			'Within blockchain, I extensively research in DeFi and build prop trading tools around it for a trading firm I work at. I\'m also diving into MEV, actively writing tools for JIT liquidity and other less-invasive actions. I\'ve recently got into the block building world of Ethereum 2.0.',
			'I\'m enthralled by the beauty of math; I love to read academic papers on derivatives and quantitative analysis of various mechanisms within DeFi and blockchain.',
		],
	},
	{
		title: 'Thesis',
		content: [
			'My main crypto thesis for 2023 is alt Layer-1 Multi-chain. I\'m also concerned with the security risks of DeFi and fond of formal verification.',
			'I\'m also fond of activities around advanced cryptographic primitives in DeFi. I believe that AI/ML will need to marry with blockchain to provide human-friendly UI/UX to onboard the next billion users.'
		],
	},
	{
		title: 'Past',
		content: [
			'I\'ve extensively explored NLP and LLMs, e.g. self-attention, Transformers, and BERT.',
		],
	},
]

export default {
	profileShorts,
	shortWords,
}