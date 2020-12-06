import FloatingActionButton from './FloatingActionButton'
import { render } from '@testing-library/react'

describe('FloatingActionButton', () => {
  it('renders correctly', () => {
    const { container } = render(<FloatingActionButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
