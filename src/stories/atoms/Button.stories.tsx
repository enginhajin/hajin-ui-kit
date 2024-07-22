import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
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

export const Sizes: Story = (args: ButtonProps) => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} size="xs" />
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
    </div>
  );
};

Sizes.args = {
  variant: 'solid',
  palette: 'default',
  children: 'Button',
};

export const Variants: Story = (args: ButtonProps) => {
  return (
    <>
      <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="default" />
        <Button {...args} variant="shadow" palette="default" />
        <Button {...args} variant="outline" palette="default" />
        <Button {...args} variant="ghost" palette="default" />
        <Button {...args} variant="text" palette="default" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="primary" />
        <Button {...args} variant="shadow" palette="primary" />
        <Button {...args} variant="outline" palette="primary" />
        <Button {...args} variant="ghost" palette="primary" />
        <Button {...args} variant="text" palette="primary" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="secondary" />
        <Button {...args} variant="shadow" palette="secondary" />
        <Button {...args} variant="outline" palette="secondary" />
        <Button {...args} variant="ghost" palette="secondary" />
        <Button {...args} variant="text" palette="secondary" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="success" />
        <Button {...args} variant="shadow" palette="success" />
        <Button {...args} variant="outline" palette="success" />
        <Button {...args} variant="ghost" palette="success" />
        <Button {...args} variant="text" palette="success" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="warning" />
        <Button {...args} variant="shadow" palette="warning" />
        <Button {...args} variant="outline" palette="warning" />
        <Button {...args} variant="ghost" palette="warning" />
        <Button {...args} variant="text" palette="warning" />
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
        <Button {...args} variant="solid" palette="danger" />
        <Button {...args} variant="shadow" palette="danger" />
        <Button {...args} variant="outline" palette="danger" />
        <Button {...args} variant="ghost" palette="danger" />
        <Button {...args} variant="text" palette="danger" />
      </div>
    </>
  );
};

Variants.args = {
  size: 'md',
  children: 'Button',
};

export const Palettes: Story = (args: ButtonProps) => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} palette="default" />
      <Button {...args} palette="primary" />
      <Button {...args} palette="secondary" />
      <Button {...args} palette="success" />
      <Button {...args} palette="warning" />
      <Button {...args} palette="danger" />
    </div>
  );
};

Palettes.args = {
  size: 'md',
  variant: 'solid',
  children: 'Button',
};

export const WithIcons: Story = (args: ButtonProps) => {
  return (
    <div css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} variant="solid" palette="primary" endContent={<RiThumbUpLine />}>
        Good
      </Button>
      <Button {...args} variant="outline" palette="danger" startContent={<RiUserLine />}>
        Delete User
      </Button>
    </div>
  );
};

WithIcons.args = {
  size: 'md',
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
