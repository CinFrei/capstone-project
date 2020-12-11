import SearchBooks from './SearchBooks.js'
import user from '@testing-library/user-event'
import { render } from '@testing-library/react'
const axios = require('axios')

jest.mock('axios')

const testDatabase = [
  {
    volumeInfo: {
      authors: ['Paul Tobin'],
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=6D13DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'The Witcher, Band 2 - Fuchskinder',
    },
  },
]

describe('SearchBooks', () => {
  xit('calls handleSubmit with correct data and resets form', async () => {
    const addBookMock = jest.fn()
    const handleChangeMock = jest.fn()
    const handleSubmitMock = jest.fn()
    const onButtonClickMock = jest.fn()
    const resultsMock = jest.fn()
    const setResultMock = jest.fn()

    handleSubmitMock.mockImplementation(() => {
      return {
        then: () => ({
          then: (callback) => callback(testDatabase),
        }),
      }
    })

    axios.get.mockResolvedValue(testDatabase)

    const { getByLabelText, getByText } = render(
      <SearchBooks
        addBook={addBookMock}
        handleChange={handleChangeMock}
        handleSubmit={handleSubmitMock}
        onButtonClick={onButtonClickMock}
        results={resultsMock}
        setResult={setResultMock}
      />
    )

    user.type(getByLabelText('Suche:'), 'Peter Pan')
    user.click(getByText('Suche Starten'))

    expect(handleSubmitMock).toHaveBeenCalledWith(testDatabase)
    expect(getByLabelText('Suche:')).toHaveValue('')
  })
})
