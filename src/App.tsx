import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'theme';
import { Routes } from './routes';
import { ErrorBoundary } from 'components';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </ThemeProvider>
);
