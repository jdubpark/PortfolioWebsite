import {
	FcAddressBook, FcBriefcase, FcWikipedia, FcCommandLine, FcGlobe, FcGraduationCap
} from 'react-icons/fc'

const profileShorts: AboutShortProfileProps[] = [
  { logo: FcGlobe, header: 'From', content: 'Seoul, Korea' },
  { logo: FcAddressBook, header: 'Email', content: 'contact@parkjongwon.com', linked: 'mailto:contact@parkjongwon.com' },
  { logo: FcBriefcase, header: 'Working at', content: 'Poseidon AI' },
  { logo: FcGraduationCap, header: 'Graduated', content: 'UIUC CS \'24' },
  // { logo: FcCalendar, header: 'Next up', content: 'ETH Denver' },
  { logo: FcCommandLine, header: 'Check out my', content: 'GitHub', linked: 'https://github.com/jdubpark' },
  { logo: FcWikipedia, header: 'Click for my', content: 'Resume', linked: 'https://resume.parkjongwon.com', highlight: true }
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
			'I lead engineering at Poseidon AI. Before that I built the Story blockchain and spent years on on-chain systems, mostly in TypeScript, Rust, and Solidity. I love computer systems.',
			'I first started with PHP 5.4 and XAMPP on a torching hot HP laptop. Of course, I tried to tell everyone about my brand new http://localhost:3000 website!',
		],
		// My first code was written in a elementary school class on my old, loud HP laptop. Fascinated by the basic HTML website flashing my name (http://localhost:3000) and enchanted by the speed of finger-to-screen reflection, I continued to code day and night.
	},
	{
		title: 'Interests',
		content: [
			'I\'m a decentralized system nerd, a bad SIMD optimizor, multi-core fanatic, and an Assembly taster.',
			'Within blockchain I work on DeFi, cryptography (zero knowledge and MPC), distributed systems, and multi-chain protocols.',
			'I love fidgeting with Rust, C, C++, Go, Solidity, and TypeScript.',
		],
	},
	{
		title: 'Thesis',
		content: [
			'My main crypto thesis for 2023 is alt Layer-1 Multi-chain. I\'m also pondering on ways to minimize major security risks for consumers in blockchain.',
			'I\'m keen on the intersection of AI and blockchain for providing intuitive UI and UX to reduce frictions on onboarding users.'
		],
	},
	{
		title: 'Past',
		content: [
			'I\'ve explored NLP and LLMs, e.g. self-attention, Transformers, and BERT. I drew boxes around many bees to train a bee detecting model — that was fun?',
		],
	},
	{
		title: 'Why Blockchain?',
		content: [
			'Why am I building in blockchain, you might ask?',
			'When I mined crypto in 2017, the uncharted territory of blockchain baffled me. I was fascinated by the creation of decentralized storage of value (money) and the ability to trustlessly rely on a network of computers. I was hooked.',
			'I am, and you are, at the mercy of the government and banks. If a bank closes your account or the government revokes licenses, you are left with nothing.',
			'We own nothing of "our" data. Our tweets are owned by Twitter, our photos by Instagram, and our attention by Youtube. If they decide to ban you, you are left with nothing.',
			'Blockchain is the next paradigm to civilization — "ownership" is a fundmental human right under siege in our current internet system.',
			'I want ownership of my data. So I\'m build it on blockchain.',
		],
	},
]

export default {
	profileShorts,
	shortWords,
}