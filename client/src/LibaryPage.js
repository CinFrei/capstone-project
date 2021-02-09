import PropTypes from 'prop-types'

import BookDetail from './components/BookDetail'
import BookList from './components/BookList'

export default LibaryPage

LibaryPage.propTypes = {
  book: PropTypes.array,
  bookDetailModal: PropTypes.func,
  deleteBook: PropTypes.func,
  selectedBooks: PropTypes.array,
  showDetail: PropTypes.func,
}

function LibaryPage({
  book,
  bookDetailModal,
  deleteBook,
  selectedBooks,
  showDetail,
}) {
  return (
    <div>
      <BookList
        listName="Bücherregal"
        newBooks={selectedBooks}
        showDetail={showDetail}
      />
      {bookDetailModal && (
        <BookDetail
          buttonName="Schließen"
          detailBook={book}
          onButtonClick={showDetail}
          deleteBook={deleteBook}
        />
      )}
    </div>
  )
}
