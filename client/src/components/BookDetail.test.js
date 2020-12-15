import BookDetail from './BookDetail'
import user from '@testing-library/user-event'
import { render } from '@testing-library/react'

const testDatabase = [
  {
    id: '12345',
    volumeInfo: {
      authors: [`Paul Tobin`],
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=6D13DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'The Witcher, Band 2 - Fuchskinder',
      categories: 'Fiction',
      pageCount: '564',
      printType: 'Book',
      publishedDate: '12.12.1992',
      publisher: 'Hüpfer Verlag',
      language: 'DE',
      description:
        'Der Hexer ist wieder auf einer Spannenden Reise, auf der er Monster besiegt, Prinzessin Ciri rettet, mit Dryaden spricht und flotte Sprüche abgibt.',
      subtitle: 'Der Witcher',
    },
  },
]

describe('BookDetail', () => {
  it('renders correctly', () => {
    const onButtonClickMock = jest.fn()
    const { container } = render(
      <BookDetail
        detailBook={testDatabase}
        buttonName="Schließen"
        onButtonClick={onButtonClickMock}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls on button click', () => {
    const onButtonClickMock = jest.fn()
    const { getByText } = render(
      <BookDetail
        detailBook={testDatabase}
        buttonName="Schließen"
        onButtonClick={onButtonClickMock}
      />
    )

    const button = getByText('Schließen')
    user.click(button)

    expect(onButtonClickMock).toHaveBeenCalledTimes(1)
  })
})
