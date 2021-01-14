import PropTypes from 'prop-types'

import SearchBooks from './components/SearchBooks'

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
  setResult,
}) {
  return (
    <div>
      <SearchBooks
        addBook={addBook}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        results={results}
        setResult={setResult}
      />
    </div>
  )
}
