import Stack from '@mui/material/Stack'
import ButtonBase from '@mui/material/ButtonBase'
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import { SocialIcon } from 'react-social-icons'

// Don't use template literal for Tailwind class. Instead use the full class names.
const sizes = {
	md: { height: '35px', width: '35px' },
}

const customIconSizes = {
	md: { height: '19px', width: '19px' },
}

export interface SocialIconButtonProps {
	href: string
	size?: keyof typeof sizes
	custom?: boolean
}

export default function SocialIconButton({ href, size = 'md', custom = false }: SocialIconButtonProps) {
	return (
		<ButtonBase
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				...sizes[size],
				cursor: 'pointer',
				borderRadius: '50%',
				overflow: 'hidden',
				'&:hover': {
					boxShadow: '0 0 0 0.2rem rgba(0,0,0,.25)',
				},
			}}
		>
			{
				custom ? (
					<Stack
						alignItems="center"
						justifyContent="center"
						height="100%"
						width="100%"
						className="bg-blue-600 text-white"
					>
						<GoLinkExternal size={customIconSizes[size].height} />
					</Stack>
				) : (
					<SocialIcon url={href} target="_blank" rel="noopener noreferrer" style={{ height: '100%', width: '100%' }} />
				)
			}
		</ButtonBase>
	)
}