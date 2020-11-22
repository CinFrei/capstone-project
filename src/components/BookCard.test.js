import BookCard from './BookCard'
import { render } from '@testing-library/react'

describe('BookCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookCard
        coverUrl="blub"
        title="Buchtitel"
        author="Buchautor"
        description="Buchbeschreibung"
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
