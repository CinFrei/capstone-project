import BookDetail from './BookDetail'
import { render } from '@testing-library/react'

describe('BookDetail', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookDetail
        cover="beautiful picture"
        title={['Paul Tobin']}
        author="Buchautor"
        buttonName="Buch hinzufügen."
        subtitle="Der Witcher"
        categories="Fiction"
        pageCount="564"
        printType="Book"
        publishedDate="12.12.1992"
        publisher="Hüpfer Verlag"
        language="DE"
        description="Der Hexer ist wieder auf einer Spannenden Reise, auf der er Monster besiegt, Prinzessin Ciri rettet, mit Dryaden spricht und flotte Sprüche abgibt."
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
