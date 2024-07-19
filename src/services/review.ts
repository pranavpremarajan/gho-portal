import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.env.baseUrl }),
  endpoints: (builder) => ({
    getMyReviews: builder.query({
      query: () => `/reviews`,
    }),
  }),
});

export const { useGetMyReviewsQuery } = reviewApi;
