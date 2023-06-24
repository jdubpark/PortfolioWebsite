import Stack from '@mui/material/Stack'
// import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

function BasicTextBlocks({ texts }: { texts: string[] }) {
	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
			width="100%"
			maxWidth={{ md: '700px' }}
		>
			{texts.map((text, idx) => (<Typography key={idx} variant="body1">{text}</Typography>))}
		</Stack>
	)
}

const workItems: WorkItemProps[] = [
	{
		company: 'Solana Labs',
		active: true,
		title: 'Software Engineer Intern',
		fromTime: 'From May \'23',
		toTime: '',
		blocks: <BasicTextBlocks texts={[
			'Allergic to shellfish but learning Rust. "Let him cook"',
		]} />,
	},
	{
		company: 'Diffuse',
		title: 'Junior Trader',
		fromTime: '05/2022',
		toTime: '02/2023',
		blocks: <BasicTextBlocks texts={[
			'Led the development of a prop trading tool to manage market exposure with on-chain money markets and options & perps on L2s.',
			'Researched and implemented various bespoke strategies to trade on concentrated AMMs and miniminze divergence loss.',
			'Established a rigorous unit-testing & monitoring framework to stress test strategies and track performance.',
			'Spearhead a robust due diligence system to analyze smart contract and protocol risks.',
		]} />,
	},
	{
		company: 'UIUC Disruption Lab',
		title: 'Tech Lead',
		fromTime: '08/2021',
		toTime: '01/2023',
		blocks: <BasicTextBlocks texts={[
			'Spearheaded blockchain development initiatives with Proof-of-Authority Ethereum chain.',
			'Wrote Solidity smart contracts for an NFT marketplace, custom ERC-20 tokens, gasless meta-transaction network, and complex DAOs.',
			'Led a team of six to develop production-ready Web3 dApp using React.js/Redux for internal clients.',
			'Advocated for industry-standard practices inspired by OpenSea, Uniswap, and other DEXs.',
		]} />,
	},
	{
		company: 'OFF Myty',
		title: 'Blockchain Engineer Intern',
		fromTime: '05',
		toTime: '08/2022',
		blocks: <BasicTextBlocks texts={[
			'Created a token-gated Zero Knowledge voting project using Semaphore and Solidity for MYTY PFP users.',
			'Developed Web3 interfaces for MYTY Kit with tools around AWS EC2, DynamoDB, Lambda, and Gateway.',
			'Deployed two websites to over 10k+ users and facilitated rigorous QA.',
		]} />,
	},
	{
		company: 'Runtime Verification',
		title: 'Software Engineer Intern',
		fromTime: '06',
		toTime: '08/2022',
		blocks: <BasicTextBlocks texts={[
			'Audited NFT smart contracts (ERC-721/1155) and wrote Foundry property tests for popular NFTs.',
			'Executed PMF research on cross-chain NFT security and validation with external clients/protocols.',
			'Researched NFT standards, usages, and mechanisms in various chains.',
		]} />,
	},
	{
		company: 'Alchemy',
		title: 'Analyst',
		fromTime: '05/2021',
		toTime: '09/2021',
		blocks: <BasicTextBlocks texts={[
			'Collaborated with senior editors to write blockchain articles with technical depth, reaching over 100k+ readers.',
		]} />,
	},
	{
		company: 'UIUC Alexa SimBot',
		title: 'Research Assistant',
		fromTime: '09/2021',
		toTime: '05/2022',
		blocks: <BasicTextBlocks texts={[
			'Assisted in creating novel multimodal ML models by automating AWS with Dockerfiles and bash scripts.',
			'Managed core cross-region AWS infrastructures for training and inferences on 200GB+ TEACh dataset for eight researchers.',
			'Explored various NLP and CV models for multimodal learning and fine-tune large models for testing.',
		]} />,
	},
]

export default workItems