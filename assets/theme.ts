import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '10px',

  maxWidth: '1024px',

  colors: {
    main: '#0081A7',
    secondary: '#EB6534',
    light: '#EFF1F3',
    dark: '#0B2027',
    alternative: '#BEDCFE',
  },

  colors30: {
    main: 'rgba(0,129,167, 0.3)',
    secondary: 'rgba(235,101,52, 0.3)',
    light: 'rgba(239,241,243, 0.3)',
    dark: 'rgba(11,32,39, 0.3)',
    alternative: 'rgba(190,220,254, 0.3)',
  },

  colors60: {
    main: 'rgba(0,129,167, 0.6)',
    secondary: 'rgba(235,101,52, 0.6)',
    light: 'rgba(239,241,243, 0.6)',
    dark: 'rgba(11,32,39, 0.6)',
    alternative: 'rgba(190,220,254, 0.6)',
  },

  fontSize: {
    label: 'clamp(14px, 2.1vw, 20px)',
    input: 'clamp(12px, 2vw, 18px)',
    button: 'clamp(14px, 2.1vw, 20px)',
  },
}

export { theme }
