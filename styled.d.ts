// import original module declarations
import 'styled-components'

interface IColors {
  main: string
  secondary: string
  light: string
  dark: string
  alternative: string
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    // SIZE
    maxWidth: string

    // COLORS
    colors: IColors
    colors30: IColors
    colors60: IColors

    // FONT SIZES
    fontSize: {
      label: string
      input: string
      button: string
    }
  }
}
