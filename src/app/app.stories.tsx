import type { Meta, StoryObj } from '@storybook/react'
import { App } from './app'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
}
export default meta
type Story = StoryObj<typeof App>

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Hello NX!/gi)).toBeTruthy()
  },
}
