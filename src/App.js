import styled from 'styled-components'
import BookList from './components/BookList'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList listName="Bücherregal" />
      <FloatingActionButton />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  position: relative;

  h1 {
    margin: 0px;
    color: var(--dark-blue);
    text-align: center;
  }
`
