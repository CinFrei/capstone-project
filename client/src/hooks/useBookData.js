import { useState, useEffect } from 'react'
import axios from 'axios'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

export default function useBookData() {
  const [searchBooks, setSearchBooks] = useState(' ')
  const [results, setResult] = useState([])
  const [selectedBooks, setSelectedBooks] = useState(loadLocally('books') ?? [])
  const [searchBooksModal, setSearchBooksModal] = useState(false)

  useEffect(() => {
    getSelectedBooks().then((books) => setSelectedBooks(books))
  }, [])

  useEffect(() => {
    saveLocally('books', selectedBooks)
  }, [selectedBooks])

  function addBook(id) {
    const isIncluded = selectedBooks.find((book) => id === book.id)
    if (!isIncluded) {
      const newBook = results.filter((book) => id === book.id)[0]
      setSelectedBooks([newBook, ...selectedBooks])
    }
  }

  function deleteBook(id) {
    setSelectedBooks(selectedBooks.filter((book) => id !== book.id))
  }

  async function getSelectedBooks() {
    const res = await fetch('/books')
    return await res.json()
  }

  function handleChange(event) {
    const searchField = event.target.value
    setSearchBooks(searchField)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .get(`http://localhost:8080/search-books?q=${searchBooks}`)
      .then((data) => {
        setResult(data.data)
      })
  }

  function toggleSearchBooksModal() {
    setSearchBooksModal(!searchBooksModal)
  }

  return {
    addBook,
    deleteBook,
    handleChange,
    handleSubmit,
    results,
    searchBooksModal,
    selectedBooks,
    setResult,
    toggleSearchBooksModal,
  }
}
