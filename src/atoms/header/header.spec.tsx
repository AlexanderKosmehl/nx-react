import { render } from '@testing-library/react'

import Header from './header'

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header text="" />)
    expect(baseElement).toBeTruthy()
  })

  it('should display inner text correctly', () => {
    const testString = 'Hello NX'
    const { getByText } = render(<Header text={testString} />)

    expect(getByText(/Hello NX/)).toBeTruthy()
  })
})
