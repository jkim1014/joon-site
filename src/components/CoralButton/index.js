import React from 'react'
import { Arrow, Button, StyledLink, Done } from './styles'
import arrowIcon from './arrow.png'

export default ({ text, arrow, big, to, done, ...rest }) => (
  <React.Fragment>
    {done && <Done {...rest}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message Sent!</Done>}
    {Boolean(to) && (
      <StyledLink to={to}>
        <Button {...rest}>
          {text}
          {arrow && <Arrow src={arrowIcon} alt="arrow" big={big} />}
        </Button>
      </StyledLink>
    )}
    {!done &&
      !to && (
        <Button {...rest}>
          {text}
          {arrow && <Arrow src={arrowIcon} alt="arrow" big={big} />}
        </Button>
      )}
  </React.Fragment>
)
