import { useState, useEffect } from 'react'
import axios from 'axios'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

export default function useBookData() {
  const [googleSearch, setGoogleSearch] = useState(' ')
  const [results, setResult] = useState([])
  const [selectedBooks, setSelectedBooks] = useState(loadLocally('books') ?? [])

  useEffect(() => {
    getSelectedBooks().then((books) => setSelectedBooks(books))
  }, [])

  useEffect(() => {
    saveLocally('books', selectedBooks)
  }, [selectedBooks])

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

  function addGoogleBook(id) {
    const isIncluded = selectedBooks.find((book) => id === book.id)
    if (!isIncluded) {
      const newBook = results.filter((book) => id === book.id)[0]
      setSelectedBooks([...selectedBooks, newBook])
    }
  }

  function deleteBook(id) {
    setSelectedBooks(selectedBooks.filter((book) => id !== book.id))
  }

  const [searchBooksModal, setSearchBooksModal] = useState(false)
  function toggleSearchBooksModal() {
    setSearchBooksModal(!searchBooksModal)
  }

  function getSelectedBooks() {
    return fetch('/books').then((res) => res.json())
  }

  return {
    addGoogleBook,
    handleChange,
    deleteBook,
    handleSubmit,
    toggleSearchBooksModal,
    selectedBooks,
    searchBooksModal,
    setResult,
    results,
  }
}
