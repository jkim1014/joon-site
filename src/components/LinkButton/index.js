import React from 'react'
import { Arrow, Button, Text, StyledLink } from './styles'
import backArrowIcon from '../../img/backArrow.png'

export default ({ text, back, to, ...rest }) => (
  <StyledLink to={to}>
    <Button back={back} {...rest}>
      <Arrow src={backArrowIcon} alt="arrow" back={back} />
      <Text back={back}>{text}</Text>
    </Button>
  </StyledLink>
)
