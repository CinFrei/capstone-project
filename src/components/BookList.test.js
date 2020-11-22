import BookList from './BookList'
import { render } from '@testing-library/react'

describe('BookList', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookList
        listName="Bücherregal"
        newBooks={[
          {
            title: 'Pauls Rosa Welt',
            author: 'Paulchen Panter',
            description: 'Rosa ist die Beste Farbe',
            id: '007',
          },
        ]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  //...
})
