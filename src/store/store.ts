import { getFirebase, actionTypes as rrfActionTypes } from 'react-redux-firebase';
import { constants as rfConstants } from 'redux-firestore';
import { configureStore } from '@reduxjs/toolkit';
import loggedInUser from 'store/_slices/loggedInUserSlice';

export const store = configureStore({
  reducer: {
    loggedInUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // just ignore every redux-firebase and react-redux-firebase action type
          ...Object.keys(rfConstants.actionTypes).map((type) => `${rfConstants.actionsPrefix}/${type}`),
          ...Object.keys(rrfActionTypes).map((type) => `@@reactReduxFirebase/${type}`),
          'loggedInUser/addUser',
        ],
        ignoredPaths: [
          'firebase',
          'firestore',
          'loggedInUser.user.*',
          'loggedInUser.user.proactiveRefresh',
          'loggedInUser.user.auth',
          'loggedInUser.user.stsTokenManager',
          'loggedInUser.user.metadata',
        ],
      },
      thunk: {
        extraArgument: {
          getFirebase,
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
