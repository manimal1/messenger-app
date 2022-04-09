import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { theme } from 'theme';
import { Routes } from './routes';
import { ErrorBoundary } from 'components';
import { store } from 'store/store';

export const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
);
