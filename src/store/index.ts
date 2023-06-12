import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import favouritesReducer from './favourites-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    favourites: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
