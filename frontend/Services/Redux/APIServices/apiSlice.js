import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../HTTPHandler/axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    GetProducts: builder.mutation({
      query: () => ({
        url: "/product/api/products/",
        method: "GET",
        // data : formData,
      }),
    }),
    AuthenticateUser: builder.mutation({
      query: (formData) => ({
        url: "/product/api/token/",
        method: "POST",
        data: formData,
      }),
    }),
    RegisterUser: builder.mutation({
      query: (formData) => ({
        url: "/product/api/register/",
        method: "POST",
        data: formData,
      }),
    }),
  }),
});

export const {
  useGetProductsMutation,
  useAuthenticateUserMutation,
  useRegisterUserMutation,
} = apiSlice;
