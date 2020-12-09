import BookList from './components/BookList'
import FloatingActionButton from './components/FloatingActionButton'
import SearchBooks from './components/SearchBooks'
import styled from 'styled-components/macro'
import useBookData from './hooks/useBookData'
import BookDetail from './components/BookDetail'

export default function App() {
  const {
    addBook,
    book,
    bookDetailModal,
    deleteBook,
    handleChange,
    handleSubmit,
    results,
    searchBooksModal,
    selectedBooks,
    setResult,
    showDetail,
    toggleSearchBooksModal,
  } = useBookData()

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList
        listName="Bücherregal"
        newBooks={selectedBooks}
        deleteBook={deleteBook}
        showDetail={showDetail}
      />
      <FloatingActionButton onClick={toggleSearchBooksModal} />
      {searchBooksModal && (
        <SearchBooks
          addBook={addBook}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onButtonClick={toggleSearchBooksModal}
          results={results}
          setResult={setResult}
        />
      )}
      {bookDetailModal && (
        <BookDetail
          detailBook={book}
          onButtonClick={showDetail}
          buttonName="Schließen"
        />
      )}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
