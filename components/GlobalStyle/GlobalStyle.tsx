import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 100%;
    padding: 10px 0;
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyle
