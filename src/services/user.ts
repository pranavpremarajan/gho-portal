import config from "@/config";
import {
  ApiUserProfile,
  GetUserProfileApiRespose,
  UserProfile,
} from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequestBody = (data: any, action: string) => ({
  Token: localStorage.getItem("token"),
  Prokey: "",
  Tags: [
    { T: "Action", V: "PROFILE" },
    { T: "src", V: "WEB" },
    { T: "c1", V: JSON.stringify(data) },
    { T: "c10", V: action },
  ],
});

const mapUpdateUserProfileRequestBody = (data: UserProfile): ApiUserProfile => {
  return {
    LastName: data.lastname,
    FirstName: data.firstname,
    Phone: data.phone,
    CountryID: data.countryId,
    Address1: data.addressLine1,
    Address2: data.addressLine2,
    City: data.city,
    State: data.state,
    ZipCode: data.zipCode,
  };
};

const transformUserProfileResponse = (response: GetUserProfileApiRespose) => {
  const d = response.Data[0][0];
  const countries = response.Data[1];
  return {
    data: {
      firstname: d.FirstName,
      lastname: d.LastName,
      phone: d.Phone,
      email: d.eMail,
      gender: d.Gendor,
      dob: d.DOB,
      countryId: d.CountryID,
      addressLine1: d.Address1,
      addressLine2: d.Address2,
      city: d.City,
      state: d.State,
      zipCode: d.ZipCode,
    },
    countries: countries.map(({ id, nm }) => ({
      label: nm,
      value: id,
    })),
  };
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.env.baseUrl }),
  endpoints: (builder) => ({
    getUserProfile: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: createRequestBody(data, "1"),
      }),
      transformResponse: transformUserProfileResponse,
    }),
    updateUserProfile: builder.mutation({
      query: (data: UserProfile) => ({
        url: "/",
        method: "POST",
        body: createRequestBody(mapUpdateUserProfileRequestBody(data), "2"),
      }),
    }),
  }),
});

export const { useGetUserProfileMutation, useUpdateUserProfileMutation } =
  userApi;
