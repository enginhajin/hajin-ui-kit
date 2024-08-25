import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: AccordionProps) => {
  return <Accordion {...args} />;
};

Default.args = { mode: 'single' };

export const Multiple: Story = (args: AccordionProps) => {
  return <Accordion {...args} />;
};

Multiple.args = { mode: 'multiple' };
