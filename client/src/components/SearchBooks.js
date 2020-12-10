import { ReactComponent as DownArrow } from '../assets/arrow-down.svg'
import BookCard from './BookCard'
import RectangleButton from './RectangleButton'
import styled from 'styled-components/macro'

/** @component */
export default function SearchBooks({
  addBook,
  handleChange,
  handleSubmit,
  onButtonClick,
  results,
}) {
  return (
    <StyledModal>
      <StyledButton onClick={onButtonClick}>
        <DownArrow />
      </StyledButton>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          Suche:
          <input
            autoComplete="off"
            onChange={handleChange}
            placeholder="Suche nach Büchern"
            type="text"
          />
        </label>

        <RectangleButton type="submit" buttonName="Suche Starten" />
        <ul>
          {results.map((googleBook) => (
            <BookCard
              author={googleBook.volumeInfo.authors}
              buttonName="Buch hinzufügen."
              cover={googleBook.volumeInfo.imageLinks.thumbnail}
              key={googleBook.id}
              onCardBtnClick={() => addBook(googleBook.id)}
              title={googleBook.volumeInfo.title}
            />
          ))}
        </ul>
      </FormStyled>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  background-color: var(--dark-blue);
  bottom: 0px;
  display: grid;
  place-items: center;
  position: fixed;
  right: 0px;
  z-index: 10;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  justify-self: end;
  width: 80px;

  svg {
    width: 25px;
  }
  svg .st0 {
    fill: var(--primary-anthrazit);
  }
`

const FormStyled = styled.form`
  border-radius: 3px;
  border: 2px solid var(--dark-rose);
  margin: 10px 10px 20px;
  padding: 10px;

  input {
    border-radius: 3px;
    border: 2px solid var(--light-rose);
    font-size: 1em;
    margin: 10px 0;
    padding: 4px 0;
    width: 100%;
  }
`
