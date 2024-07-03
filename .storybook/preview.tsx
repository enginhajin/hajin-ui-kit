import React from 'react';
import GlobalStyle from '../src/GlobalStyle';
import type { Preview } from '@storybook/react';
import { ThemeProvider, useTheme } from '@emotion/react';
import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
