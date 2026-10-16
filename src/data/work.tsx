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
		company: 'Poseidon AI',
		active: true,
		title: 'Head of Engineering',
		fromTime: 'Feb 2026',
		toTime: 'Present',
		blocks: <BasicTextBlocks texts={[
			'❏ Lead the engineering team and roadmap for the AI data flywheel and value-oriented products.',
			'❏ Architect a distributed data collection app for 50k+ users and a processing pipeline for 100k+ hours of video.',
			'❏ Design verifiable data networks: incentivized, decentralized generic compute for lower cost and accessibility.',
			'❏ Coordinate teams in the US, Korea, and China on technology and business.',
		]} />,
	},
	{
		company: 'Story Protocol',
		title: 'Software Engineer',
		fromTime: 'Dec 2023',
		toTime: 'Feb 2026',
		blocks: (
			<VersatileBlocks>
				<img src={letHimCookImage} alt="Let him cook" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
				<Typography variant="body1">The Data Foundation</Typography>
				<Typography variant="body1">❏ Developed and released the Story blockchain from scratch, from research through architecture.</Typography>
				<Typography variant="body1">❏ Contributed to IP and UGC products, including IP Portal and Remixing.</Typography>
				<Typography variant="body1">❏ Managed technical relationships with ecosystem projects and helped them implement smart contracts.</Typography>
			</VersatileBlocks>
		),
	},
	{
		company: 'UIUC OpenAI grant',
		title: 'Lead Developer',
		fromTime: 'Aug 2023',
		toTime: 'Oct 2023',
		blocks: <BasicTextBlocks texts={[
			'SALT Lab',
			'❏ Implemented a full-stack system for 200+ people chatting with GPT and with each other for an experiment.',
			'❏ Optimized live chat latency to sub-300ms across 5 distributed servers in the US.',
		]} />,
	},
	{
		company: 'Solana Labs',
		title: 'Product Engineer Intern',
		fromTime: 'May 2023',
		toTime: 'Aug 2023',
		blocks: <BasicTextBlocks texts={[
			'❏ Created a 100x leverage trading protocol on a concentrated-liquidity AMM on Solana.',
			'❏ Researched DeFi options and wrote programs from scratch to materialize whitepaper ideas.',
		]} />,
	},
	{
		company: 'Diffuse',
		title: 'Jr. Trader',
		fromTime: 'May 2022',
		toTime: 'Feb 2023',
		blocks: <BasicTextBlocks texts={[
			'❏ Developed a trading tool to manage DeFi lending and other strategies with on-chain money markets.',
			'❏ Spearheaded due diligence on protocol and bridge mechanisms and on smart contract codebases.',
			'❏ Handled liquidity provisioning, yield farming, token mechanisms, and cross-chain stablecoin arbitrage.',
		]} />,
	},
	{
		company: 'UIUC Disruption Lab',
		title: 'Technical Lead',
		fromTime: 'Sep 2021',
		toTime: 'Jan 2023',
		blocks: <BasicTextBlocks texts={[
			'❏ Directed a team of six to develop production-ready Web3 dApps with React.js and Redux for clients.',
			'❏ Pioneered a LinkedIn-like NFT-centric website and an NFT marketplace from scratch.',
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
