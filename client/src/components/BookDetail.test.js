import BookDetail from './BookDetail'
import user from '@testing-library/user-event'
import { render } from '@testing-library/react'

const testDatabase = [
  {
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
  xit('renders correctly', () => {
    const onButtonClick = jest.fn()
    const { container, getByText } = render(
      <BookDetail
        detailBook={testDatabase}
        buttonName="Schließen"
        onButtonClick={onButtonClick}
      />
    )

    user.click(getByText('Schließen'))

    expect(container.firstChild).toMatchSnapshot()
    expect(getByText('Schließen')).toHaveBeenCalledWith(onButtonClick)
  })
})
