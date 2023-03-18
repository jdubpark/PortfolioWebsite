import ButtonBase from '@mui/material/ButtonBase'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

// Don't use template literal for Tailwind class. Instead use the full class names.
const sizes = {
	md: { height: '35px', width: '35px' },
}

export interface SocialIconButtonProps {
	href: string
	size?: keyof typeof sizes
}

export default function SocialIconButton({ href, size = 'md' }: SocialIconButtonProps) {
	return (
		<ButtonBase
			href={href}
			sx={{
				...sizes[size],
				cursor: 'pointer',
				borderRadius: '50%',
				'&:hover': {
					boxShadow: '0 0 0 0.2rem rgba(0,0,0,.25)',
				},
			}}
		>
			<SocialIcon url={href} style={{ height: '100%', width: '100%' }} />
		</ButtonBase>
	)
}