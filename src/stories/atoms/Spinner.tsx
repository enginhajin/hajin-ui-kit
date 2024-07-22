import { css, keyframes, Palette, useTheme } from '@emotion/react';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export interface SpinnerProps {
  size: SpinnerSize;
  palette: Palette | 'current';
}

export const Spinner = ({ size, palette = 'current', ...props }: SpinnerProps) => {
  const theme = useTheme();

  const animation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const spinnerStyles = css({
    borderWidth: '0.125rem',
    borderStyle: 'solid',
    borderRadius: '50%',
    animation: `${animation} 0.9s linear infinite`,
  });
  const sizeStyles = {
    sm: css({
      width: '1.25rem',
      height: '1.25rem',
    }),
    md: css({
      width: '2rem',
      height: '2rem',
      borderWidth: '0.1875rem',
    }),
    lg: css({
      width: '2.5rem',
      height: '2.5rem',
      borderWidth: '0.25rem',
    }),
  };
  const paletteStyles = {
    current: css({
      borderColor: 'color-mix(in srgb, currentColor 20%, transparent)',
      borderBottomColor: 'currentcolor',
    }),
    default: css({
      borderColor: `${theme.palette.default[200]}`,
      borderBottomColor: `${theme.palette.default[400]}`,
    }),
    primary: css({
      borderColor: `${theme.palette.primary[50]}`,
      borderBottomColor: `${theme.palette.primary[400]}`,
    }),
    secondary: css({
      borderColor: `${theme.palette.secondary[50]}`,
      borderBottomColor: `${theme.palette.secondary[400]}`,
    }),
    success: css({
      borderColor: `${theme.palette.success[50]}`,
      borderBottomColor: `${theme.palette.success[400]}`,
    }),
    warning: css({
      borderColor: `${theme.palette.warning[100]}`,
      borderBottomColor: `${theme.palette.warning[400]}`,
    }),
    danger: css({
      borderColor: `${theme.palette.danger[50]}`,
      borderBottomColor: `${theme.palette.danger[400]}`,
    }),
  };
  return <div css={[spinnerStyles, sizeStyles[size], paletteStyles[palette]]} {...props}></div>;
};
