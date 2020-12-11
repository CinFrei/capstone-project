import BookCard from './BookCard'
import { render } from '@testing-library/react'

describe('BookCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookCard
        author="Buchautor"
        buttonName="Buch hinzufügen."
        cover="beautiful picture"
        title={['Paul Tobin']}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
