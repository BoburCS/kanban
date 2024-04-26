import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/tasks",
    }),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: (boardId) => ({
                url: `?boardId=${boardId}`,
                method: "GET",
            }),
            providesTags: ["Task"],
        }),
        createTask: builder.mutation({
            query: (task) => ({
                url: "/",
                method: "POST",
                body: task,
            }),
            invalidatesTags: ["Task"],
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: `/${task.id}`,
                method: "PATCH",
                body: task,
            }),
            invalidatesTags: ["Task"],
        }),
        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `/${taskId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Task"],
        }),
        deleteAllTasks: builder.mutation({
            query: (boardId) => ({
                url: `?boardId=${boardId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Task"],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useDeleteAllTasksMutation,
} = taskApi;
