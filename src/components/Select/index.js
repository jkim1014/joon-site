import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const selectStyles = {
  control: (_, { isFocused }) => ({
    height: 50,
    backgroundColor: 'white',
    border: isFocused ? `1px solid #ff6060` : `solid 1px #C4C4C4`,
    borderRadius: 4,
    fontSize: '16px',
    fontFamily: 'Chivo',
    fontWeight: 'light',
    justifySelf: 'center',
    overflow: 'hidden',
    display: 'flex'
  }),
  dropdownIndicator: () => ({
    justifySelf: 'flex-end',
    color: '#C4C4C4',
    paddingRight: '15px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  option: (base, state) => ({
    ...base,
    fontSize: '16px',
    fontFamily: 'Chivo',
    fontWeight: 'light',
    color: 'black',
    backgroundColor: state.isFocused && '#E1E1E1'
  }),
  noOptionsMessage: base => ({
    ...base,
    fontSize: '16px',
    fontFamily: 'Chivo',
    fontWeight: 'light',
    color: 'black'
  })
}

const SelectStyled = styled(Select)`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    padding: 0px;
    padding-bottom: 15px;
    font-size: 14px;
  }
`

export default props => <SelectStyled styles={selectStyles} {...props} />
