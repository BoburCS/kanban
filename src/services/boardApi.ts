import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "@constants/backendApi";

interface BoardType {
  title: string;
  statuses: string[];
}

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${backendUrl}/boards`,
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
      query: (boardId: string) => ({
        url: `/${boardId}`,
        method: "GET",
      }),
      providesTags: ["Board"],
    }),
    createBoard: builder.mutation({
      query: (board: BoardType) => ({
        url: "/create",
        method: "POST",
        body: board,
      }),
      invalidatesTags: ["Board"],
    }),
    deleteBoard: builder.mutation({
      query: (boardId: string) => ({
        url: `/${boardId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Board"],
    }),
    editBoard: builder.mutation({
      query: ({ boardId, board }: { boardId: string; board: BoardType }) => ({
        url: `/${boardId}`,
        method: "PUT",
        body: board,
      }),
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetBoardQuery,
  useCreateBoardMutation,
  useDeleteBoardMutation,
  useEditBoardMutation,
} = boardApi;
