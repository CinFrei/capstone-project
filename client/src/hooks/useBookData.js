import { useState, useEffect } from 'react'
import axios from 'axios'

import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

export default function useBookData() {
  const [book, setBook] = useState([])
  const [bookDetailModal, setBookDetailModal] = useState(false)
  const [results, setResult] = useState([])
  const [searchBooks, setSearchBooks] = useState(' ')
  const [searchBooksModal, setSearchBooksModal] = useState(false)
  const [selectedBooks, setSelectedBooks] = useState(loadLocally('books') ?? [])

  useEffect(() => {
    getSelectedBooks().then((books) => setSelectedBooks(books))
  }, [])

  async function getSelectedBooks() {
    const res = await fetch('/books')
    return await res.json()
  }

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
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

  function showDetail(id) {
    setBook(selectedBooks.filter((book) => id === book.id))
    setBookDetailModal(!bookDetailModal)
  }

  function toggleSearchBooksModal() {
    setSearchBooksModal(!searchBooksModal)
  }

  return {
    addBook,
    book,
    bookDetailModal,
    deleteBook,
    handleChange,
    handleSubmit,
    results,
    searchBooksModal,
    selectedBooks,
    setResult,
    showDetail,
    toggleSearchBooksModal,
  }
}
