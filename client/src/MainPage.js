import BookDetail from './components/BookDetail'
import BookList from './components/BookList'
import Navigation from './components/Navigation'

function MainPage({
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
      <Navigation />
    </div>
  )
}

export default MainPage
