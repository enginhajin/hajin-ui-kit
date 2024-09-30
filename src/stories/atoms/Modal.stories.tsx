import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';
import { useState } from 'react';
import { Button } from './Button';
import { css } from '@emotion/react';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        css={css({
          padding: '4rem',
        })}
      >
        <Button variant="solid" palette="default" size="md" onClick={handleOpen}>
          Open Modal
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalHeader>
          <h2>Modal Title</h2>
        </ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" palette="danger" size="md" onClick={handleClose}>
            Close
          </Button>
          <Button variant="solid" palette="primary" size="md" onClick={handleClose}>
            Action
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

Default.args = {};
