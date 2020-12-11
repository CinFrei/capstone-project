import BookDetail from './components/BookDetail'
import BookList from './components/BookList'

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
        deleteBook={deleteBook}
        listName="Bücherregal"
        newBooks={selectedBooks}
        showDetail={showDetail}
      />
      {bookDetailModal && (
        <BookDetail
          buttonName="Schließen"
          detailBook={book}
          onButtonClick={showDetail}
        />
      )}
    </div>
  )
}

export default LibaryPage
