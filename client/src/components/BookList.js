import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import BookCard from './BookCard'

/** @component */
export default BookList

BookList.propTypes = {
  listName: PropTypes.string,
  newBooks: PropTypes.array,
  showDetail: PropTypes.func,
}

function BookList({ listName, newBooks, showDetail }) {
  return (
    <BookListWrapper>
      <h2>{listName}</h2>
      {newBooks.map((newBook) => (
        <BookCard
          author={newBook.volumeInfo.authors}
          buttonName="Mehr über's Buch"
          cover={newBook.volumeInfo.imageLinks.thumbnail}
          onCardButtonClick={() => showDetail(newBook.id)}
          key={newBook.id}
          title={newBook.volumeInfo.title}
        />
      ))}
    </BookListWrapper>
  )
}

const BookListWrapper = styled.ol`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr auto;
  padding: 20px;

  h2 {
    margin: 0;
    text-align: left;
  }
`
