import styled from 'styled-components/macro'
import useBookData from './hooks/useBookData'

import BookDetail from './components/BookDetail'
import BookList from './components/BookList'
import FloatingActionButton from './components/FloatingActionButton'
import SearchBooks from './components/SearchBooks'

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
    <AppStyled>
      <BookList
        deleteBook={deleteBook}
        listName="Bücherregal"
        newBooks={selectedBooks}
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
          buttonName="Schließen"
          detailBook={book}
          onButtonClick={showDetail}
        />
      )}
    </AppStyled>
  )
}

const AppStyled = styled.div`
  position: relative;
`
