import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Section({ children, id, title, logo: Icon, noPadding, ...props }: SectionProps) {
  return (
		<Box
			id={id}
			pb={noPadding ? 0 : { xs: 10, sm: 14, md: 18 }}
			maxWidth="100vw"
			sx={{
				overflowX: 'hidden',
			}}
			{...props}
		>
			<Container>
				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
					mb={5}
				>
					<Icon size={40} />
					<Typography variant="h4" fontWeight={600}>{title}</Typography>
				</Stack>
				{children}
	    </Container>
		</Box>
  )
}
