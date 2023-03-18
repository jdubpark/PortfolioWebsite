import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import styled from '@mui/material/styles/styled'
import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

// Don't use template literal for Tailwind class. Instead use the full class names.
const sizes = {
	sm: { xs: 'min-w-16 w-16 min-h-16 h-16', md: 'md:min-w-24 md:w-24 md:min-h-24 md:h-24' },
	md: { xs: 'min-w-24 w-24 min-h-24 h-24', md: 'md:min-w-36 md:w-36 md:min-h-36 md:h-36' },
	lg: { xs: 'min-w-36 w-36 min-h-36 h-36', md: 'md:min-w-48 md:w-48 md:min-h-48 md:h-48' },
}

export interface SquareCardProps extends PropsWithChildren {
  size: keyof typeof sizes,
  centered?: boolean,
  className?: string
}

const SquareCardInnerCenter: React.FC<PropsWithChildren> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100%"
    width="100%"
  >
    {children}
  </Box>
)

const SquareCardFC: React.FC<SquareCardProps> = ({ centered, children, className, size, ...props }) => {
  const { xs: sxs, md: smd } = sizes[size]
  const Inner: React.FC<PropsWithChildren> = centered ? SquareCardInnerCenter : React.Fragment
  return (
    <Box
      className={clsx(
        'bg-stone-100 rounded-2xl shadow-lg',
        sxs,
        smd,
        className,
      )}
      {...props}
    >
      <Inner>{children}</Inner>
    </Box>
  )
};

const SquareCard = styled(SquareCardFC)(({ theme }) => ({
  position: 'relative',
  // className: 'rounded-2xl shadow-lg',
  // [theme.breakpoints.down('sm')]: {
  //   width: '100% !important', // Overrides inline-style
  //   height: 100,
  // },
  // '&:hover': {
  //   backgroundColor: '#333',
  // },
  // '&:hover, &.Mui-focusVisible': {
  //   zIndex: 1,
  //   '& .MuiImageBackdrop-root': {
  //     opacity: 0.15,
  //   },
  //   '& .MuiImageMarked-root': {
  //     opacity: 0,
  //   },
  //   '& .MuiTypography-root': {
  //     border: '4px solid currentColor',
  //   },
  // },
}))

export default SquareCard