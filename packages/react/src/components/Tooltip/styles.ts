import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  padding: '$4 $6',
  backgroundColor: '$gray600',
  border: 0,
  color: '$white',
  fontSize: '$md',
  borderRadius: '$sm',
})

export const TooltipContent = styled(Tooltip.Content, {
  fontFamily: '$default',
  color: '$gray100',
  fontSize: '$sm',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fontFamily: '$default',

  width: '$4',
  height: '$2',
  fill: '$gray900',
})
