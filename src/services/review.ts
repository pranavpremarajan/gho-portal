import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.env.baseUrl }),
  endpoints: (builder) => ({
    getMyReviews: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
        body: {
          Token: localStorage.getItem("token"),
          Prokey: "",
          Tags: [
            {
              T: "Action",
              V: "CASELIST",
            },
            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c1",
              V: "",
            },
          ],
        },
      }),
    }),
  }),
});

export const { useGetMyReviewsMutation } = reviewApi;
