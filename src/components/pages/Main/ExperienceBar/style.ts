import styled from 'styled-components'
import * as T from './types'
import { numberToPercentage } from 'src/functions'

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const Experience = styled.span`
  font-size: 1rem;
`

export const ExpBar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-light);
  margin: 0 1.5rem;
  position: relative;
`

export const CurrentExpBar = styled.div<T.CurrentExpBarProps>`
  ${({size}) => `width: ${numberToPercentage(size)};`}

  height: 4px;
  border-radius: 4px;
  background: var(--green);
`

export const CurrentExpText = styled.span<T.CurrentExpTextProps>`
  ${({size}) => `left: ${numberToPercentage(size)};`}

  position: absolute;
  top: 12px;
  transform: translateX(-50%)
`