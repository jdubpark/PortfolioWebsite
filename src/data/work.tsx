import Stack from '@mui/material/Stack'
// import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

import letHimCookImage from '../assets/images/let-him-cook.jpg'

function VersatileBlocks({ children }: React.PropsWithChildren) {
	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
			width="100%"
			maxWidth={{ md: '700px' }}
		>
			{children}
		</Stack>
	)
}

function BasicTextBlocks({ texts }: { texts: string[] }) {
	return (
		<VersatileBlocks>
			{texts.map((text, idx) => (<Typography key={idx} variant="body1">{text}</Typography>))}
		</VersatileBlocks>
	)
}

const workItems: WorkItemProps[] = [
	{
		company: 'Story Protocol',
		active: true,
		title: 'Protocol Engineer',
		fromTime: 'From Dec \'23',
		toTime: '',
		blocks: (
			<VersatileBlocks>
				<img src={letHimCookImage} alt="Let him cook" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
				<Typography variant="body1">❏ Protocol design & testing</Typography>
				<Typography variant="body1">❏ Rolling my 🐹 brain to ideate</Typography>
				<Typography variant="body1">❏ Exploring the uncharted territory of IP market</Typography>
			</VersatileBlocks>
		),
	},
	{
		company: 'UIUC OpenAI grant',
		title: 'Research Assistant',
		fromTime: '08/2023',
		toTime: '11/2023',
		blocks: <BasicTextBlocks texts={[
			'Democratic Inputs to AI',
			'❏ Designed & developed an DAO + AI system for 200+ people and people of special needs.',
			'❏ Optimize UX for participants to onboard on Optimism L2 (blockchain) and vote with live updates via Snapshot API.',
			'❏ Managed clusters of Nodejs servers & PostgreSQL dbs with Redis cache to lower avg. latency to sub-300ms for live chats with GPT and other users in Asia and North/South America.',
			'❏ Perform live analyses of user interactions with website & patterns to evaluate metrics such as attention spans and UX usability.',
		]} />,
	},
	{
		company: 'Solana Labs',
		title: 'Software Engineer Intern',
		fromTime: '05/2023',
		toTime: '08/2023',
		blocks: <BasicTextBlocks texts={[
			'Team: Product Engineering',
			'❏ Developed a permissionless, unlimited leverage trading platform on Solana. (Implementation of InfinityPools whitepaper with forked Orca Whirlpool).',
			'❏ Contributed to the Solana Explorer.',
			'❏ Studied the Solana ecosystem, especially around DeFi like Orca, Raydium, and Jupiter, and MEV.',
		]} />,
	},
	{
		company: 'Diffuse',
		title: 'Junior Trader',
		fromTime: '05/2022',
		toTime: '02/2023',
		blocks: <BasicTextBlocks texts={[
			'❏ Led the development of a prop trading tool to manage market exposure with on-chain money markets and options & perps on L2s.',
			'❏ Researched and implemented various bespoke strategies to trade on concentrated AMMs and miniminze divergence loss.',
			'❏ Established a rigorous unit-testing & monitoring framework to stress test strategies and track performance.',
			'❏ Spearhead a robust due diligence system to analyze smart contract and protocol risks.',
		]} />,
	},
	{
		company: 'UIUC Disruption Lab',
		title: 'Tech Lead',
		fromTime: '08/2021',
		toTime: '01/2023',
		blocks: <BasicTextBlocks texts={[
			'❏ Spearheaded blockchain development initiatives with Proof-of-Authority Ethereum chain.',
			'❏ Wrote Solidity smart contracts for an NFT marketplace, custom ERC-20 tokens, gasless meta-transaction network, and complex DAOs.',
			'❏ Led a team of six to develop production-ready Web3 dApp using React.js/Redux for internal clients.',
			'❏ Advocated for industry-standard practices inspired by OpenSea, Uniswap, and other DEXs.',
		]} />,
	},
	{
		company: 'OFF Myty',
		title: 'Blockchain Engineer Intern',
		fromTime: '05',
		toTime: '08/2022',
		blocks: <BasicTextBlocks texts={[
			'❏ Created a token-gated Zero Knowledge voting project using Semaphore and Solidity for MYTY PFP users.',
			'❏ Developed Web3 interfaces for MYTY Kit with tools around AWS EC2, DynamoDB, Lambda, and Gateway.',
			'❏ Deployed two websites to over 10k+ users and facilitated rigorous QA.',
		]} />,
	},
	{
		company: 'Runtime Verification',
		title: 'Software Engineer Intern',
		fromTime: '06',
		toTime: '08/2022',
		blocks: <BasicTextBlocks texts={[
			'❏ Audited NFT smart contracts (ERC-721/1155) and wrote Foundry property tests for popular NFTs.',
			'❏ Executed PMF research on cross-chain NFT security and validation with external clients/protocols.',
			'❏ Researched NFT standards, usages, and mechanisms in various chains.',
		]} />,
	},
	{
		company: 'Alchemy',
		title: 'Analyst',
		fromTime: '05/2021',
		toTime: '09/2021',
		blocks: <BasicTextBlocks texts={[
			'❏ Collaborated with senior editors to write blockchain articles with technical depth, reaching over 100k+ readers.',
		]} />,
	},
	{
		company: 'UIUC Alexa SimBot',
		title: 'Research Assistant',
		fromTime: '09/2021',
		toTime: '05/2022',
		blocks: <BasicTextBlocks texts={[
			'❏ Assisted in creating novel multimodal ML models by automating AWS with Dockerfiles and bash scripts.',
			'❏ Managed core cross-region AWS infrastructures for training and inferences on 200GB+ TEACh dataset for eight researchers.',
			'❏ Explored various NLP and CV models for multimodal learning and fine-tune large models for testing.',
		]} />,
	},
]

export default workItems