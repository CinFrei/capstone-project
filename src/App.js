import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

import saveLocally from './lib/saveLocally'
import loadLocally from './lib/loadLocally'
import getBooks from './services/getBooks'

import BookList from './components/BookList'
import SearchBooks from './components/SearchBooks'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  const [books, setBooks] = useState(loadLocally('books') ?? [])
  function addBook(cover, title, author, description) {
    setBooks([{ cover, title, author, description, id: uuidv4() }, ...books])
  }
  function deleteBook(id) {
    setBooks(books.filter((book) => id !== book.id))
  }

  const [searchBooksModal, setSearchBooksModal] = useState(false)
  function toggleSearchBooksModal() {
    setSearchBooksModal(!searchBooksModal)
  }

  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])

  useEffect(() => {
    saveLocally('books', books)
  }, [books])

  const [results, setResult] = useState([])
  const [selectedBooks, setSelectedBooks] = useState([])

  function addGoogleBook(id) {
    const isIncluded = selectedBooks.find((book) => id === book.id)
    if (!isIncluded) {
      const newBook = results.filter((book) => id === book.id)[0]
      setSelectedBooks([...selectedBooks, newBook])
    }
  }

  console.log(selectedBooks)

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList
        newBooks={selectedBooks}
        listName="Bücherregal"
        onDelete={deleteBook}
      />
      <FloatingActionButton onClick={toggleSearchBooksModal} />
      {/* {addBookFormModal && (
        <AddBookForm
          results={results}
          createBook={addBook}
          onButtonClick={toggleAddBookFormModal}
        />
      )} */}
      {searchBooksModal && (
        <SearchBooks
          setResult={setResult}
          results={results}
          addGoogleBook={addGoogleBook}
          onButtonClick={toggleSearchBooksModal}
        />
      )}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
