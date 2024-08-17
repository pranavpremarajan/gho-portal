import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/auth";
import { reviewApi } from "@/services/review";
import authReducer from "./features/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(reviewApi.middleware),
});
