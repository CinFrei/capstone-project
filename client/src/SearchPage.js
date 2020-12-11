import SearchBooks from './components/SearchBooks'

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

export default SearchPage
