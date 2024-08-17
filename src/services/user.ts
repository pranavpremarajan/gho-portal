import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.env.baseUrl }),
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: {
          Token: "",
          Prokey: "",
          Tags: [
            {
              T: "Action",
              V: "PROFILE",
            },
            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c1",
              V: JSON.stringify(data),
            },
          ],
        },
      }),
    }),
  }),
});

export const { useUpdateUserProfileMutation } = userApi;
