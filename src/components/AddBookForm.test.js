import AddBookForm from './AddBookForm'
import user from '@testing-library/user-event'
import { getByText, render } from '@testing-library/react'

describe('AddBookForm', () => {
  const onSubmitMock = jest.fn()

  it('calls onSubmit with correct data and resets form', () => {
    const { getByLabelText, getByText } = render(
      <AddBookForm onCreateBook={onSubmitMock} />
    )

    user.type(getByLabelText('Titel:'), 'Die 100 besten Currywurst Rezepte')
    user.type(getByLabelText('Autor:'), 'Horst Host')
    user.type(getByLabelText('Beschreibung:'), 'Voll Currywurst. Subba Legga!')

    user.click(getByText('Buch Hinzufügen'))

    expect(onSubmitMock).toHaveBeenCalledWith(
      'Die 100 besten Currywurst Rezepte',
      'Horst Host',
      'Voll Currywurst. Subba Legga!'
    )

    expect(getByLabelText('Titel:')).toHaveValue('')
    expect(getByLabelText('Autor:')).toHaveValue('')
    expect(getByLabelText('Beschreibung:')).toHaveValue('')
  })
  //...
})
