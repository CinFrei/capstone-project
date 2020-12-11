import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import SearchBooks from './components/SearchBooks'
import Navigation from './components/Navigation'

export default SearchPage

SearchPage.propTypes = {
  book: PropTypes.array,
  addBook: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  results: PropTypes.array,
  searchBooksModal: PropTypes.func,
  setResult: PropTypes.func,
  toggleSearchBooksModal: PropTypes.func,
}

function SearchPage({
  addBook,
  handleChange,
  handleSubmit,
  results,
  searchBooksModal,
  setResult,
  toggleSearchBooksModal,
}) {
  return (
    <div>
      <h1>Die Suche geht los</h1>
      {searchBooksModal && (
        <SearchBooks
          addBook={addBook}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onButtonClick={toggleSearchBooksModal}
          results={results}
          setResult={setResult}
        />
      )}
    </div>
  )
}
