import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api";

let initialState = {
  isLoginParam: false,
  UserShortInfoData: null,
  UploadUserAvatarData: null,
  ViewUserRecInfoData: null,
  UserNotificationListData: [],
};

/**
 * Получить токен авторизации.
 */
export const LoginApiRequest = createAsyncThunk(
  "user/LoginApiRequest",
  async (data, { rejectWithValue }) => {
    const response = await api.post(`user/login/`, {
      json: data,
    });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Выход пользователя из системы.
 */
export const LogoutApiRequest = createAsyncThunk(
  "user/LogoutApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`user/logout/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Получить короткую информацию о пользовтеле.
 */
export const UserShortInfoApiRequest = createAsyncThunk(
  "user/UserShortInfoApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`user/short-info/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Загрузить новую автарку пользователя.
 */
export const UploadUserAvatarApiRequest = createAsyncThunk(
  "user/UploadUserAvatarApiRequest",
  async (data, { rejectWithValue }) => {
    const response = await api.post(`user/upload-avatar/`, { body: data });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Обновить данные пользователя.
 */
export const UpdateUserInfoApiRequest = createAsyncThunk(
  "user/UserShortInfoApiRequest",
  async (data, { rejectWithValue }) => {
    const response = await api.post(`user/update-info/`, { json: data });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Получает заполненные входные данные.
 */
export const ViewUserRecInfoApiRequest = createAsyncThunk(
  "user/ViewUserRecInfoApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`user/rec-info-user/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Запускает расчет рекомендаций.
 */
export const StartCalcRecApiRequest = createAsyncThunk(
  "user/StartCalcRecApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`user/start-calc-rec/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Обновить данные пользователя.
 */
export const UpdateRecUserInfoApiRequest = createAsyncThunk(
  "user/ViewUserRecInfoApiRequest",
  async (data, { rejectWithValue }) => {
    const response = await api.post(`user/update-rec-info/`, { json: data });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Обновить токен уведомлений.
 */
export const UpdateNotificationTokenApiRequest = createAsyncThunk(
  "user/UpdateNotificationTokenApiRequest",
  async (data, { rejectWithValue }) => {
    const response = await api.post(`user/update-notification-token/`, {
      json: data,
    });
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

/**
 * Получить список уведомлений.
 */
export const UserNotificationListApiRequest = createAsyncThunk(
  "user/UserNotificationListApiRequest",
  async (_, { rejectWithValue }) => {
    const response = await api.get(`user/notification-list/`);
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [LoginApiRequest.fulfilled]: (state, action) => {
      state.isLoginParam = true;
    },
    [LoginApiRequest.rejected]: (state, action) => {
      state.isLoginParam = false;
    },

    [LogoutApiRequest.fulfilled]: (state, action) => {
      state.isLoginParam = false;
    },
    [LogoutApiRequest.rejected]: (state, action) => {
      state.isLoginParam = true;
    },

    [UserShortInfoApiRequest.fulfilled]: (state, action) => {
      state.UserShortInfoData = action.payload;
    },
    [UserShortInfoApiRequest.rejected]: (state, action) => {
      state.isLoginParam = false;
    },

    [ViewUserRecInfoApiRequest.fulfilled]: (state, action) => {
      state.ViewUserRecInfoData = action.payload;
    },
    [ViewUserRecInfoApiRequest.rejected]: (state, action) => {
      state.ViewUserRecInfoData = {};
    },

    [UserNotificationListApiRequest.fulfilled]: (state, action) => {
      state.UserNotificationListData = action.payload;
    },
  },
});
export default userSlice.reducer;

export const isLoginParam = (state) => state.user.isLoginParam;
export const UserShortInfoData = (state) => {
  return state.user.UserShortInfoData;
};
export const ViewUserRecInfoData = (state) => state.user.ViewUserRecInfoData;

export const UserNotificationListData = (state) =>
  state.user.UserNotificationListData;
