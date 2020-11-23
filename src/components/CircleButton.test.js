import CircleButton from './CircleButton'
import { render } from '@testing-library/react'

describe('CircleButton', () => {
  it('renders correctly', () => {
    const { container } = render(<CircleButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
