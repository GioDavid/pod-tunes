// src/adapters/redux/itunesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ITunesServiceAdapter from '../api/ITunesServiceAdapter';

const initialState = {
  results: [],
  status: 'idle',
  error: null,
};

export const searchiTunes = createAsyncThunk('itunes/search', async (query) => {
  const adapter = new ITunesServiceAdapter();
  return adapter.search(query);
});

const itunesSlice = createSlice({
  name: 'itunes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchiTunes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchiTunes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(searchiTunes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default itunesSlice.reducer;
