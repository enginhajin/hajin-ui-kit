import { Palette, css, useTheme } from '@emotion/react';
import { ComponentProps } from 'react';

export interface RadioProps extends ComponentProps<'input'> {
  children: string | React.ReactNode;
  disabled?: boolean;
  palette: Palette;
}

export const Radio = ({ children, disabled, palette, ...props }: RadioProps) => {
  const theme = useTheme();
  const containerStyles = css({
    display: 'inline-flex',
    cursor: disabled ? 'not-allowed' : 'pointer',
  });
  const radioStyles = css({
    appearance: 'none',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
    height: '1.25rem',
    marginTop: '1px',
    border: `1px solid ${theme.palette.default[300]}`,
    borderRadius: '50%',
    backgroundColor: `${theme.palette.layout.background}`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    '&::after': {
      content: `''`,
      width: '0.625rem',
      height: '0.625rem',
      borderRadius: '50%',
      opacity: 0,
      transform: 'scale(0.5)',
      transition: 'transform 0.1s',
    },
    '&:hover': {
      backgroundColor: `${theme.palette.default[50]}`,
    },
    '&:checked': {
      borderColor: `${theme.palette[palette][400]}`,
      '&::after': {
        backgroundColor: `${theme.palette[palette][400]}`,
        transform: 'scale(1)',
        opacity: 1,
      },
    },
    '&:disabled': {
      opacity: 0.5,
      '+ span': {
        opacity: 0.5,
      },
    },
  });
  const textStyles = css({
    marginLeft: '0.5rem',
    fontSize: `${theme.text.size.md}`,
    color: `${theme.palette.content.primary}`,
  });

  return (
    <label css={containerStyles}>
      <input type="radio" css={radioStyles} disabled={disabled} {...props} />
      <span css={textStyles}>{children}</span>
    </label>
  );
};
