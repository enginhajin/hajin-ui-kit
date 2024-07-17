import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';
import {
  RiMailLine,
  RiUserLine,
  RiCheckboxCircleLine,
  RiEyeLine,
  RiEyeOffLine,
} from 'react-icons/ri';
import { useState } from 'react';
import { css, useTheme } from '@emotion/react';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    variant: {
      control: { type: 'select' },
      options: ['outline', 'underline'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'password', 'email'],
    },
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: InputProps) => (
  <div css={{ width: '15rem' }}>
    <Input {...args} />
  </div>
);
Default.args = {
  type: 'text',
  name: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  state: 'default',
  variant: 'outline',
  description: 'Discription',
};

export const Variants: Story = (args: InputProps) => (
  <div css={{ display: 'flex', gap: '1rem', maxWidth: '34rem', margin: '0 auto' }}>
    <Input {...args} variant="outline" />
    <Input {...args} variant="underline" />
  </div>
);
Variants.args = {
  type: 'text',
  name: '',
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  state: 'default',
  description: 'Discription',
};

export const States: Story = (args: InputProps) => (
  <div css={{ display: 'flex', gap: '1rem' }}>
    <Input {...args} state="default" />
    <Input {...args} state="error" />
    <Input {...args} state="success" />
  </div>
);
States.args = {
  type: 'text',
  name: '',
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  variant: 'outline',
  description: 'Discription',
};

export const WithIcons: Story = (args: InputProps) => (
  <div css={{ display: 'flex', gap: '1rem', maxWidth: '34rem', margin: '0 auto' }}>
    <Input {...args} type="email" variant="outline" state="default" startContent={<RiMailLine />} />
    <Input
      {...args}
      variant="underline"
      state="success"
      startContent={<RiUserLine />}
      endContent={<RiCheckboxCircleLine />}
    />
  </div>
);
WithIcons.args = {
  type: 'text',
  name: '',
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  description: 'Discription',
};

export const WithIconsPassword: Story = (args: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useTheme();
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  return (
    <div css={{ width: '15rem' }}>
      <Input
        {...args}
        type={isPasswordVisible ? 'text' : 'password'}
        endContent={
          <span
            css={css({
              cursor: 'pointer',
              color: `${theme.palette.content.quaternary} !important`,
            })}
          >
            {isPasswordVisible ? (
              <RiEyeOffLine onClick={togglePasswordVisibility} />
            ) : (
              <RiEyeLine onClick={togglePasswordVisibility} />
            )}
          </span>
        }
      />
    </div>
  );
};
WithIconsPassword.args = {
  name: 'password',
  label: 'Password',
  placeholder: 'Enter your Password',
  value: '',
  state: 'default',
  variant: 'outline',
  description: 'Discription',
};

export const Types: Story = (args: InputProps) => (
  <div
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      maxWidth: '34rem',
      margin: '0 auto',
      ' > div': {
        flexBasis: 'calc(50% - 0.5rem)',
      },
    }}
  >
    <Input {...args} type="text" placeholder="Enter your Text" />
    <Input {...args} type="number" placeholder="Enter your Number" />
    <Input {...args} type="password" placeholder="Enter your Password" />
    <Input {...args} type="email" placeholder="Enter your Email" />
  </div>
);
Types.args = {
  name: '',
  label: 'Label',
  value: '',
  state: 'default',
  variant: 'outline',
  description: 'Discription',
};
