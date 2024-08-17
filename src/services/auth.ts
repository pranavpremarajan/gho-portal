import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.env.baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: {
          Token: "",
          Prokey: "",
          Tags: [
            {
              T: "dk1",
              V: data.email,
            },
            {
              T: "dk2",
              V: data.password,
            },

            {
              T: "Action",
              V: "SIGNIN",
            },
            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c10",
              V: "0",
            },
          ],
        },
      }),
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: {
          Token: "",
          Prokey: "",
          Tags: [
            {
              T: "dk1",
              V: data.firstname,
            },
            {
              T: "dk2",
              V: data.lastname,
            },

            {
              T: "Action",
              V: "SIGNUP",
            },
            {
              T: "c1",
              V: data.email,
            },
            {
              T: "c2",
              V: data.password,
            },
            {
              T: "c3",
              V: data.mobile,
            },

            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c10",
              V: "0",
            },
          ],
        },
      }),
    }),

    verifyOTP: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: {
          Token: "",
          Prokey: "",
          Tags: [
            {
              T: "dk1",
              V: data.email,
            },
            {
              T: "dk2",
              V: data.otp,
            },

            {
              T: "Action",
              V: "OTP",
            },

            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c10",
              V: "0",
            },
          ],
        },
      }),
    }),

    profile: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
        body: {
          Token: "",
          Prokey: "",
          Tags: [
            {
              T: "dk1",
              V: "",
            },
            {
              T: "dk2",
              V: "",
            },

            {
              T: "Action",
              V: "PROFILE",
            },

            {
              T: "src",
              V: "WEB",
            },
            {
              T: "c10",
              V: "0",
            },
          ],
        },
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useChangePasswordMutation,
  useVerifyOTPMutation,
} = authApi;
