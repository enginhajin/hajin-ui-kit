import { css, useTheme } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const data = [
  {
    title: 'Accordion 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Accordion 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Accordion 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export interface AccordionProps {
  mode: 'single' | 'multiple';
}

export const Accordion = ({ mode }: AccordionProps) => {
  const [expandItems, setExpandItems] = useState<number[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpandItem = (idx: number) => {
    if (mode === 'single') {
      setExpandItems((prevItems) => (prevItems.includes(idx) ? [] : [idx]));
    } else {
      setExpandItems((prevItems) =>
        prevItems.includes(idx) ? prevItems.filter((item) => item !== idx) : [...prevItems, idx],
      );
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.height = expandItems.includes(idx) ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, [expandItems]);

  const theme = useTheme();
  const ItemStyles = css({
    borderBottom: `1px solid ${theme.palette.default[200]}`,
  });
  const headerStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1.25rem 0',
    background: 'transparent',
    cursor: 'pointer',
  });
  const titleStyles = css({
    fontSize: `${theme.text.size.lg}`,
    color: `${theme.palette.content.primary}`,
  });
  const arrowStyles = (isExpand: boolean) =>
    css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '1.25em',
      height: '1.25rem',
      fontSize: `${theme.text.size.xl}`,
      color: `${theme.palette.content.quaternary}`,
      transform: isExpand ? 'rotate(-180deg)' : 'rotate(0)',
      transition: 'transform 0.2s',
    });
  const contentStyles = () =>
    css({
      overflow: 'hidden',
      transition: 'height 0.3s ease',
      '&> div': {
        padding: '0.5rem 0 1rem',
      },
    });

  return (
    <ul>
      {data.map((item, idx) => {
        const { title, content } = item;
        const isExpand = expandItems.includes(idx);

        return (
          <li key={idx} css={ItemStyles}>
            <button
              css={headerStyles}
              onClick={() => {
                toggleExpandItem(idx);
              }}
            >
              <div css={titleStyles}>{title}</div>
              <span css={arrowStyles(isExpand)}>
                <RiArrowDownSLine />
              </span>
            </button>
            <div
              ref={(el) => {
                el && (contentRefs.current[idx] = el);
              }}
              css={contentStyles}
            >
              <div>{content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
