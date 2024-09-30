import { css, Global, keyframes, useTheme } from '@emotion/react';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { hexToRgba } from '../../utils';
import { mq } from '../../media-query';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ModalSubContentProps {
  children: ReactNode;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const slideUp = keyframes`
  0% {
    transform: translateY(1.25rem)
  }
  100% {
    transform: translateY(0)
  }
`;
const slideDown = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(1.25rem)
  }
`;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isAnimating && !isOpen) return null;

  const modalRoot = document.getElementById('root-modal');
  if (!modalRoot) return null;

  const theme = useTheme();
  const overlayStyles = css({
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: `${hexToRgba(theme.palette.default[800], 0.7)}`,
    transition: 'visibility 0.3s',
    animation: `${isOpen ? fadeIn : fadeOut} 0.3s`,
    zIndex: 9000,
    [mq('sm')]: {
      alignItems: 'center',
      padding: '1.25rem',
    },
  });
  const containerStyles = css({
    width: '100%',
    padding: '2rem 1.25rem',
    borderTopRightRadius: `${theme.radius.lg}`,
    borderTopLeftRadius: `${theme.radius.lg}`,
    background: `${theme.palette.layout.background}`,
    animation: `${isOpen ? slideUp : slideDown} 0.3s`,
    [mq('sm')]: {
      maxWidth: '25rem',
      borderRadius: `${theme.radius.lg}`,
    },
  });

  return (
    <>
      <Global
        styles={css`
          body,
          #root {
            overflow: hidden;
          }
        `}
      />
      {ReactDOM.createPortal(
        <div css={overlayStyles} onClick={onClose}>
          <div css={containerStyles} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        modalRoot,
      )}
    </>
  );
};

const ModalHeader = ({ children }: ModalSubContentProps) => {
  const theme = useTheme();
  const headerStyles = css({
    h2: {
      fontSize: `${theme.text.size.lg}`,
    },
  });

  return <header css={headerStyles}>{children}</header>;
};
const ModalBody = ({ children }: ModalSubContentProps) => {
  const theme = useTheme();
  const bodyStyles = css({
    padding: '1.25rem 0',
    p: {
      fontSize: `${theme.text.size.md}`,
    },
  });
  return <div css={bodyStyles}>{children}</div>;
};
const ModalFooter = ({ children }: ModalSubContentProps) => {
  const footerStyles = css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  });
  return <footer css={footerStyles}>{children}</footer>;
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
