import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import BookDetail from './components/BookDetail'
import BookList from './components/BookList'

import { ReactComponent as BookOwlsIcon } from './assets/book-owls.svg'

export default MainPage

MainPage.propTypes = {
  book: PropTypes.array,
  bookDetailModal: PropTypes.func,
  deleteBook: PropTypes.func,
  selectedBooks: PropTypes.array,
  showDetail: PropTypes.func,
}

function MainPage({
  book,
  bookDetailModal,
  deleteBook,
  selectedBooks,
  showDetail,
}) {
  return (
    <MainStyled>
      <h1>Hallo Nachteule</h1>
      <BookOwlsIconWrapper>
        <BookOwlsIcon />
      </BookOwlsIconWrapper>
      <BookListStyled newBooks={selectedBooks} showDetail={showDetail} />
      {bookDetailModal && (
        <BookDetailStyled
          buttonName="Schließen"
          buttonDeleteName="Buch entfernen."
          detailBook={book}
          newBooks={selectedBooks}
          onButtonClick={showDetail}
          deleteBook={deleteBook}
        />
      )}
    </MainStyled>
  )
}

const MainStyled = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  min-width: 0;
  position: relative;

  h1 {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 2em;
    text-align: left;
  }
`

const BookListStyled = styled(BookList)`
  grid-column: 1 / span 2;
`

const BookDetailStyled = styled(BookDetail)`
  grid-column: 1 / span 2;
`

const BookOwlsIconWrapper = styled.div`
  svg {
    margin-top: 13px;
    height: 110px;
  }
`
