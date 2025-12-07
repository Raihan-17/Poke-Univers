import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
  name: 'app',
  initialState: { initialized: true },
  reducers: {}
});

// export default AppSlice.reducer;
// export const AppSlice = AppSlice;