import { SxProps, Theme } from '@mui/material'
import React from 'react'
import { IconType } from 'react-icons'

export {};

declare global {
	interface SectionProps {
		children: React.ReactNode
		id?: string
		title: string
		logo: IconType
		noPadding?: boolean
	}

	interface HeaderItemProps {
		to: string
		name: string
	}

	interface ItemAccordionProps {
		expanded: string | false,
		handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void,
	}

	interface AboutShortProfileProps {
		logo: IconType,
		header: string,
		content: string,
		linked?: string,
	}
	
	interface AboutShortWordsProps {
		title: string,
		content: string[],
	}

	interface WorkItemProps {
		company: string,
		active?: boolean,
		title: string,
		fromTime: string,
		toTime: string,
		blocks: JSX.Element | React.ReactNode | React.ReactNode[],
	}

	interface ProjectItemProps {
		name: string,
		logo: JSX.Element | React.ReactNode, // typeof React.Component,
		fromTime: string,
		toTime: string,
		github?: string,
		youtube?: string,
		twitter?: string,
		webMain?: string,
		webAlt?: string,
		blocks: JSX.Element | React.ReactNode | React.ReactNode[],
	}
}