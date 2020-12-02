import styled from 'styled-components/macro'
import useBookData from './hooks/useBookData'

import BookList from './components/BookList'
import SearchBooks from './components/SearchBooks'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  const {
    addGoogleBook,
    handleChange,
    deleteBook,
    handleSubmit,
    toggleSearchBooksModal,
    selectedBooks,
    searchBooksModal,
    results,
    setResult,
  } = useBookData()

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList
        listName="Bücherregal"
        newBooks={selectedBooks}
        onDelete={deleteBook}
      />
      <FloatingActionButton onClick={toggleSearchBooksModal} />
      {searchBooksModal && (
        <SearchBooks
          setResult={setResult}
          results={results}
          addGoogleBook={addGoogleBook}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onButtonClick={toggleSearchBooksModal}
        />
      )}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
