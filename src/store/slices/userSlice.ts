"use client";
import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
 
}
interface UserState {
  isLoggedIn: boolean;
  userInfo:  UserInfo | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
