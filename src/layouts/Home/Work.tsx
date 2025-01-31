import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FcReading } from 'react-icons/fc'

import { Accordion, AccordionDetails, AccordionSummary } from '../../components/Accordion'
import Section from '../../components/Section'
import dataWorkItems from '../../data/work'

function WorkItem({
	company, active, title, fromTime, toTime, blocks,
	// accordion props
	expanded, handleChange, highlight,
}: WorkItemProps & ItemAccordionProps & { highlight?: boolean }) {
	return (
		<Accordion
			expanded={expanded === company}
			onChange={handleChange(company)}
		>
			<AccordionSummary
				id={`panel-${company}-header`}
				aria-controls={`panel-${company}-content`}
				highlight={highlight}
			>
				<Box>
					<Typography variant="h6" fontWeight={700}>{company}</Typography>
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						spacing={1}
					>
						<Typography variant="body1">{title}</Typography>
						<Typography variant="caption">
							{`(${fromTime}${toTime ? ` \u2013 ${toTime}` : ''})`}
						</Typography>
					</Stack>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				{blocks}
			</AccordionDetails>
		</Accordion>
	)
}

export default function HomeWork() {
	const [expanded, setExpanded] = React.useState<string | false>('Story') // default expanded

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
		<Section
			title="What does he do?"
			logo={FcReading}
			id="work"
		>
			<Stack
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-start"
				spacing={2}
			>
				{dataWorkItems.map((item) => (
					<WorkItem
						key={item.company}
						expanded={expanded}
						handleChange={handleChange}
						highlight={item.active}
						{...item}
					/>
				))}
			</Stack>
		</Section>
  )
}
