import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import data from '../data/book-data.json'
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
      {data.map(({ coverUrl, title, author, description, id }) => (
        <BookCard
          key={id}
          coverUrl={coverUrl}
          title={title}
          author={author}
          description={description}
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
