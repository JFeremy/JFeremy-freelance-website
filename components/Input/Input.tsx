import { StyledInput, StyledText } from './Styled'

type Props = {
  readonly id: string
  readonly type: 'text' | 'email' | 'textarea'
  readonly placeholder: string
}

const Input = (props: Props) => {
  const { id, type } = props
  let renderInput: React.ReactElement

  switch (type) {
    case 'text':
    case 'email':
      renderInput = <StyledInput name={id} {...props} required />
      break
    case 'textarea':
      renderInput = <StyledText name={id} cols={50} rows={10} {...props} required />
      break
    default:
      renderInput = <StyledInput name={id} {...props} required />
      break
  }

  return renderInput
}

export default Input
