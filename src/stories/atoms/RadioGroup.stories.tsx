import type { Meta, StoryObj } from '@storybook/react';
import { RadioProps } from './Radio';
import { RadioGroup, RadioOption } from './RadioGroup';
import { ChangeEvent, useState } from 'react';

const meta = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  argTypes: {
    label: { type: 'string' },
    palette: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const radioOptions: RadioOption[] = [
  { label: 'Option1', name: 'option1', value: 'option1' },
  { label: 'Option2', name: 'option2', value: 'option2' },
  { label: 'Option3', name: 'option3', value: 'option3' },
];

export const Default: Story = (args: RadioProps) => {
  const [currentValue, setCurrentValue] = useState('option1');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  return (
    <RadioGroup
      {...args}
      options={radioOptions}
      onChange={handleOnChange}
      currentValue={currentValue}
    />
  );
};
Default.args = {
  palette: 'default',
};

const withLabelRadioOptions: RadioOption[] = [
  { label: 'option4', name: 'option4', value: 'option4' },
  { label: 'option5', name: 'option5', value: 'option5' },
  { label: 'option6', name: 'option6', value: 'option6' },
];
export const WithLabel: Story = (args: RadioProps) => {
  const [currentValue, setCurrentValue] = useState('option4');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };
  return (
    <RadioGroup
      {...args}
      options={withLabelRadioOptions}
      onChange={handleOnChange}
      currentValue={currentValue}
    />
  );
};
WithLabel.args = {
  label: 'Options',
  palette: 'primary',
};

const columnRadioOptions: RadioOption[] = [
  { label: 'Option7', name: 'Option7', value: 'Option7' },
  { label: 'Option8', name: 'Option8', value: 'Option8' },
  { label: 'Option9', name: 'Option9', value: 'Option9' },
];
export const Column: Story = (args: RadioProps) => {
  const [currentValue, setCurrentValue] = useState('Option7');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };
  return (
    <RadioGroup
      {...args}
      options={columnRadioOptions}
      onChange={handleOnChange}
      currentValue={currentValue}
    />
  );
};
Column.args = {
  label: 'Options',
  palette: 'secondary',
  direction: 'column',
};
