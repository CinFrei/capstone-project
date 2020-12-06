import BookList from './BookList'
import { render } from '@testing-library/react'

describe('BookList', () => {
  it('renders correctly', () => {
    const deleteBookMock = jest.fn()
    const { container, getByText, getByRole } = render(
      <BookList
        deleteBook={deleteBookMock}
        listName="Bücheregal"
        newBooks={[
          {
            volumeInfo: {
              authors: [`Paul Tobin`],
              imageLinks: {
                thumbnail:
                  'http://books.google.com/books/content?id=6D13DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              },
              title: 'The Witcher, Band 2 - Fuchskinder',
            },
          },
        ]}
      />
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(getByText('Paul Tobin')).toBeInTheDocument()
    expect(getByRole('img')).toBeInTheDocument()
    expect(getByText('The Witcher, Band 2 - Fuchskinder')).toBeInTheDocument()
  })
})
