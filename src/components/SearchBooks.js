import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'

import BookCard from './BookCard'
import RectangleButton from './RectangleButton'
import { ReactComponent as DownArrow } from '../assets/arrow-down.svg'

/** @component */
export default function SearchBooks({
  setResult,
  results,
  onButtonClick,
  addGoogleBook,
}) {
  const [googleSearch, setGoogleSearch] = useState(' ')

  function handleChange(event) {
    const googleSearch = event.target.value
    setGoogleSearch(googleSearch)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${googleSearch}&key=${process.env.REACT_APP_API_KEY}&maxResults=2`
      )
      .then((data) => {
        setResult(data.data.items)
      })
  }

  return (
    <StyledModal>
      <StyledButton onClick={onButtonClick}>
        <DownArrow />
      </StyledButton>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          Suche:
          <input
            type="text"
            onChange={handleChange}
            placeholder="Suche nach Büchern"
            autoComplete="off"
          />
        </label>
        <RectangleButton type="submit" buttonName="Suche Starten" />
        <ul>
          {results.map((googleBook) => (
            <BookCard
              key={googleBook.id}
              cover={googleBook.volumeInfo.imageLinks.thumbnail}
              title={googleBook.volumeInfo.title}
              author={googleBook.volumeInfo.authors}
              description={googleBook.saleInfo.country}
              handleClick={() => addGoogleBook(googleBook.id)}
            ></BookCard>
          ))}
        </ul>
      </FormStyled>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 10;

  display: grid;
  place-items: center;

  background: var(--secondary-background-gradient);
`

const StyledButton = styled.button`
  width: 80px;
  height: 20px;
  border: none;
  background-color: transparent;
  justify-self: end;

  svg {
    width: 25px;
  }
  svg .st0 {
    fill: var(--primary-anthrazit);
  }
`

const FormStyled = styled.form`
  margin: 10px 10px 20px;
  padding: 10px;
  border: 2px solid var(--dark-rose);
  border-radius: 3px;

  input {
    font-size: 1em;
    width: 100%;
    margin: 10px 0;
    padding: 4px 0;
    border: 2px solid var(--light-rose);
    border-radius: 3px;
  }
`
