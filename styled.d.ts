// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    // SIZE
    maxWidth: string;

    // COLORS
    colors: {
      main: string;
      secondary: string;
      light: string;
      dark: string;
      alternative: string;
    };
  }
}