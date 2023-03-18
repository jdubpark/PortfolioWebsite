import React from 'react'
import { FcMindMap, FcMusic } from 'react-icons/fc'

import chatGtpLogo from 'url:../assets/logo/chatGTP.svg'
import nordleLogo from 'url:../assets/logo/nordle.png'
import xHolasLogo from 'url:../assets/logo/xHolas.svg'
import xNameLogo from 'url:../assets/logo/xName.svg'

const imageStyle = { height: '100%', width: 'auto', margin: '0 auto' }

const projectItems: ProjectItemProps[] = [
	{
		name: 'ChatGTP',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Mar 2023',
		toTime: '',
	},
	{
		name: 'Nordle (NFT\u00a0Wordle)', // Random Generative NFT
		logo: <img src={nordleLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Nov 2022',
		toTime: '',
	},
	{
		name: 'xHolas',
		logo: <img src={xHolasLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
	},
	{
		name: 'xAbelian',
		logo: <img src={xNameLogo} alt="xAbelian" style={imageStyle} />,
		fromTime: 'Oct 2022',
		toTime: '',
	},
	{
		name: 'zkSNARK KYC Soulbound',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Sep 2022',
		toTime: '',
	},
	{
		name: 'Continual BERT',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Jan',
		toTime: 'Apr 2021',
	},
	{
		name: 'Beetect',
		logo: <img src={chatGtpLogo} alt="ChatGTP" style={imageStyle} />,
		fromTime: 'Jan',
		toTime: 'Apr 2021',
	}
]

export default projectItems