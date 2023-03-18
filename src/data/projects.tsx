import React from 'react'

import beetectLogo from '../assets/logo/beetect.png'
import chatGtpLogo from 'url:../assets/logo/chatGTP.svg'
import continualBERTLogo from 'url:../assets/logo/continualBERT.png'
import nordleLogo from '../assets/logo/nordle.png'
import xAbelianLogo from '../assets/logo/xAbelian.png'
import xHolasLogo from 'url:../assets/logo/xHolas.svg'
import xNameLogo from 'url:../assets/logo/xName.svg'
import zkKYCSBTLogo from 'url:../assets/logo/zkKYCSBT.svg'

const imageStyle = { height: '100%', width: 'auto', maxHeight: 'inherit', margin: '0 auto' }

const projectItems: ProjectItemProps[] = [
	{
		name: 'ChatGTP',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Mar 2023',
		toTime: '',
		github: 'https://github.com/xChatGTP',
		webMain: 'https://app.buidlbox.io/projects/chatgtp',
	},
	{
		name: 'Nordle (NFT\u00a0Wordle)', // Random Generative NFT
		logo: <img src={nordleLogo} alt="Nordle" style={imageStyle} />,
		fromTime: 'Nov 2022',
		toTime: '',
		github: 'https://github.com/Nordle-404',
	},
	{
		name: 'xHolas',
		logo: <img src={xHolasLogo} alt="xHolas" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xHolas-Pit',
	},
	{
		name: 'xName',
		logo: <img src={xNameLogo} alt="xName" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xAbelian-Pit/xName',
	},
	{
		name: 'xAbelian',
		logo: <img src={xAbelianLogo} alt="xAbelian" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
		github: 'https://github.com/xAbelian-Pit/Abelian',
	},
	{
		name: 'zkSNARK KYC Soulbound',
		logo: <img src={zkKYCSBTLogo} alt="zkKYCSBT" style={imageStyle} />,
		fromTime: 'Sep 2022',
		toTime: '',
		github: 'https://github.com/ETHNYC-ZK-KYC-Soulbound',
	},
	{
		name: 'Continual BERT',
		logo: <img src={continualBERTLogo} alt="Continual BERT" style={imageStyle} />,
		fromTime: 'Dec 2020',
		toTime: 'Mar 2021',
		github: 'https://github.com/jdubpark/continual-bert',
	},
	{
		name: 'Beetect',
		logo: <img src={beetectLogo} alt="Beetect" style={imageStyle} />,
		fromTime: 'Jan',
		toTime: 'May 2021',
		github: 'https://github.com/jdubpark/beetect',
	}
]

export default projectItems