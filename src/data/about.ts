import {
	FcAddressBook, FcBriefcase, FcWikipedia, FcCollect, FcGlobe, FcGraduationCap
} from 'react-icons/fc'

const profileShorts: AboutShortProfileProps[] = [
  { logo: FcGlobe, header: 'From', content: 'Seoul, Korea' },
  { logo: FcAddressBook, header: 'Email', content: 'contact@{domain}' },
  { logo: FcBriefcase, header: 'Summer 23', content: 'Solana Labs' },
  { logo: FcCollect, header: 'Around', content: 'Chicago, IL' },
  { logo: FcGraduationCap, header: 'Studying', content: 'UIUC CS (2024)' },
  // { logo: FcCalendar, header: 'Next up', content: 'ETH Denver' },
  { logo: FcWikipedia, header: 'Click for my', content: 'Resume', linked: 'https://resume.parkjongwon.com' }
]

const shortWords: AboutShortWordsProps[] = [
	{
		title: 'Preface',
		content: [
			'The Man in the (Crypto.com) Arena',
			'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows the great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.',
			'- Theodore Roosevelt, 1910',
		],
		// My first code was written in a elementary school class on my old, loud HP laptop. Fascinated by the basic HTML website flashing my name (http://localhost:3000) and enchanted by the speed of finger-to-screen reflection, I continued to code day and night.
	},
	{
		title: 'Intro',
		content: [
			'I\'m a highly motivated student & learner active in the blockchain ecosystem. I\'ve spent the last few years developing on-chain dApps and many more with JavaScript/TypeScript for fullstack dev. I love computer systems.',
			'I first started with PHP 5.4 and XAMPP on a torching hot HP laptop. Of course, I tried to tell everyone about my brand new http://localhost:3000 website!',
		],
		// My first code was written in a elementary school class on my old, loud HP laptop. Fascinated by the basic HTML website flashing my name (http://localhost:3000) and enchanted by the speed of finger-to-screen reflection, I continued to code day and night.
	},
	{
		title: 'Interests',
		content: [
			'I\'m a decentralized system nerd, a bad SIMD optimizor, multi-core fanatic, and an Assembly taster.',
			'Within blockchain, I extensively research in DeFi and its consumer-facing products. I fudge around with AMMs and arbs, explored tools to make LPs less green, and finding inefficiencies in DeFi.',
			'I love fidgeting with Rust and C/C++,',
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
			'I\'ve explored NLP and LLMs, e.g. self-attention, Transformers, and BERT. I drew boxes around many bees to train a bee detecting model — that was fun?',
		],
	},
]

export default {
	profileShorts,
	shortWords,
}