import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { ChangeEvent, useCallback, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Palette } from '@emotion/react';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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

export const Default: Story = (args: CheckboxProps) => {
  const { isChecked, handleOnChange } = useCheckedState();

  return (
    <Checkbox {...args} checked={isChecked} onChange={handleOnChange}>
      Option
    </Checkbox>
  );
};
Default.args = {
  palette: 'default',
};

export const CustomIcon: Story = (args: CheckboxProps) => {
  const { isChecked, handleOnChange } = useCheckedState();

  return (
    <Checkbox {...args} checked={isChecked} onChange={handleOnChange}>
      Option
    </Checkbox>
  );
};
CustomIcon.args = {
  palette: 'default',
  customIcon: <RiCloseLine />,
};

type checkboxItem = { palette: Palette; children: string };
const checkboxList: checkboxItem[] = [
  { palette: 'default', children: 'Option1' },
  { palette: 'primary', children: 'Option2' },
  { palette: 'secondary', children: 'Option3' },
  { palette: 'success', children: 'Option4' },
  { palette: 'warning', children: 'Option5' },
  { palette: 'danger', children: 'Option6' },
];

export const Group: Story = (args: CheckboxProps) => {
  const [checkedList, setCheckedList] = useState<Array<Palette>>([]);

  const onCheckedElement = useCallback(
    (checked: boolean, palette: Palette) => {
      if (checked) {
        setCheckedList([...checkedList, palette]);
      } else {
        setCheckedList(checkedList.filter((item) => item !== palette));
      }
    },
    [checkedList],
  );

  return (
    <div css={{ display: 'flex', gap: '1rem' }}>
      {checkboxList.map((item) => (
        <Checkbox
          {...args}
          key={item.palette}
          palette={item.palette}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onCheckedElement(e.target.checked, item.palette);
          }}
          checked={checkedList.includes(item.palette)}
          children={item.children}
        />
      ))}
    </div>
  );
};

Group.args = {};
