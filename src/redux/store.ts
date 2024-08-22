import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/auth";
import { reviewApi } from "@/services/review";
import { userApi } from "@/services/user";
import authReducer from "./features/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(reviewApi.middleware)
      .concat(userApi.middleware)
});
