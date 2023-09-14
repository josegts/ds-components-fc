import { Typography } from '../../../components/atoms/typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['h1', 'h2'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'dsdsdsds',
  },
};

export const Variant: Story = {
  args: {
    children: 'dsdsdsds',
    variant: 'h1',
  },
};
