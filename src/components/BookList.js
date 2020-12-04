import BookCard from './BookCard'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default BookList

BookList.propTypes = {
  listName: PropTypes.string,
  newBooks: PropTypes.array,
}

function BookList({ newBooks, listName, deleteBook }) {
  return (
    <BookListWrapper>
      <h2>{listName}</h2>
      {newBooks.map((newBook) => (
        <BookCard
          author={newBook.volumeInfo.authors}
          buttonName="Buch entfernen."
          cover={newBook.volumeInfo.imageLinks.thumbnail}
          key={newBook.id}
          onCardBtnClick={() => deleteBook(newBook.id)}
          title={newBook.volumeInfo.title}
        />
      ))}
    </BookListWrapper>
  )
}

const BookListWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr auto;
  padding: 10px;

  h2 {
    margin: 0;
    text-align: left;
  }
`
