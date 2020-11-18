import styled from 'styled-components'
import BookList from './components/BookList'

export default function App() {
  return (
    <StyledApp>
      <h1>Book Owls</h1>
      <BookList listName="Bücherregal" />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;

  h1 {
    color: var(--dark-blue);
  }
`
