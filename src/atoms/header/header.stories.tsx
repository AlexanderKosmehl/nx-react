import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
}
export default meta
type Story = StoryObj<typeof Header>

export const Heading: Story = {
  args: {
    text: 'Test Header',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Test Header/gi)).toBeTruthy()
  },
}
