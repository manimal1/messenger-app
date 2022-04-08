import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const ChatApp = lazy(() => import('../+ChatApp/ChatApp'));
const Login = lazy(() => import('../+Login/Login'));

export const Routes: FC = () => (
  <Suspense fallback={<CircularProgress color="primary" />}>
    <Router>
      <RouterRoutes>
        <Route path="/messenger-app/" element={<Login />} />
        <Route path="/messenger-app/chat" element={<ChatApp />} />
      </RouterRoutes>
    </Router>
  </Suspense>
);
