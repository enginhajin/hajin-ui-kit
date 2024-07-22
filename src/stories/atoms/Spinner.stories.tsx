import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    palette: {
      control: { type: 'select' },
      options: ['current', 'default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
    palette: 'default',
  },
};

export const Sizes: Story = (args: SpinnerProps) => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  );
};
Sizes.args = {
  palette: 'default',
};

export const Palettes: Story = (args: SpinnerProps) => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Spinner {...args} palette="default" />
      <Spinner {...args} palette="primary" />
      <Spinner {...args} palette="secondary" />
      <Spinner {...args} palette="success" />
      <Spinner {...args} palette="warning" />
      <Spinner {...args} palette="danger" />
    </div>
  );
};
Palettes.args = {
  size: 'md',
};
