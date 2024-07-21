import { css, useTheme } from '@emotion/react';
import { useState } from 'react';

export type InputVariant = 'outline' | 'underline';
export type InputState = 'default' | 'error' | 'success';
export type InputType = 'text' | 'number' | 'password' | 'email';
export interface InputProps {
  type: InputType;
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  variant: InputVariant;
  state: InputState;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Input = ({
  type,
  name,
  id,
  label,
  placeholder,
  value: propValue,
  disabled,
  variant,
  state,
  description,
  startContent,
  endContent,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(propValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const theme = useTheme();
  const containerStyles = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  });
  const labelStyles = css({
    marginBottom: '0.5rem',
    fontSize: `${theme.text.size.md}`,
    fontWeight: 700,
    color: `${theme.palette.content.secondary}`,
  });
  const inputWrapperStyles = css({
    position: 'relative',
    ' > span': {
      position: 'absolute',
      top: '50%',
      marginTop: '-0.5625rem',
      fontSize: `${theme.text.size.lg}`,
      color: `${theme.palette.content.quaternary}`,
    },
  });
  const inputStyles = css({
    overflow: 'hidden',
    width: '100%',
    height: '3rem',
    borderStyle: 'solid',
    borderColor: `${theme.palette.default[300]}`,
    fontSize: `${theme.text.size.md}`,
    color: `${theme.palette.content.primary}`,
    background: 'transparent',
    transition: 'color 0.2s, border-color 0.2s',
    '&::placeholder': {
      color: `${theme.palette.content.quaternary}`,
    },
    '&:hover': {
      borderColor: `${theme.palette.default[400]}`,
    },
    '&:focus': {
      borderColor: `${theme.palette.primary[400]}`,
    },
  });
  const descriptionStyles = css({
    marginTop: '0.25rem',
    fontSize: `${theme.text.size.sm}`,
    color: `${theme.palette.content.secondary}`,
  });
  const variantStyles = {
    outline: css({
      borderRadius: `${theme.radius.sm}`,
      input: {
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        paddingLeft: startContent ? '2.75rem' : '1rem',
        paddingRight: endContent ? '2.5rem' : '1rem',
        borderWidth: '1px',
        borderRadius: `${theme.radius.sm}`,
      },
    }),
    underline: css({
      input: {
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        paddingLeft: startContent ? '1.75rem' : '0',
        paddingRight: endContent ? '2.5rem' : '0',
        borderBottomWidth: '0.125rem',
      },
    }),
  };
  const stateStyles = {
    default: '',
    error: css({
      input: {
        borderColor: `${theme.palette.danger[400]}`,
        '&:hover, &:focus': {
          borderColor: `${theme.palette.danger[400]}`,
        },
        '+ span': {
          color: `${theme.palette.danger[400]}`,
        },
      },
      '> span': {
        color: `${theme.palette.danger[400]}`,
      },
    }),
    success: css({
      input: {
        borderColor: `${theme.palette.success[400]}`,
        '&:hover, &:focus': {
          borderColor: `${theme.palette.success[400]}`,
        },
        '+ span': {
          color: `${theme.palette.success[400]}`,
        },
      },
      '> span': {
        color: `${theme.palette.success[400]}`,
      },
    }),
  };
  const disabledStyles = css({
    opacity: '0.5',
    input: {
      borderColor: `${theme.palette.default[300]}`,
      color: `${theme.palette.default[300]}`,
      cursor: 'not-allowed',
      '&:hover': { borderColor: `${theme.palette.default[300]}` },
      '+ span': {
        color: `${theme.palette.content.quaternary}`,
      },
    },
    '> span': { color: `${theme.palette.content.quaternary}` },
  });
  const startContentStyles = css({ left: variant == 'underline' ? 0 : '1rem' });
  const endContentStyles = css({ right: variant == 'underline' ? '0.75rem' : '1rem' });

  return (
    <div css={[containerStyles, stateStyles[state], disabled && disabledStyles]} {...props}>
      {label && (
        <label htmlFor={id} css={labelStyles}>
          {label}
        </label>
      )}
      <div css={[inputWrapperStyles, variantStyles[variant]]}>
        {startContent && <span css={startContentStyles}>{startContent}</span>}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          css={inputStyles}
          onChange={handleChange}
        />
        {endContent && <span css={endContentStyles}>{endContent}</span>}
      </div>
      {description && <span css={descriptionStyles}>{description}</span>}
    </div>
  );
};
