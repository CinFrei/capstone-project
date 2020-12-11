import { ReactComponent as DownArrow } from '../assets/arrow-down.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import BookCard from './BookCard'
import RectangleButton from './RectangleButton'

/** @component */
export default SearchBooks

SearchBooks.propTypes = {
  addBook: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  onButtonClick: PropTypes.func,
  results: PropTypes.array,
}

function SearchBooks({
  addBook,
  handleChange,
  handleSubmit,
  onButtonClick,
  results,
}) {
  return (
    <ModalStyled>
      <ButtonStyled onClick={onButtonClick}>
        <DownArrow />
      </ButtonStyled>
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
              onCardButtonClick={() => addBook(googleBook.id)}
              title={googleBook.volumeInfo.title}
            />
          ))}
        </ul>
      </FormStyled>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
  background-color: var(--dark-blue);
  bottom: 0px;
  display: grid;
  place-items: center;
  position: fixed;
  right: 0px;
  z-index: 10;
`

const ButtonStyled = styled.button`
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
