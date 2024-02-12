// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";

// Fetches data from server
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // builder makes query, and the query makes a default get request !
    // get: "http://localhost:8080/api/categories"
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    // get labels
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),

    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: "http://localhost:8080/api/transaction"
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: "http://localhost:8080/api/transaction"
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
