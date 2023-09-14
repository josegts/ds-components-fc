import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/atoms/button/index';
import { PlusIcon } from '../../../components/atoms/icons/plus-icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['filled', 'text', 'outlined', 'elevated'],
      defaultValue: 'filled',
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['base', 'large', 'small'],
      defaultValue: 'base',
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Principal: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    disabled: false,
  },
};

export const IconLeft: Story = {
  render: ({ variant, size }) => (
    <Button variant={variant} size={size} iconLeft={<PlusIcon />}>
      Label
    </Button>
  ),
  args: {
    variant: 'filled',
    size: 'base',
  },
};

export const IconRight: Story = {
  render: ({ variant, size }) => (
    <Button variant={variant} size={size} iconRight={<PlusIcon />}>
      Label
    </Button>
  ),
  args: {
    variant: 'filled',
    size: 'base',
  },
};
