"use client";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

interface HotelState {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  hotels: [],
  loading: false,
  error: null,
};

// Fetch hotels from Django API
export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
  const response = await axios.get('http://localhost:8000/api/hotels/');
  return response.data;
});

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch hotels';
      });
  },
});

export default hotelSlice.reducer;
