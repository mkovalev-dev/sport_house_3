import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import baseSlice from "./slices/baseSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userSlice from "./slices/userSlice";
import locationSlice from "./slices/locationSlice";
import recomendationSlice from "./slices/recomendationSlice";

/**
 * Настройки для store redux
 */
const rootReducer = combineReducers({
  base: baseSlice,
  user: userSlice,
  location: locationSlice,
  recomendation: recomendationSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["base", "user", "location", "recomendation"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
