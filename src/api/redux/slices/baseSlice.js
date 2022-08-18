import { createSlice } from "@reduxjs/toolkit";

let initialState = {};
//
// /**
//  * Получить _.
//  */
// export const LoginApiRequest = createAsyncThunk(
//   "base/LoginApiRequest",
//   async (data, { rejectWithValue }) => {
//     const response = await api.post(`base/test/`, {
//       json: data,
//     });
//     const dataResponse = await response.json();
//     if (!response.ok) {
//       return rejectWithValue(dataResponse);
//     }
//     return dataResponse;
//   }
// );

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
  extraReducers: {
    // [LoginApiRequest.pending]: (state) => {
    //   state.TestApiRequestStatus = "loading";
    // },
    // [LoginApiRequest.fulfilled]: (state, action) => {
    //   state.TestApiRequestStatus = "succeeded";
    //   state.TestApiRequest = action.payload;
    // },
    // [LoginApiRequest.rejected]: (state, action) => {
    //   state.TestApiRequestStatus = "failed";
    //   state.TestApiRequestError = action.payload.errors;
    // },
  },
});
export default baseSlice.reducer;

export const { setUserLocation } = baseSlice.actions;
export const userLocation = (state) => state.base.userLocation;

// export const LoginRequestData = (state) => state.base.TestApiRequest;
// export const LoginRequestStatus = (state) => state.base.TestApiRequestStatus;
// export const LoginRequestError = (state) => state.base.TestApiRequestError;
