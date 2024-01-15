import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponseType } from 'api/auth/auth.interface';

import { UserState } from './user.interface';
import { RootState } from 'app/store';

export const userSlice = createSlice({
  initialState: {} as UserState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponseType>) => {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
export const accessTokenSelector = (state: RootState) => state.user.accessToken;

