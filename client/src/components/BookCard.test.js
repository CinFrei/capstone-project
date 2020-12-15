import BookCard from './BookCard'
import { render } from '@testing-library/react'

describe('BookCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookCard
        author={['Paul Tobin']}
        buttonName="Buch hinzufügen."
        cover="beautiful picture"
        title="Peter Pan"
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
