import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

import loadLocally from './lib/loadLocally'
import getBooks from './services/getBooks'

import BookList from './components/BookList'
import BookCard from './components/BookCard'
import AddBookForm from './components/AddBookForm'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  const [books, setBooks] = useState(loadLocally('books') ?? [])
  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])
  function addBook(title, author, description) {
    setBooks([...books, { title, author, description, id: uuidv4() }])
  }

  const [addBookFormModal, setAddBookFormModal] = useState(false)
  function onButtonClick() {
    setAddBookFormModal(!addBookFormModal)
  }

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList newBooks={books} listName="Bücherregal" />
      <FloatingActionButton onClick={onButtonClick} />
      {addBookFormModal && (
        <AddBookForm createBook={addBook} onButtonClick={onButtonClick} />
      )}
      {books.map(({ title, author, description, id }, index) => (
        <BookCard
          title={title}
          author={author}
          description={description}
          key={id}
        />
      ))}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;
`
