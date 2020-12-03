import BookCard from './BookCard'
import { render } from '@testing-library/react'

describe('BookCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookCard
        coverUrl="beautiful picture"
        title="Buchtitel"
        author="Buchautor"
        buttonName="Buch hinzufügen."
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
