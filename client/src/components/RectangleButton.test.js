import RectangleButton from './RectangleButton'
import { render } from '@testing-library/react'

describe('RectangleButton', () => {
  it('renders correctly', () => {
    const { container } = render(<RectangleButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
