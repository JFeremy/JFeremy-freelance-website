import { ThemeProvider } from 'styled-components'

import { theme } from '../../assets'
import Contact from '../Contact'
import Footer from '../Footer'
import GlobalStyle from '../GlobalStyle'
import StyledLayout from './Styled'

type Props = {
  readonly children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <main>{props.children}</main>
        <Contact />
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
