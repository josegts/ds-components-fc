import { PlusIcon } from '@components/atoms';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Icons/PlusIcon',
  component: PlusIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'dsdsdsds',
  },
};
