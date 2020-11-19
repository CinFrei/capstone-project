import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

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

  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList listName="Bücherregal" />
      <AddBookForm onCreateBook={addBook} />
      {books.map(({ title, author, description, id }, index) => (
        <BookCard
          title={title}
          author={author}
          description={description}
          key={id}
        />
      ))}
      <FloatingActionButton />
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
