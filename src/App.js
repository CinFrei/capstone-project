import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

import saveLocally from './lib/saveLocally'
import loadLocally from './lib/loadLocally'
import getBooks from './services/getBooks'

import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  const [books, setBooks] = useState(loadLocally('books') ?? [])
  function addBook(title, author, description) {
    setBooks([{ title, author, description, id: uuidv4() }, ...books])
  }
  function deleteBook(id) {
    setBooks(books.filter((book) => id !== book.id))
  }

  const [addBookFormModal, setAddBookFormModal] = useState(false)
  function toggleAddBookFormModal() {
    setAddBookFormModal(!addBookFormModal)
  }

  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])

  useEffect(() => {
    saveLocally('books', books)
  }, [books])

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList newBooks={books} listName="Bücherregal" onDelete={deleteBook} />
      <FloatingActionButton onClick={toggleAddBookFormModal} />
      {addBookFormModal && (
        <AddBookForm
          createBook={addBook}
          onButtonClick={toggleAddBookFormModal}
        />
      )}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
