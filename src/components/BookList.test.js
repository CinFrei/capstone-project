import BookList from './BookList'
import { render } from '@testing-library/react'

describe('BookList', () => {
  it('renders correctly', () => {
    const { container } = render(<BookList listName="Bücherregal"/>)
    expect(container.firstChild).toMatchSnapshot()
  })
  //...
})