import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import BookCard from './BookCard'

/** @component */
export default BookList

BookList.propTypes = {
  listName: PropTypes.string,
  newBooks: PropTypes.array,
}

function BookList({ newBooks, listName, onDelete }) {
  console.log(newBooks)

  return (
    <BookListWrapper>
      <h2>{listName}</h2>
      {newBooks.map((newBook) => (
        <BookCard
          cover={newBook.volumeInfo.imageLinks.thumbnail}
          title={newBook.volumeInfo.title}
          author={newBook.volumeInfo.authors}
          description={newBook.saleInfo.country}
          onCardBtnClick={onDelete}
          buttonName="Buch entfernen."
        />
      ))}
    </BookListWrapper>
  )
}

const BookListWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  padding: 10px;

  h2 {
    text-align: left;
    margin: 0;
  }
`
