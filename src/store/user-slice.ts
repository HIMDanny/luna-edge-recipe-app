import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  username: string;
  email: string;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  username: '',
  email: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },

    signOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, signOut } = userSlice.actions;

export default userSlice.reducer;
