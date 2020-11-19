import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import saveLocally from './lib/saveLocally'
import loadLocally from './lib/loadLocally'
import BookList from './components/BookList'
import getBooks from './services/getBooks'
import FloatingActionButton from './components/FloatingActionButton'
import BookCard from './components/BookCard'
import AddBookForm from './components/AddBookForm'

export default function App() {
  const [books, setBooks] = useState(loadLocally('books') ?? [])

  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])

  useEffect(() => {
    saveLocally('books', books)
  }, [books])

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList listName="Bücherregal" />
      <AddBookForm onCreateBook={addBook} />
      {books.map(({ title, author, description, isDone, id }, index) => (
        <BookCard
          onDelete={() => deleteBook(index)}
          onClick={() => toggleBook(index)}
          title={title}
          author={author}
          description={description}
          isDone={isDone}
          key={id}
        />
      ))}
      <FloatingActionButton />
    </StyledApp>
  )

  function deleteBook(index) {
    setBooks([...books.slice(0, index), ...books.slice(index + 1)])
  }

  function toggleBook(index) {
    const book = books[index]
    setBooks([
      ...books.slice(0, index),
      { ...book, isDone: !book.isDone },
      ...books.slice(index + 1),
    ])
  }

  function addBook(title, author, description) {
    setBooks([
      ...books,
      { title, author, description, isDone: false, id: uuidv4() },
    ])
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
