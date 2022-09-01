import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

let initialState = {
  recomendationUserRetrieveData: null,
  recomendationUserRetrieveStatus: "idle",
  recomendationUserRetrieveError: null,
};

/**
 * Получить последнюю рекомендацию пользователя.
 */
export const RecomendationRetrieveApiRequest = createAsyncThunk(
  "recomendation/RecomendationRetrieveApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`recomendation/retrieve/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

const recomendationSlice = createSlice({
  name: "recomendation",
  initialState,
  reducers: {},
  extraReducers: {
    [RecomendationRetrieveApiRequest.pending]: (state) => {
      state.recomendationUserRetrieveStatus = "loading";
    },
    [RecomendationRetrieveApiRequest.fulfilled]: (state, action) => {
      state.recomendationUserRetrieveStatus = "succeeded";
      state.recomendationUserRetrieveData = action.payload;
    },
    [RecomendationRetrieveApiRequest.rejected]: (state, action) => {
      state.recomendationUserRetrieveStatus = "failed";
      state.recomendationUserRetrieveError = action.payload.errors;
    },
  },
});
export default recomendationSlice.reducer;

export const recomendationUserRetrieveData = (state) =>
  state.recomendation.recomendationUserRetrieveData;
export const recomendationUserRetrieveStatus = (state) =>
  state.recomendation.recomendationUserRetrieveStatus;
export const recomendationUserRetrieveError = (state) =>
  state.recomendation.recomendationUserRetrieveError;
