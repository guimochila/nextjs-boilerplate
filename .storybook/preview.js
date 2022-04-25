import { Global } from '@emotion/react'
import globalStyles from '../src/styles/global.ts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
]