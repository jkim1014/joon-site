import styled from 'styled-components'
import { Flex } from 'grid-styled'
import Select from '../../components/Select'
import TextInput from '../../components/TextInput'
import CoralButton from '../../components/CoralButton'

export const BigContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  margin-left: -7px;
`

export const SmallContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 37px;
`

export const Container = styled(Flex)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    padding-left: 5%;
    width: 100%;
    padding-top: 200px;
    padding-bottom: 162px;
    justify-content: space-evenly;
    flex-direction: row;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 43px;
  }
`
export const LeftColumn = styled(Flex)`
  flex-direction: column;
  padding-right: 30px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    padding-right: 0px;
  }
`
export const Column = styled(Flex)`
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    width: 100%;
  }
`

export const RightColumn = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 675px;
  padding-right: 168px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    height: 100%;
    width: 100%;
    padding-right: 0px;
  }
`

export const Text = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-weight: ${({ theme }) => theme.fonts.title.weight};
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 44px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    font-size: 16px;
    line-height: 25px;
    width: 100%;
    margin-top: 8px;
    padding-bottom: 20px;
  }
`
export const Heading = styled(Flex)`
  font-family: 'Chivo';
  color: #78738f;
  font-weight: 'bold';
  font-size: 70px;
  line-height: 98px;
  margin-left: -3px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    font-size: 36px;
    line-height: 51px;
    margin-bottom: 20px;
  }
`
export const Row = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
`

export const SubHeading = styled(Flex)`
  font-family: 'Chivo';
  color: 'black';
  font-weight: 'bold';
  font-size: 20px;
  line-height: 28px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 6px;
  }
`

export const Mailbox = styled.img`
  margin-left: 26px;
  width: 303px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    display: none;
  }
`
export const MailboxMobile = styled.img`
  width: 49px;
  height: 69px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    display: none;
  }
`
export const DropDown = styled(Select)``

export const Input = styled(TextInput)`
  width: 100%;
`
export const SendButton = styled(CoralButton)`
  width: 209px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.floor}) {
    width: 100%;
  }
`
