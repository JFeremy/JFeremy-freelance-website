import Input from './Input'
import Label from './Label'
import StyledField from './Styled'

type Props = {
  readonly id: string
  readonly type: 'text' | 'email' | 'textarea'
  readonly placeholder: string
  readonly label: string
}

const Field = (props: Props) => (
  <StyledField>
    <Label for={props.id} text={props.label} />
    <Input id={props.id} type={props.type} placeholder={props.placeholder} />
  </StyledField>
)

export default Field
