import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import lightTheme from './../src/styles/theme';
import { TrnComponentsProvider } from '../src/shared/utils/trn-components-provider';
import { CssBaseline } from '@mui/material';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: 'light',
    Provider: TrnComponentsProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
