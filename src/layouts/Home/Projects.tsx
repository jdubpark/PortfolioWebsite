import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { AiOutlineSmile } from 'react-icons/ai'
import { FcFlashOn, FcLike } from 'react-icons/fc'

import Section from '../../components/Section'
import SocialIconButton from '../../components/SocialIconButton'
import dataProjectItems from '../../data/projects'

function ProjectItem({
	name, logo, fromTime, toTime, blocks,
	// links
	github, youtube, twitter, webMain, // webAlt,
	// misc
	odd,
}: ProjectItemProps & { odd?: boolean } ) {
	const bgcClass = odd ? 'bg-neutral-200/50' : 'bg-blue-100/50'
	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent="flex-start"
			alignItems="stretch"
			spacing={{ xs: 2, sm: 3 }}
			width="100%"
		>
			<Stack
				direction={{ xs: 'row', sm: 'column' }}
				justifyContent={{ xs: 'flex-start', sm: 'center' }}
				alignItems="center"
				spacing={{ xs: 1, sm: 2 }}
				height="100%"
				width="100%"
				maxWidth={{ xs: '100%', sm: '250px' }}
				p={{ xs: 3, md: 4 }}
				pb={{ xs: 2, md: 2 }}
				borderRadius={4}
				className={bgcClass}
			>
				<Box height={{ xs: '90px', sm: '75px' }} width={{ xs: '90px', sm: '75px' }} m="0 auto">{logo}</Box>
				<Box flexGrow={1} textAlign={{ xs: 'left', sm: 'center' }} pl={{ xs: 2, sm: 0 }}>
					<Typography variant="h5" lineHeight={1.35} fontWeight={600}>{name}</Typography>
					<Typography variant="body2" mt={0.5}>
						{`${fromTime}${toTime ? ` \u2013 ${toTime}` : ''}`}
					</Typography>
				</Box>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="center"
					alignItems={{ xs: 'flex-start', sm: 'center' }}
					spacing={1}
				>
					{github && <SocialIconButton href={github} />}
					{youtube && <SocialIconButton href={youtube} />}
					{twitter && <SocialIconButton href={twitter} />}
					{webMain && <SocialIconButton href={webMain} custom />}
				</Stack>
			</Stack>
			<Box
				flexGrow={1}
				p={{ xs: 3, md: 4 }}
				borderRadius={4}
				className={bgcClass}
			>
				{blocks}
			</Box>
		</Stack>
	)
}

export default function HomeAll() {
  return (
		<>
			<Section
				title="Show me his projects!"
				logo={FcFlashOn}
				id="projects"
			>
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={8}
				>
					{dataProjectItems.map((project, idx) => <ProjectItem key={project.name} odd={idx % 2 == 1} {...project} />)}
				</Stack>
			</Section>
			<Section
				title="WOW, he's good!!"
				logo={FcLike}
				noPadding
			>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Typography variant="h6">Yeah I know...</Typography>
					<AiOutlineSmile size={32} />
					<Typography variant="h6" textAlign="center">Kidding.. trying my best on things I'm passionate about!</Typography>
				</Stack>
			</Section>
			{/* <Section
				title="What else?"
				logo={FcMusic}
				noPadding
			>
				...
			</Section> */}
		</>
  )
}
