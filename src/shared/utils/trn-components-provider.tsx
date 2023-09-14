import {
  StyledEngineProvider,
  type Theme,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';
import { theme as trnDsTheme } from '../../styles/theme';
import { type FC } from 'react';
import { deepmerge } from '@mui/utils';

export interface TrnComponentsProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}
export const TrnComponentsProvider: FC<TrnComponentsProviderProps> = ({
  children,
  theme,
}) => {
  const themeMerged = createTheme(deepmerge(theme, trnDsTheme));
  return (
    <ThemeProvider theme={themeMerged}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      <CssBaseline />
    </ThemeProvider>
  );
};
