import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/auth";
import { reviewApi } from "@/services/review";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(reviewApi.middleware),
});
