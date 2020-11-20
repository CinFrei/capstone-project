import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import { useModal } from './hooks/useModal'
import FloatingActionButton from './components/FloatingActionButton'

import loadLocally from './lib/loadLocally'
import AddBookForm from './components/AddBookForm'
import getBooks from './services/getBooks'

import BookList from './components/BookList'
import BookCard from './components/BookCard'

export default function App() {
  const { show, RenderModal } = useModal()
  const [books, setBooks] = useState(loadLocally('books') ?? [])

  useEffect(() => {
    getBooks().then((books) => setBooks(books))
  }, [])

  return (
    <StyledApp>
      <div>
        <h1>Book Owls</h1>
        <BookList listName="Bücherregal" />
        <FloatingActionButton onClick={show} />
        <RenderModal>
          <AddBookForm onCreateBook={addBook} />
          {books.map(({ title, author, description, id }, index) => (
            <BookCard
              title={title}
              author={author}
              description={description}
              key={id}
            />
          ))}
        </RenderModal>
      </div>
      <div id="modal-root" />
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
