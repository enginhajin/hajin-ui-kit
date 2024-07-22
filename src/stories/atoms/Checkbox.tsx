import { Palette, css, useTheme } from '@emotion/react';
import { ChangeEvent, ComponentProps } from 'react';
import { RiCheckLine } from 'react-icons/ri';

export interface CheckboxProps extends ComponentProps<'input'> {
  palette: Palette;
  children: string | React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customIcon?: React.ReactNode;
}

export const Checkbox = ({
  palette,
  checked,
  children,
  disabled,
  onChange,
  customIcon,
  ...props
}: CheckboxProps) => {
  const theme = useTheme();
  const containerStyles = css({
    display: 'flex',
    cursor: 'pointer',
    '&:hover': {
      '> div': {
        backgroundColor: `${theme.palette.default[50]}`,
      },
    },
  });
  const checkboxStyles = css({
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
    height: '1.25rem',
    marginTop: '1px',
    border: `1px solid ${theme.palette.default[300]}`,
    borderRadius: '0.25rem',
    fontSize: `${theme.text.size.md}`,
    backgroundColor: `${theme.palette.layout.background}`,
    transition: 'background-color 0.1s, border-color 0.1s',
    svg: {
      color: `${theme.color.basic.white}`,
      opacity: checked ? 1 : 0,
      transition: 'opacity 0.1s',
    },
    ...(checked && {
      borderColor: `${theme.palette[palette][400]}`,
      backgroundColor: `${theme.palette[palette][400]} !important`,
    }),
  });
  const textStyles = css({
    marginLeft: '0.5rem',
    fontSize: `${theme.text.size.md}`,
    color: `${theme.palette.content.primary}`,
  });
  const disabledStyles = css({
    opacity: '0.5',
    cursor: 'not-allowed',
  });
  return (
    <label css={[containerStyles, disabled && disabledStyles]}>
      <div css={checkboxStyles}>{customIcon ? customIcon : <RiCheckLine />}</div>
      <input
        type="checkbox"
        css={css({ display: 'none' })}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <span css={textStyles}>{children}</span>
    </label>
  );
};
