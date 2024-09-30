import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/theme';
import GlobalStyles from '../src/GlobalStyles';
import { Title, Stories, Controls, ArgTypes, Primary } from '@storybook/blocks';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
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
    docs: {
      page: () => (
        <>
          <Title />
          <Stories />
          <ArgTypes />
        </>
      ),
    },
  },
};

export default preview;
