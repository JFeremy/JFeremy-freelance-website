import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.label};
  margin-bottom: -10px;
  margin-left: 10px;
  padding: 0 8px;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.dark};
  z-index: 1;
`

export default StyledLabel
