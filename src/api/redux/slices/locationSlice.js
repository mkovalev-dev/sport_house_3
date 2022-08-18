import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import filterSearchParams from "../../../lib/filterSearchParams";

let initialState = {
  locationSportTypeData: [],
  locationSportTypeStatus: "idle",
  locationSportTypeError: null,

  locationData: [],
  locationStatus: "idle",
  locationError: null,
};
//
// /**
//  * Получить _.
//  */
// export const LoginApiRequest = createAsyncThunk(
//   "location/LoginApiRequest",
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

/**
 * Получить список категорий спорта.
 */
export const LocationSportTypeApiRequest = createAsyncThunk(
  "location/LocationSportTypeApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`location/sport-type/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Получить список спортивных площадок.
 */
export const LocationApiRequest = createAsyncThunk(
  "location/LocationApiRequest",
  async ({ sportType, search }, { rejectWithValue }) => {
    const response = await api.get(`location/list/`, {
      searchParams: {
        ...filterSearchParams({ sport_type: sportType, search: search }),
      },
    });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // setUserLocation: (state, action) => {
    //   state.userLocation = action.payload;
    // },
  },
  extraReducers: {
    [LocationSportTypeApiRequest.pending]: (state) => {
      state.locationSportTypeStatus = "loading";
    },
    [LocationSportTypeApiRequest.fulfilled]: (state, action) => {
      state.locationSportTypeStatus = "succeeded";
      state.locationSportTypeData = action.payload;
    },
    [LocationSportTypeApiRequest.rejected]: (state, action) => {
      state.locationSportTypeStatus = "failed";
      state.locationSportTypeError = action.payload.errors;
    },

    [LocationApiRequest.pending]: (state) => {
      state.locationStatus = "loading";
    },
    [LocationApiRequest.fulfilled]: (state, action) => {
      state.locationStatus = "succeeded";
      state.locationData = action.payload;
    },
    [LocationApiRequest.rejected]: (state, action) => {
      state.locationStatus = "failed";
      state.locationError = action.payload.errors;
    },
  },
});
export default locationSlice.reducer;

export const locationSportTypeData = (state) =>
  state.location.locationSportTypeData;
export const locationSportTypeStatus = (state) =>
  state.location.locationSportTypeStatus;
export const locationSportTypeError = (state) =>
  state.location.locationSportTypeError;

export const locationData = (state) => state.location.locationData;
export const locationStatus = (state) => state.location.locationStatus;
export const locationError = (state) => state.location.locationError;
