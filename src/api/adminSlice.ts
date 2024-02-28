import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    tagTypes: ['accounts'],
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ["accounts"],
            // invalidatesTags: ["accounts"]

        }),
        AddAccount: builder.mutation({
            query: ({ amount, id }: any) => ({
                url: "accounts",
                method: "POST",
                body: { amount: amount, id: id }
            }),
            // providesTags: ["accounts"],
            invalidatesTags: ["accounts"]

        }),
        DeleteAccount: builder.mutation({
            query: (id: any) => ({
                url: `accounts/${id}`,
                method: "DELETE"

            }),
            invalidatesTags: ["accounts"]
            // providesTags: ["accounts"],
            // invalidatesTags: ["accounts"]

        }),
        UpdateAccount: builder.mutation({
            query: (arg): any => ({
                url: `accounts/${arg.id}`,
                method: "PATCH",
                body: {
                    amount: arg.amount
                }
            }),
            // providesTags: ["accounts"],
            invalidatesTags: ["accounts"]

        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } = adminApi