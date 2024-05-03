import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import beetectLogo from 'url:../assets/logo/beetect.png'
import chatGtpLogo from 'url:../assets/logo/chatGTP.svg'
import continualBERTLogo from 'url:../assets/logo/continualBERT.png'
import nordleLogo from 'url:../assets/logo/nordle.png'
import xAbelianLogo from 'url:../assets/logo/xAbelian.png'
import xHolasLogo from 'url:../assets/logo/xHolas.svg'
import xNameLogo from 'url:../assets/logo/xName.svg'
import zkKYCSBTLogo from 'url:../assets/logo/zkKYCSBT.svg'
import uiucBlueLogo from 'url:../assets/logo/uiucBlue.png'
import initMailLogo from 'url:../assets/logo/initMail.png'
import cladLogo from 'url:../assets/logo/clad.png'
import interbeamLogo from 'url:../assets/logo/interbeam.png'
import wordsRealmPGF from 'url:../assets/logo/wordsRealmPGF.png'

const imageStyle = { height: '100%', width: 'auto', maxHeight: 'inherit', margin: '0 auto' }

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

const projectItems: ProjectItemProps[] = [
	{
		name: 'Words Realm PGF',
		logo: <img src={wordsRealmPGF} alt="WordsRealmPGF" style={imageStyle} />,
		fromTime: 'Nov 2023',
		toTime: '',
		github: 'https://github.com/jdubpark/WordRealmForGood',
		youtube: 'https://www.youtube.com/watch?v=4kVkL8W3j-o',
		webMain: 'https://ethglobal.com/showcase/pro-activepgf-hnvax',
		blocks: <BasicTextBlocks texts={[
			'Fun generative AI-based word-assembling game that collects minting fees for charity. Players can mint words and assemble them into phrases, from which DALLE-3 generates unique images. All minting fees are donated to charity with automatic weather-based fund dispersion onchain.',
			'Won: Worldcoin Pool Prize @ ETH Istanbul 2023'
		]} />,
	},
	{
		name: 'Interbeam',
		logo: <img src={interbeamLogo} alt="Interbeam" style={imageStyle} />,
		fromTime: 'Oct 2023',
		toTime: '',
		github: 'https://github.com/Interbeam/contracts',
		youtube: 'https://www.youtube.com/watch?v=4k1fgRn6DsM',
		webMain: 'https://www.youtube.com/watch?v=HFYvMMt491E',
		blocks: <BasicTextBlocks texts={[
			'Simple DeFi Migration from EVM to Solana. With a few clicks, users can move DeFi liquidity from Ethereum and other chains to Solana. Aave to Marginfi, Uniswap to Orca. Say it, we integrate into at most four clicks on Interbeam.',
			'Submission @ Solana Hyperdrive hackathon',
			'Pitch deck: https://pitch.com/v/interbeam-fs9gjq'
		]} />,
	},
	{
		name: 'Aucentive',
		logo: <img src={initMailLogo} alt="Aucentive" style={imageStyle} />,
		fromTime: 'Sep 2023',
		toTime: '',
		github: 'https://github.com/orgs/Aucentive/repositories',
		youtube: 'https://www.youtube.com/watch?v=SlkQK6EpAgo',
		webMain: 'https://ethglobal.com/showcase/aucentive-xjk04',
		blocks: <BasicTextBlocks texts={[
			'Zapier for Incentives. Automated incentive protocol on Base with seamless Web2 integration with Account Abstraction.',
			'Won: UMA Pool Prize @ ETH NYC 2023'
		]} />,
	},
	{
		name: 'InitMail',
		logo: <img src={initMailLogo} alt="InitMail" style={imageStyle} />,
		fromTime: 'Sep 2023',
		toTime: '',
		github: 'https://github.com/orgs/InitMail/repositories',
		youtube: 'https://www.youtube.com/watch?v=XRwTWRzfL_c',
		webMain: 'https://taikai.network/ethchicago/hackathons/ETHChicagoHackathon2023/projects/clmmbkpth04zdwn019c0yzbk3/idea',
		blocks: <BasicTextBlocks texts={[
			"Senders can attach \"value\" to their emails. It's eye-grabbing for recipients for two reasons: generates revenue, signifies seriousness, and shows consideration. If someone's willing to spend $100 to write an email, maybe it's really important?",
			"Won: Best Integration of Wormhole @ ETH Chicago",
			"Won: Best Use of Scaffold-ETH @ ETH Chicago",
		]} />,
	},
	{
		name: 'CLAD',
		logo: <img src={cladLogo} alt="CLAD" style={imageStyle} />,
		fromTime: 'May 2023',
		toTime: 'Aug 2023',
		github: 'https://github.com/solana-labs/interns-codehub/tree/master/infinity-pools',
		youtube: 'https://drive.google.com/file/d/1l_34cLn6WM_PQosoQm1ubguxwgmdBIZ0/view?resourcekey',
		webMain: 'https://docs.google.com/presentation/d/1ZRLwpWqIjuvsBblvYzGg3_AQoBdhj_nXJz8J1v4rklk/edit?usp=sharing',
		blocks: <BasicTextBlocks texts={[
			"Internship project at Solana Labs.",
			"Concentrated Liquidity AMM Derivatives, or CLAD, is an open-source implementation of a non-custodial decentralized exchange that supports leveraged trading in any asset using concentrated liquidity positions as counter-parties.",
			"Basically simplified InfinityPools on Solana with code modified from Orca Whirlpool."
		]} />,
	},
	{
		name: 'No-need DFS',
		logo: <img src={uiucBlueLogo} alt="No-need DFS" style={imageStyle} />,
		fromTime: 'May 2023',
		toTime: '',
		github: 'https://gist.github.com/jdubpark/1be5713022eee374dae25b41365e0890',
		twitter: 'https://twitter.com/jwpark02/status/1652925088436477959',
		blocks: <BasicTextBlocks texts={[
			'Decided to write DFS in MIPS for fun (class lab), and it was a lot of not-fun debugging stacks. Learned after that I could have just hard-coded the search paths, but oh well...',
			'Won: lols from friends',
		]} />,
	},
	{
		name: 'ChatGTP',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Mar 2023',
		toTime: '',
		github: 'https://github.com/xChatGTP',
		youtube: 'https://www.youtube.com/watch?v=RHC7V6ejL2g',
		webMain: 'https://app.buidlbox.io/projects/chatgtp',
		blocks: <BasicTextBlocks texts={[
			'Chat Generic Transaction Passing (ChatGTP) is a PoC on Axelar for batching and sending multiple multi-chain transactions in a single transaction, constructed using the human-friendly ChatGPT frontend clone.',
			'Won: 2nd place in Axelar Multi-chain bounty @ ETH Denver',
			'Won: 2nd place in Moonbeam GMP bounty @ ETH Denver',
		]} />,
	},
	{
		name: 'Nordle', // Random Generative NFT
		logo: <img src={nordleLogo} alt="Nordle" style={imageStyle} />,
		fromTime: 'Nov 2022',
		toTime: '',
		github: 'https://github.com/Nordle-404',
		youtube: 'https://www.youtube.com/watch?v=C2dKyKeqq-0',
		blocks: <BasicTextBlocks texts={[
			'NFT Wordle (Nordle) is a tool to create and concatenate random generative NFTs. In a click, users can collect a single-word NFT, which they can combine into longer phrases to create more expressive NFTs.',
			'Using Chainlink VRF and Any API, Nordle generates a random word or combines them into a sequence of words, which the server with DALLE-2 API consumes to generate an image.',
			'Won: Best Use of Chainlink @ HackATL',
		]} />,
	},
	{
		name: 'xHolas',
		logo: <img src={xHolasLogo} alt="xHolas" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xHolas-Pit',
		webMain: 'https://www.loom.com/share/7691e569d6f74a098961e89daddb0e87',
		blocks: <BasicTextBlocks texts={[
			'xHolas is a PoC on Wormhole for combing various multi-chain DeFi transactions into a single transaction, which users can execute and sell on the secondary market as an NFT.',
			'Won: Best Use of Wormhole @ xHack at the Pit',
		]} />,
	},
	{
		name: 'xName',
		logo: <img src={xNameLogo} alt="xName" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xAbelian-Pit/xName',
		youtube: 'https://www.youtube.com/watch?v=f18dMFwR5wE',
		blocks: <BasicTextBlocks texts={[
			'xName is a multi-chain Domain Name Service (DNS) built on Wormhole. It uses xAbelian as the base layer to guarantee domain name synchronization across chains.',
		]} />,
	},
	{
		name: 'xAbelian',
		logo: <img src={xAbelianLogo} alt="xAbelian" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xAbelian-Pit/Abelian',
		blocks: <BasicTextBlocks texts={[
			'xAbelian is a generic, dynamic NFT anchored on Klaytn using Wormhole. It uses a mesh network architecture to guarantee state synchronization across chains supported by Wormhole.',
			'Users can use xAbelian to update and prove their data ownership on other chains through NFT metadata. ',
			'Won: 1st place in Klaytn bounty @ xHack at the Pit',
		]} />,
	},
	{
		name: 'zk KYC SBT',
		logo: <img src={zkKYCSBTLogo} alt="zkKYCSBT" style={imageStyle} />,
		fromTime: 'Jun 2022',
		toTime: '',
		github: 'https://github.com/ETHNYC-ZK-KYC-Soulbound',
		blocks: <BasicTextBlocks texts={[
			'zkKYC SBT is a PoC for zk-SNARK based Soulbound token (SBT) storing KYC data. As a privacy-preserving tool, it stores zk-SNARK to prove the KYC data is valid and exists as a Sybil-resistant SBT.',
			'Won: 1st place in WallectConnect DeFi bounty @ ETH NewYork',
		]} />,
	},

	{
		name: 'Beetect',
		logo: <img src={beetectLogo} alt="Beetect" style={imageStyle} />,
		fromTime: 'Jan',
		toTime: 'May 2021',
		github: 'https://github.com/jdubpark/beetect',
		webMain: 'https://drive.google.com/file/d/1c2-Ci1co7iXfoEQjH9rsZZmOse3J_fkI/view?usp=sharing',
		blocks: <BasicTextBlocks texts={[
			'An experiment on training and detecting bees using Faster R-CNN in a compute-limited environment. It uses a custom curated dataset of 1,000+ bee images and an efficient model with a ResNet-50 backbone.',
		]} />,
	},
	{
		name: 'Continual BERT',
		logo: <img src={continualBERTLogo} alt="Continual BERT" style={imageStyle} />,
		fromTime: 'Apr',
		toTime: 'Dec 2020',
		github: 'https://github.com/jdubpark/continual-bert',
		webMain: 'https://arxiv.org/abs/2007.03405',
		blocks: <BasicTextBlocks texts={[
			'A novel language model to provide quality summaries on influx of scientific papers by mimicking the brain\'s day-and-night learning cycle.',
			'Heavily inspired by online Elastic Weight Loss (online), this novel model learns and consolidates information to mimic memory while minimizing catastrophic forgetting.',
			'It utilizes two separate BERT models with layer-wise connections and deploys an alternating training process, which resembles the brain\'s learning during the day and consolidation of knowledge while sleeping.',
		]} />,
	},
]

export default projectItems

{/* <Typography
	variant="body2"
	overflow="hidden"
	textOverflow="ellipsis"
	display="-webkit-box"
	sx={{
		WebkitLineClamp: '3', // 3-lines ellipsis
		WebkitBoxOrient: 'vertical',
	}}
>
	This is some description that works better than Lorem Ipsum to create content that looks legit when skimping over, as it is more natural than the repeated use of same words and letters.
</Typography> */}