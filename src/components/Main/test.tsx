import { render, screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'

expect.extend(matchers)

import Main from './index'

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react pro/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#06092b')
  })
})
