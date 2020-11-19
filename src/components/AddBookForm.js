import styled from 'styled-components/macro'

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
        <input name="title" type="text" placeholder="Write book title here." />
      </label>
      <label>
        Author:
        <input
          name="author"
          type="text"
          placeholder="Write book author here."
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          type="text"
          placeholder="Write short book description here."
        />
      </label>
      <ButtonStyled>Add Book</ButtonStyled>
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

const ButtonStyled = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  background: var(--light-rose);
  color: var(--primary-antrazit);
  font-size: 1.2em;
  border: none;
  border-radius: 3px;
`
