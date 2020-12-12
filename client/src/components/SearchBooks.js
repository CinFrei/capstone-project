import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import BookCard from './BookCard'
import RectangleButton from './RectangleButton'

import DefaultCover from '../assets/default-cover.png'

/** @component */
export default SearchBooks

SearchBooks.propTypes = {
  addBook: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  onButtonClick: PropTypes.func,
  results: PropTypes.array,
}

function SearchBooks({ addBook, handleChange, handleSubmit, results }) {
  return (
    <SearchPageStyled>
      <ResultsStyled>
        {results.map((googleBook) => (
          <BookCard
            author={googleBook.volumeInfo.authors}
            buttonName="Buch hinzufügen."
            cover={
              typeof googleBook.volumeInfo.imageLinks !== 'undefined' &&
              typeof googleBook.volumeInfo.imageLinks.thumbnail !== 'undefined'
                ? googleBook.volumeInfo.imageLinks.thumbnail
                : DefaultCover
            }
            key={googleBook.id}
            onCardButtonClick={() => addBook(googleBook.id)}
            title={googleBook.volumeInfo.title}
          />
        ))}
      </ResultsStyled>
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
      </FormStyled>
    </SearchPageStyled>
  )
}

const SearchPageStyled = styled.div`
  background-color: var(--dark-blue);
  place-items: center;
  position: relative;
`

const ResultsStyled = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
`

const FormStyled = styled.form`
  background-color: var(--dark-blue);
  border-top: 2px solid var(--primary-anthrazit);
  bottom: 63px;
  margin: 0;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 10;

  input {
    border-radius: 1px;
    border: 2px solid var(--light-rose);
    font-size: 1em;
    margin: 10px 0;
    padding: 4px 0;
    width: 100%;
  }
`
