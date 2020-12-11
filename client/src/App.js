import styled from 'styled-components/macro'
import useBookData from './hooks/useBookData'
import { Route, Switch } from 'react-router-dom'

import SearchPage from './SearchPage'
import LibaryPage from './LibaryPage'
import MainPage from './MainPage'

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
      <Switch>
        <Route exact path="/">
          <MainPage
            book={book}
            bookDetailModal={bookDetailModal}
            deleteBook={deleteBook}
            selectedBooks={selectedBooks}
            showDetail={showDetail}
          />
        </Route>

        <Route exact path="/search">
          <SearchPage
            addBook={addBook}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            results={results}
            searchBooksModal={searchBooksModal}
            setResult={setResult}
            toggleSearchBooksModal={toggleSearchBooksModal}
          />
        </Route>

        <Route exact path="/libary">
          <LibaryPage
            book={book}
            bookDetailModal={bookDetailModal}
            deleteBook={deleteBook}
            selectedBooks={selectedBooks}
            showDetail={showDetail}
          />
        </Route>
      </Switch>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  position: relative;
`
