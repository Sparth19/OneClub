import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {email: string} | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{email: string}>) => {
      state.isAuthenticated = true;
      state.user = {email: action.payload.email};
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutSuccess: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const {loginSuccess, loginFailure, logoutSuccess} = authSlice.actions;

export default authSlice.reducer;
