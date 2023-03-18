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
	name, logo, fromTime, toTime,
	// links
	github, webMain, webAlt,
}: ProjectItemProps) {
	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent="flex-start"
			alignItems="stretch"
			spacing={2}
			width="100%"
		>
			<Box
				width="100%"
				maxWidth={{ xs: '100%', sm: '250px' }}
				p={{ xs: 3, md: 4 }}
				borderRadius={4}
				className="bg-blue-100/50"
			>
				<Box width="auto" height="100%" maxHeight={{ xs: '90px', sm: '75px' }} m="0 auto">{logo}</Box>
				<Box textAlign="center" mt={2}>
					<Typography variant="h6" lineHeight={1.35} fontWeight={600}>{name}</Typography>
					<Typography variant="body2" mt={0.5}>
						{`${fromTime}${toTime ? ` \u2013 ${toTime}` : ''}`}
					</Typography>
				</Box>
			</Box>
			<Stack
				flexGrow={1}
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent="flex-start"
				alignItems="stretch"
				spacing={2}
			>
				<Box
					flexGrow={1}
					p={{ xs: 3, md: 4 }}
					borderRadius={4}
					className="bg-blue-100/50"
				>
					<Typography
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
					</Typography>
				</Box>
				<Stack
					direction={{ xs: 'row', sm: 'column' }}
					justifyContent="flex-start"
					alignItems="stretch"
					spacing={2}
					py={{ xs: 3, md: 4 }}
					px={{ xs: 3, md: 2 }}
					borderRadius={4}
					className="bg-blue-100/50"
				>
					{github && <SocialIconButton href={github} />}
					{webMain && <SocialIconButton href={webMain} custom />}
					{/* {twitter && <SocialIconButton href={twitter} />} */}
				</Stack>
			</Stack>
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
					{dataProjectItems.map((project) => <ProjectItem key={project.name} {...project} />)}
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
