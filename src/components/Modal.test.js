import Modal from './Modal'
import { render } from '@testing-library/react'

describe('Modal', () => {
  it('renders correctly', () => {
    const { container } = render(<Modal />)
    expect(container.firstChild).toMatchSnapshot()
  })
  //...
})
