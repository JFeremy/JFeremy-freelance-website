import styled from 'styled-components'

const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors30.main};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.dark};

  height: 40px;
  font-size: ${(props) => props.theme.fontSize.input};
  padding: 10px 20px;

  &:focus,
  &:focus-visible {
    border: 2px solid ${(props) => props.theme.colors60.main};
  }
`
const StyledText = styled.textarea`
  border: 2px solid ${(props) => props.theme.colors30.main};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.dark};

  font-size: ${(props) => props.theme.fontSize.input};
  padding: 20px 20px;

  &:focus,
  &:focus-visible {
    border: 2px solid ${(props) => props.theme.colors60.main};
  }
`

export { StyledInput, StyledText }
