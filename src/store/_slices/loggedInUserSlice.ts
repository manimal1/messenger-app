import { User } from 'firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

interface UserToken {
  token: string | undefined;
}
export type StoreUser = User & UserToken;
interface LoggedInUser {
  user: StoreUser | null;
}

const initialState: LoggedInUser = {
  user: null,
};

export const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<StoreUser>) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = loggedInUserSlice.actions;

export const loggedInUser = (state: RootState) => state.loggedInUser.user;

export default loggedInUserSlice.reducer;
