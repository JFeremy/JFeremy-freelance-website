import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  padding: 20px 0;

  border-top: 1px solid ${(props) => props.theme.colors.alternative};
`

export default StyledFooter
