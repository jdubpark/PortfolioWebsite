import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
		disableGutters
		elevation={0}
		{...props}
	/>
))(({ theme }) => ({
	position: 'relative',
	width: '100%',
	background: 'transparent',
	color: 'inherit',
  '&:before': {
    display: 'none',
  },
}))

export const AccordionSummary = styled(({ highlight, ...props }: AccordionSummaryProps & { highlight?: boolean }) => (
	<Box
		py={2}
		pl={2}
		pr={3}
		borderRadius={4}
		width="100%"
		maxWidth={{ md: '500px' }}
		// className={active ? 'bg-blue-600 text-white' : 'bg-neutral-200/50 text-inherit'}
		className={highlight ? 'bg-blue-600 text-white' : 'bg-neutral-200/50 text-inherit'}
	>
		<MuiAccordionSummary
			expandIcon={<AiOutlineRight fontSize="1.1em" />}
			{...props}
		/>
	</Box>
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
	margin: 0,
	padding: 0,
  flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper': {
		color: 'inherit',
	},
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
		margin: 0,
    marginLeft: 12, // only left margin
  },
}))

export const AccordionDetails = styled((props: AccordionDetailsProps) => (
	<Box
		mt={2}
		py={2}
		px={3}
		borderRadius={4}
		bgcolor="#f8f9fb"
	>
		<MuiAccordionDetails {...props} />
	</Box>
))(({ theme }) => ({
	margin: 0,
  padding: 0,
	background: 'inherit',
}))