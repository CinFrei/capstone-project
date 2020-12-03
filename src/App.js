import BookList from './components/BookList'
import FloatingActionButton from './components/FloatingActionButton'
import SearchBooks from './components/SearchBooks'
import styled from 'styled-components/macro'
import useBookData from './hooks/useBookData'

export default function App() {
  const {
    addBook,
    deleteBook,
    handleChange,
    handleSubmit,
    results,
    searchBooksModal,
    selectedBooks,
    setResult,
    toggleSearchBooksModal,
  } = useBookData()

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList
        listName="Bücherregal"
        newBooks={selectedBooks}
        deleteBook={deleteBook}
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
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
