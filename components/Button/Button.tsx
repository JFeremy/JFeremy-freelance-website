import { StyledButton, StyledButtonOutline } from './Styled'

type Props = {
  readonly type: 'submit' | 'button'
  readonly style?: 'outline' | null | undefined
  readonly children?: React.ReactNode
}

const Button = (props: Props) => {
  const { children, type, style = null } = props
  console.log(style)

  return (
    <>{style ? <StyledButtonOutline type={type}>{children}</StyledButtonOutline> : <StyledButton type={type}>{children}</StyledButton>}</>
  )
}

export default Button
