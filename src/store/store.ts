import { configureStore } from '@reduxjs/toolkit';
import loggedInUser from 'store/_slices/loggedInUserSlice';

export const store = configureStore({
  reducer: {
    loggedInUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
