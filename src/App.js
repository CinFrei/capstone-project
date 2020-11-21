import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import FloatingActionButton from './components/FloatingActionButton'

import loadLocally from './lib/loadLocally'
import AddBookForm from './components/AddBookForm'
import getBooks from './services/getBooks'

import BookList from './components/BookList'
import BookCard from './components/BookCard'

export default function App() {
  const [books, setBooks] = useState(loadLocally('books') ?? [])

  const [addBookFormModal, setaddBookFormModal] = useState(false)
  function closeAddBookFormModal() {
    setaddBookFormModal(false)
  }
  function openAddBookFormModal() {
    setaddBookFormModal(true)
  }

  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList listName="Bücherregal" />
      <FloatingActionButton onClick={openAddBookFormModal} />
      {addBookFormModal && (
        <AddBookForm
          onCreateBook={addBook}
          onClickDownButton={closeAddBookFormModal}
        />
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

  function addBook(title, author, description) {
    setBooks([...books, { title, author, description, id: uuidv4() }])
  }
}

const StyledApp = styled.div`
  position: relative;

  h1 {
    margin: 0px;
    color: var(--dark-blue);
    text-align: center;
  }
`
