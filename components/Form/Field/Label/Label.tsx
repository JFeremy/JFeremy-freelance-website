import StyledLabel from './Styled'

type Props = {
  readonly for: string
  readonly text: string
}

const Label = (props: Props) => <StyledLabel htmlFor={props.for}>{props.text}</StyledLabel>

export default Label
