import axios from 'axios'
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
  function addBook(cover, title, author, description) {
    setBooks([{ cover, title, author, description, id: uuidv4() }, ...books])
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

  /** abhier geht das tut los */

  const [googleBook, setGoogleBook] = useState(' ')
  const [result, setResult] = useState([])

  function handleChange(event) {
    const googleBook = event.target.value
    setGoogleBook(googleBook)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${googleBook}&key=${process.env.REACT_APP_API_KEY}&maxResults=2`
      )
      .then((data) => {
        setResult(data.data.items)
        console.log(data)
      })
  }

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList newBooks={books} listName="Bücherregal" onDelete={deleteBook} />
      <FloatingActionButton onClick={toggleAddBookFormModal} />
      {addBookFormModal && (
        <AddBookForm
          result={result}
          createBook={addBook}
          onButtonClick={toggleAddBookFormModal}
        />
      )}
      <div>
        <h6>Hier passiert die magie Google Books</h6>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search for Books"
              autoComplete="off"
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
