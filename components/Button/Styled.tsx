import styled from 'styled-components'

const StyledButton = styled.button`
  border: 3px solid transparent;
  background-color: ${(props) => props.theme.colors30.main};
  border-radius: ${(props) => props.theme.borderRadius};

  color: ${(props) => props.theme.colors.light};

  font-size: ${(props) => props.theme.fontSize.button};
  padding: 15px 40px;
  width: fit-content;
  text-transform: uppercase;

  &:hover {
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors30.main};
  }
`

const StyledButtonOutline = styled(StyledButton)`
  border: 3px solid ${(props) => props.theme.colors30.main};
  background-color: transparent;
`

export { StyledButton, StyledButtonOutline }
