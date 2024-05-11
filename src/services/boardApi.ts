import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/boards",
  }),
  tagTypes: ["Board"],
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Board"],
    }),
    getBoard: builder.query({
      query: (boardId) => ({
        url: `/${boardId}`,
        method: "GET",
      }),
    }),
    createBoard: builder.mutation({
      query: (board) => ({
        url: "/",
        method: "POST",
        body: board,
      }),
      invalidatesTags: ["Board"],
    }),
    deleteBoard: builder.mutation({
      query: (boardId: string | undefined) => ({
        url: `/${boardId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Board"],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetBoardQuery,
  useCreateBoardMutation,
  useDeleteBoardMutation,
} = boardApi;
