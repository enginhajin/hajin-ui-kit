import { Theme } from '@emotion/react';
import { hexToRgba } from './utils';
import { mq } from './media-query';

const color = {
  basic: {
    black: '#000000',
    white: '#ffffff',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#343439',
    800: '#18181b',
  },
  blue: {
    50: '#E0EBFF',
    100: '#B0C8FF',
    200: '#7EA9FF',
    300: '#4D8CFE',
    400: '#338ef7',
    500: '#034AE2',
    600: '#002DB1',
    700: '#001780',
    800: '#00094F',
  },
  purple: {
    50: '#F0E4FF',
    100: '#CDB3FF',
    200: '#B381FD',
    300: '#A04EFC',
    400: '#9724FB',
    500: '#8B07E2',
    600: '#7803B0',
    700: '#5E017E',
    800: '#3E004D',
  },
  green: {
    50: '#E0FEEE',
    100: '#BAF4D5',
    200: '#6BE8A5',
    300: '#3EDA86',
    400: '#25C16D',
    500: '##199654',
    600: '#0F7C44',
    700: '#0C6839',
    800: '#024122',
  },
  yellow: {
    50: '#FFFEDA',
    100: '#FFF6AD',
    200: '#FFEC7D',
    300: '#FFDE4B',
    400: '#FFCC1A',
    500: '#E6A400',
    600: '#B37400',
    700: '#804A00',
    800: '#4E2700',
  },
  red: {
    50: '#FFE2EC',
    100: '#FFB1C5',
    200: '#FF7F9A',
    300: '#FF4D6C',
    400: '#FE1D51',
    500: '#E50646',
    600: '#B30043',
    700: '#810038',
    800: '#4F0026',
  },
};

const palette = {
  layout: {
    background: color.basic.white,
    foreground: color.zinc[600],
  },
  content: {
    primary: color.zinc[800],
    secondary: color.zinc[600],
    tertiary: color.zinc[500],
    quaternary: color.zinc[400],
    disabled: color.zinc[300],
    inverted: color.basic.white,
  },
  default: {
    50: color.zinc[50],
    100: color.zinc[100],
    200: color.zinc[200],
    300: color.zinc[300],
    400: color.zinc[400],
    500: color.zinc[500],
    600: color.zinc[600],
    700: color.zinc[700],
    800: color.zinc[800],
  },
  primary: {
    50: color.blue[50],
    100: color.blue[100],
    200: color.blue[200],
    300: color.blue[300],
    400: color.blue[400],
    500: color.blue[500],
    600: color.blue[600],
    700: color.blue[700],
    800: color.blue[800],
  },
  secondary: {
    50: color.purple[50],
    100: color.purple[100],
    200: color.purple[200],
    300: color.purple[300],
    400: color.purple[400],
    500: color.purple[500],
    600: color.purple[600],
    700: color.purple[700],
    800: color.purple[800],
  },
  success: {
    50: color.green[50],
    100: color.green[100],
    200: color.green[200],
    300: color.green[300],
    400: color.green[400],
    500: color.green[500],
    600: color.green[600],
    700: color.green[700],
    800: color.green[800],
  },
  warning: {
    50: color.yellow[50],
    100: color.yellow[100],
    200: color.yellow[200],
    300: color.yellow[300],
    400: color.yellow[400],
    500: color.yellow[500],
    600: color.yellow[600],
    700: color.yellow[700],
    800: color.yellow[800],
  },
  danger: {
    50: color.red[50],
    100: color.red[100],
    200: color.red[200],
    300: color.red[300],
    400: color.red[400],
    500: color.red[500],
    600: color.red[600],
    700: color.red[700],
    800: color.red[800],
  },
};

const text = {
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.75rem',
    xl4: '2rem',
    xl5: '2.5rem',
  },
};

const shadow = {
  default: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.default[800], 0.08)}, 0 0.25rem 0.5rem ${hexToRgba(palette.default[800], 0.08)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.default[800], 0.08)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.default[800], 0.08)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.default[800], 0.08)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.default[800], 0.08)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.default[800], 0.2)}`,
  },
  primary: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.primary[400], 0.2)}, 0 0.25rem 0.5rem ${hexToRgba(palette.primary[400], 0.4)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.primary[400], 0.2)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.primary[400], 0.4)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.primary[400], 0.2)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.primary[400], 0.4)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.primary[400], 0.5)}`,
  },
  secondary: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.secondary[400], 0.2)}, 0 0.25rem 0.5rem ${hexToRgba(palette.secondary[400], 0.4)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.secondary[400], 0.2)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.secondary[400], 0.4)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.secondary[400], 0.2)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.secondary[400], 0.4)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.secondary[400], 0.5)}`,
  },
  success: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.success[400], 0.2)}, 0 0.25rem 0.5rem ${hexToRgba(palette.success[400], 0.4)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.success[400], 0.2)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.success[400], 0.4)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.success[400], 0.2)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.success[400], 0.4)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.success[400], 0.5)}`,
  },
  warning: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.warning[400], 0.2)}, 0 0.25rem 0.5rem ${hexToRgba(palette.warning[400], 0.4)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.warning[400], 0.2)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.warning[400], 0.4)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.warning[400], 0.2)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.warning[400], 0.4)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.warning[400], 0.5)}`,
  },
  danger: {
    sm: `0 0.125rem 0.25rem ${hexToRgba(palette.danger[400], 0.2)}, 0 0.25rem 0.5rem ${hexToRgba(palette.danger[400], 0.4)}`,
    md: `0 0.25rem 0.5rem -0.125rem ${hexToRgba(palette.danger[400], 0.2)}, 0 0.625rem 1rem -0.25rem ${hexToRgba(palette.danger[400], 0.4)}`,
    lg: `0 1.25rem 1.5rem -0.25rem ${hexToRgba(palette.danger[400], 0.2)}, 0 0.625rem 0.625rem -0.25rem ${hexToRgba(palette.danger[400], 0.4)}`,
    xl: `0 1.5rem 3rem -0.75rem ${hexToRgba(palette.danger[400], 0.5)}`,
  },
};

const radius = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.625rem',
  lg: '0.75rem',
  xl: '0.875rem',
};

const theme: Theme = {
  color,
  palette,
  text,
  shadow,
  mq,
  radius,
};

export default theme;
