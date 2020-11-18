import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import books from '../data/book-data'
import BookCard from './BookCard'

/** @component */
export default BookList

BookList.propTypes = {
  listName: PropTypes.string,
}

function BookList({ listName, id }) {
  return (
    <BookListWrapper>
      <h2>{listName}</h2>
      {books.map((book) => (
        <BookCard
          coverUrl={book.coverUrl}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </BookListWrapper>
  )
}

const BookListWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  padding: 10px;

  h2 {
    text-align: left;
    margin: 0;
  }
`
