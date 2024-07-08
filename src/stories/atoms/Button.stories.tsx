import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';
import { RiThumbUpLine } from 'react-icons/ri';
import { RiUserLine } from 'react-icons/ri';
import { RiHeart3Line } from 'react-icons/ri';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    palette: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'shadow', 'outline', 'ghost', 'text'],
    },
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'solid',
    palette: 'default',
    children: 'Button',
  },
};

export const Sizes = () => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="xs" variant="solid" palette="default" children="Button" />
      <Button size="sm" variant="solid" palette="default" children="Button" />
      <Button size="md" variant="solid" palette="default" children="Button" />
      <Button size="lg" variant="solid" palette="default" children="Button" />
      <Button size="xl" variant="solid" palette="default" children="Button" />
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: `xs | sm | md | lg | xl *(Control unavailable)*`,
    },
  },
};

export const Variants = () => {
  return (
    <>
      <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="default" children="Button" />
        <Button size="md" variant="shadow" palette="default" children="Button" />
        <Button size="md" variant="outline" palette="default" children="Button" />
        <Button size="md" variant="ghost" palette="default" children="Button" />
        <Button size="md" variant="text" palette="default" children="Button" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="primary" children="Button" />
        <Button size="md" variant="shadow" palette="primary" children="Button" />
        <Button size="md" variant="outline" palette="primary" children="Button" />
        <Button size="md" variant="ghost" palette="primary" children="Button" />
        <Button size="md" variant="text" palette="primary" children="Button" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="secondary" children="Button" />
        <Button size="md" variant="shadow" palette="secondary" children="Button" />
        <Button size="md" variant="outline" palette="secondary" children="Button" />
        <Button size="md" variant="ghost" palette="secondary" children="Button" />
        <Button size="md" variant="text" palette="secondary" children="Button" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="success" children="Button" />
        <Button size="md" variant="shadow" palette="success" children="Button" />
        <Button size="md" variant="outline" palette="success" children="Button" />
        <Button size="md" variant="ghost" palette="success" children="Button" />
        <Button size="md" variant="text" palette="success" children="Button" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="warning" children="Button" />
        <Button size="md" variant="shadow" palette="warning" children="Button" />
        <Button size="md" variant="outline" palette="warning" children="Button" />
        <Button size="md" variant="ghost" palette="warning" children="Button" />
        <Button size="md" variant="text" palette="warning" children="Button" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button size="md" variant="solid" palette="danger" children="Button" />
        <Button size="md" variant="shadow" palette="danger" children="Button" />
        <Button size="md" variant="outline" palette="danger" children="Button" />
        <Button size="md" variant="ghost" palette="danger" children="Button" />
        <Button size="md" variant="text" palette="danger" children="Button" />
      </div>
    </>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story: `solid | shadow | outline | ghost | text *(Control unavailable)*`,
    },
  },
};

export const Palettes = () => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="md" variant="solid" palette="default" children="Button" />
      <Button size="md" variant="solid" palette="primary" children="Button" />
      <Button size="md" variant="solid" palette="secondary" children="Button" />
      <Button size="md" variant="solid" palette="success" children="Button" />
      <Button size="md" variant="solid" palette="warning" children="Button" />
      <Button size="md" variant="solid" palette="danger" children="Button" />
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

export const WithIcons = () => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="md" variant="solid" palette="primary" endContent={<RiThumbUpLine />}>
        Good
      </Button>
      <Button size="md" variant="outline" palette="danger" startContent={<RiUserLine />}>
        Delete User
      </Button>
    </div>
  );
};

WithIcons.parameters = {
  docs: {
    description: {
      story: `endContent | startContent *(Control unavailable)*`,
    },
  },
};

export const OnlyIcon: Story = {
  args: {
    size: 'md',
    variant: 'solid',
    palette: 'danger',
    children: <RiHeart3Line size={'1.25rem'} aria-label="Like" />,
    isOnlyIcon: true,
  },
};

export const IsLoading: Story = {
  args: {
    size: 'md',
    variant: 'solid',
    palette: 'default',
    children: 'Button',
    isLoading: true,
  },
};
