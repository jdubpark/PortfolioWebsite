import Box, { BoxProps } from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import styled from '@mui/material/styles/styled'
import React from 'react'

const sizes = {
	sm: { y: 2, x: 4 },
	md: { y: 4, x: 8 },
	lg: { y: 6, x: 12 },
}

const ShadowPaperWrapper = styled(Paper)(({ theme }) => ({
	position: 'relative',
	overflow: 'hidden',
	padding: 0,
	// tailwind shadow-2xl
	boxShadow: '0 25px 50px -12px rgba(0,0,0,.25)',
	boxShadowColor: '0 25px 50px -12px var(--tw-shadow-color)',
	// tailwind rounded-2xl
	borderRadius: '1rem',
}))

export interface ShadowPaperProps extends BoxProps {
	children: React.ReactNode,
	size?: keyof typeof sizes,
	paddingY?: number,
	paddingX?: number,
	className?: string,
}

export default function ShadowPaper(props: ShadowPaperProps) {
	const { className, size, paddingY, paddingX, children, ...boxProps } = props
	return (
		<ShadowPaperWrapper className={className}>
			<Box
				width="100%"
				paddingY={paddingY ? paddingY : size ? sizes[size].y : 0}
				paddingX={paddingX ? paddingX : size ? sizes[size].x : 0}
				{...boxProps}
			>
				{children}
			</Box>
		</ShadowPaperWrapper>
	)
}
