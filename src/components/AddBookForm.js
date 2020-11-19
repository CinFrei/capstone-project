import styled from 'styled-components/macro'

import Button from './RectangleButton'

export default function AddBookForm({ onCreateBook }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const inputTitle = formElement.title
    const inputAuthor = formElement.author
    const inputDesqription = formElement.description
    onCreateBook(inputTitle.value, inputAuthor.value, inputDesqription.value)
    formElement.reset()
    inputTitle.focus()
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        Titel:
        <input name="title" type="text" placeholder="Buchtitel hinzufügen." />
      </label>
      <label>
        Autor:
        <input name="author" type="text" placeholder="Buchautor hinzufügen." />
      </label>
      <label>
        Beschreibung:
        <input
          name="description"
          type="text"
          placeholder="Kurze Buchbeschreibung hinzufügen."
        />
      </label>
      <Button buttonName="Buch Hinzufügen" />
    </FormStyled>
  )
}

const FormStyled = styled.form`
  margin: 10px 10px 20px 10px;
  padding: 10px;
  border: 2px solid var(--dark-rose);
  border-radius: 3px;

  input {
    font-size: 1em;
    width: 100%;
    margin: 10px 0;
    padding: 4px 0;
    border: 2px solid var(--light-rose);
    border-radius: 3px;
  }
`
