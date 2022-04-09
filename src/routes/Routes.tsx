import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { URLS } from './constants';

const ChatApp = lazy(() => import('../+ChatApp/ChatApp'));
const Login = lazy(() => import('../+Login/Login'));

export const Routes: FC = () => (
  <Suspense fallback={<CircularProgress color="primary" />}>
    <Router>
      <RouterRoutes>
        <Route path={URLS.HOME} element={<Login />} />
        <Route path={URLS.CHAT} element={<ChatApp />} />
      </RouterRoutes>
    </Router>
  </Suspense>
);
