"use client";
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
// Add other reducers here as needed

export const store = configureStore({
  reducer: {
    user: userReducer,
    // hotel: hotelReducer,
    // tour: tourReducer,
    // flight: flightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
