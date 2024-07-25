import { css, Palette, useTheme } from '@emotion/react';
import { ChangeEvent, ComponentProps, ReactNode } from 'react';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface SwitchProps extends ComponentProps<'input'> {
  palette: Palette;
  children: ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Switch = ({
  palette,
  children,
  checked,
  onChange,
  disabled,
  startContent,
  endContent,
  ...props
}: SwitchProps) => {
  const theme = useTheme();
  const containerStyles = css({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  });
  const checkboxStyles = css({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '3rem',
    height: '1.75rem',
    padding: '0.25rem',
    borderRadius: '0.875rem',
    backgroundColor: checked ? `${theme.palette[palette][400]}` : `${theme.palette.default[200]}`,
    '&::after': {
      content: `""`,
      position: 'absolute',
      top: '0.25rem',
      left: checked ? '1.5rem' : '0.25rem',
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '0.625rem',
      backgroundColor: `${theme.color.basic.white}`,
      zIndex: '1',
      transition: 'left 0.2s',
    },
    '> svg': {
      fontSize: `${theme.text.size.md}`,
      color: `${theme.palette.content.primary}`,
      '&:nth-of-type(1)': {
        opacity: 0,
        transform: 'translateX(-0.25rem)',
        ...(checked && {
          color: `${theme.color.basic.white}`,
          transform: 'translateX(0)',
          opacity: 1,
        }),
      },
      '&:nth-of-type(2)': {
        opacity: 1,
        transform: 'translateX(0)',
        ...(checked && {
          transform: 'translateX(0.25rem)',
          opacity: 0,
        }),
      },
      transition: 'transform 0.3s, opacity 0.5s',
    },
  });
  const textStyles = css({
    marginLeft: '0.5rem',
    fontSize: `${theme.text.size.md}`,
    color: `${theme.palette.content.primary}`,
  });

  return (
    <label css={containerStyles}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        css={{ display: 'none' }}
        {...props}
      />
      <div css={checkboxStyles}>
        {startContent}
        {endContent}
      </div>
      <span css={textStyles}>{children}</span>
    </label>
  );
};
