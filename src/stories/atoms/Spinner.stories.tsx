import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

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

export const Sizes = () => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Spinner size="sm" palette="default" />
      <Spinner size="md" palette="default" />
      <Spinner size="lg" palette="default" />
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: `sm | md | lg *(Control unavailable)*`,
    },
  },
};

export const Palettes = () => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Spinner size="md" palette="default" />
      <Spinner size="md" palette="primary" />
      <Spinner size="md" palette="secondary" />
      <Spinner size="md" palette="success" />
      <Spinner size="md" palette="warning" />
      <Spinner size="md" palette="danger" />
    </div>
  );
};

Palettes.parameters = {
  docs: {
    description: {
      story: `default | primary | secondary | success | warning | danger *(Control unavailable)*`,
    },
  },
};
