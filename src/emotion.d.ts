import '@emotion/react';
import { mq } from './media-query';

declare module '@emotion/react' {
  export type Palette = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
  export interface Theme {
    palette: {
      layout: {
        background: string;
        foreground: string;
      };
      content: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        disabled: string;
        inverted: string;
      };
      default: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      secondary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      success: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      warning: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      danger: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
    };
    text: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
        xl3: string;
        xl4: string;
        xl5: string;
      };
    };
    shadow: {
      default: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
      primary: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
      secondary: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
      success: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
      warning: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
      danger: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xl2: string;
      };
    };
    mq: typeof mq;
  }
}
