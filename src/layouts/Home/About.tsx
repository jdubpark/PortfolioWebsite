import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import React from 'react'
import { FcAbout } from 'react-icons/fc'

import vaxxedDoggo2126 from '../../assets/images/vaxxed-doggo-2126.png'
import SquareCard from '../../components/Card/Square'
import Section from '../../components/Section'
// import SocialIconButton from '../../components/SocialIconButton'
import dataAbout from '../../data/about'

function AboutShortProfile({ header, content, logo: Logo, linked }: AboutShortProfileProps) {
  return (
    <Box
      flex={{ xs: '100%', sm: '50%', md: '33%' }}
      padding={1}
      component={linked ? 'a' : 'div'}
      href={linked}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        paddingY={2}
        paddingX={3}
        borderRadius={4}
        // width={{ xs: '100%', md: '300px' }}
        className={linked ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-neutral-200/50 text-inherit'}
        sx={{
          '&:not(:last-child)': {
            mb: 2,
          }
        }}
      >
        <Logo size="28" />
        <Box className="text-left">
          <Typography
            variant="body2"
            className={clsx(
              linked ? 'text-white/70' : 'text-gray-500/90',
              'leading-none',
            )}
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={linked ? 'bold' : 'normal'}
            fontSize={{ xs: '1.2em', md: '1em' }}
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{
              WebkitLineClamp: '1', // 1-line ellipsis
              WebkitBoxOrient: 'vertical',
            }}
          >
            {content}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

function AboutShortWords({ title, content, order }: AboutShortWordsProps & { order: number }) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      width="100%"
      maxWidth={{ xs: '100%', md: '600px' }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        <span className="text-blue-600 mr-2" style={{ fontSize: '1.2em', fontWeight: 900 }}>{String(order)}.</span>
        <span>{title}</span>
      </Typography>
      {content.map((text, idx) => (<Typography variant="body1" key={idx}>{text}</Typography>))}
    </Stack>
  )
}

export default function HomeAbout() {
  return (
		<Section
			title="Who is Jongwon?"
			logo={FcAbout}
			id="about"
		>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				justifyContent={{ xs: 'flex-start', md: 'center' }}
				alignItems="center"
				spacing={2}
				width="100%"
			>
				<SquareCard size="lg" className="relative overflow-hidden z-10">
					<img src={vaxxedDoggo2126} alt="Vaxxed Doggo 652" className="w-full h-auto" />
				</SquareCard>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					sx={{ flexWrap: 'wrap' }}
				>
					{dataAbout.profileShorts.map((profileShort) => (<AboutShortProfile key={profileShort.header} {...profileShort} />))}
				</Stack>
			</Stack>
			<Stack
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-start"
				spacing={6}
				mt={{ xs: 6, md: 8 }}
				width="100%"
			>
				{dataAbout.shortWords.map((shortWords, idx) => (<AboutShortWords key={shortWords.title} order={idx} {...shortWords} />))}
			</Stack>
		</Section>
  )
}
