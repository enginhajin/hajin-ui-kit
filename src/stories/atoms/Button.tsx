import { css, Palette, useTheme } from '@emotion/react';
import { Spinner } from './Spinner';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant = 'solid' | 'shadow' | 'outline' | 'ghost' | 'text';
export interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  palette: Palette;
  disabled?: boolean;
  children: string | React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isOnlyIcon?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  size,
  variant,
  palette,
  children,
  onClick,
  startContent,
  endContent,
  disabled = false,
  isOnlyIcon = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const buttonStyles = css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: `${theme.radius.md}`,
    color: `${theme.color.basic.white}`,
    cursor: 'pointer',
    transition: 'border-color 0.25s, color 0.25s, background-color 0.25s, opacity 0.25s',
  });

  const sizeStyles = {
    xs: css({
      height: '1.5rem',
      padding: '0 0.5rem',
      borderRadius: `${theme.radius.sm}`,
      fontSize: `${theme.text.size.sm}`,
    }),
    sm: css({
      height: '2rem',
      padding: '0 0.75rem',
      fontSize: `${theme.text.size.sm}`,
    }),
    md: css({
      height: '2.5rem',
      padding: '0 1rem',
      fontSize: `${theme.text.size.md}`,
    }),
    lg: css({
      height: '3rem',
      padding: '0 1.5rem',
      fontSize: `${theme.text.size.md}`,
    }),
    xl: css({
      height: '3.5rem',
      padding: '0 2rem',
      fontSize: `${theme.text.size.lg}`,
    }),
  };

  const paletteStyles = {
    default: css({
      backgroundColor: `${theme.palette.default[300]}`,
      color: `${theme.palette.content.primary}`,
    }),
    primary: css({
      backgroundColor: `${theme.palette.primary[400]}`,
    }),
    secondary: css({
      backgroundColor: `${theme.palette.secondary[400]}`,
    }),
    success: css({
      backgroundColor: `${theme.palette.success[400]}`,
    }),
    warning: css({
      backgroundColor: `${theme.palette.warning[400]}`,
    }),
    danger: css({
      backgroundColor: `${theme.palette.danger[400]}`,
    }),
  };

  const variantStyles = {
    solid: css({
      '&:hover': { opacity: '0.8' },
    }),
    shadow: css({
      boxShadow: `${theme.shadow[palette].lg}`,
      '&:hover': { opacity: '0.8' },
    }),
    outline: css({
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: `${theme.palette[palette][400]}`,
      color: `${theme.palette[palette][400]}`,
      backgroundColor: 'transparent',
      '&:hover': {
        color: `${theme.color.basic.white}`,
        backgroundColor: `${theme.palette[palette][400]}`,
      },
    }),
    ghost: css({
      color: `${theme.palette[palette][400]}`,
      backgroundColor: 'transparent',
      '&:hover': {
        color: `${theme.color.basic.white}`,
        backgroundColor: `${theme.palette[palette][400]}`,
      },
    }),
    text: css({
      height: 'auto',
      padding: 0,
      color: `${theme.palette[palette][400]}`,
      backgroundColor: 'transparent',
      '&:hover': {
        textDecoration: 'underline',
      },
    }),
  };

  const disabledStyles = css({
    opacity: '0.5',
    cursor: 'not-allowed',
    '&:hover': {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  });

  const onlyIconStyles = {
    xs: css({
      width: '1.5rem',
    }),
    sm: css({
      width: '2rem',
    }),
    md: css({
      width: '2.5rem',
    }),
    lg: css({
      width: '3rem',
    }),
    xl: css({
      width: '3.5rem',
    }),
  };

  return (
    <button
      type="button"
      css={[
        buttonStyles,
        sizeStyles[size],
        paletteStyles[palette],
        variantStyles[variant],
        (disabled || isLoading) && disabledStyles,
        isOnlyIcon && [css({ padding: 0 }), onlyIconStyles[size]],
      ]}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <Spinner
          size={size === 'lg' || size === 'xl' ? 'md' : 'sm'}
          css={{ marginRight: '0.5rem' }}
        />
      )}
      {startContent && <div css={{ marginRight: '0.5rem' }}>{startContent}</div>}
      {children}
      {endContent && <div css={{ marginLeft: '0.5rem' }}>{endContent}</div>}
    </button>
  );
};
