import styled from 'styled-components/macro'

import Button from './RectangleButton'
import { ReactComponent as DownArrow } from '../assets/arrow-down.svg'

/** @component */
export default function AddBookForm({ onCreateBook, onButtonClick }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const inputTitle = formElement.elements.title
    const inputAuthor = formElement.elements.author
    const inputDescription = formElement.elements.description
    onCreateBook(inputTitle.value, inputAuthor.value, inputDescription.value)
    formElement.reset()
    inputTitle.focus()
  }

  return (
    <StyledModal>
      <StyledButton onClick={onButtonClick}>
        <DownArrow />
      </StyledButton>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          Titel:
          <input name="title" type="text" placeholder="Buchtitel hinzufügen." />
        </label>
        <label>
          Autor:
          <input
            name="author"
            type="text"
            placeholder="Buchautor hinzufügen."
          />
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
    </StyledModal>
  )
}

const StyledModal = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 10;

  display: grid;
  place-items: center;

  background: var(--secondary-background-gradient);
`

const StyledButton = styled.button`
  width: 80px;
  height: 20px;
  border: none;
  background-color: transparent;
  justify-self: end;

  svg {
    width: 25px;
  }
`

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
