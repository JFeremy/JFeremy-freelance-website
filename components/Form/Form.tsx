import Button from '../Button'
import Field from './Field'
import StyledForm from './Styled'

interface IField {
  readonly id: string
  readonly label: string
  readonly type: 'text' | 'email' | 'textarea'
  readonly placeholder: string
}

const Form = () => {
  const fields: IField[] = [
    {
      id: 'name',
      type: 'text',
      label: 'Votre Nom',
      placeholder: 'Nom Prénom',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Votre Email',
      placeholder: 'nom.prenom@domain.fr',
    },
    {
      id: 'project',
      type: 'textarea',
      label: 'Votre Projet',
      placeholder: 'Décrivez moi votre projet',
    },
  ]
  return (
    <StyledForm>
      {fields.map((field: IField) => (
        <Field key={field.id} id={field.id} type={field.type} label={field.label} placeholder={field.placeholder} />
      ))}
      <Button type="submit">Envoyer votre devis</Button>
    </StyledForm>
  )
}

export default Form
