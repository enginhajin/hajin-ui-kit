import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { ChangeEvent, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    palette: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const useCheckedState = (initialState = false) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return { isChecked, handleOnChange };
};

export const Default: Story = (args: SwitchProps) => {
  const { isChecked, handleOnChange } = useCheckedState();
  return <Switch {...args} checked={isChecked} onChange={handleOnChange} />;
};

Default.args = { palette: 'default' };

export const WithIcons: Story = (args: SwitchProps) => {
  const { isChecked, handleOnChange } = useCheckedState();
  return (
    <Switch
      {...args}
      checked={isChecked}
      onChange={handleOnChange}
      startContent={<RiSunFill />}
      endContent={<RiMoonFill />}
    />
  );
};

WithIcons.args = { palette: 'primary' };

export const WithLabel: Story = (args: SwitchProps) => {
  const { isChecked, handleOnChange } = useCheckedState();
  return (
    <Switch {...args} checked={isChecked} onChange={handleOnChange}>
      Switch Mode
    </Switch>
  );
};

WithLabel.args = { palette: 'success' };
