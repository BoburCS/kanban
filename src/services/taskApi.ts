import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "@constants/backendApi";

interface SubtaskType {
  title: string;
  isCompleted: boolean;
}
type OptionalSubtaskType = Partial<SubtaskType>;

interface TaskType {
  title: string;
  description: string;
  subTasks: SubtaskType[];
  status: string;
}
type OptionalTaskType = Partial<TaskType>;

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${backendUrl}/tasks`,
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (boardId: string) => ({
        url: `/${boardId}`,
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    getTask: builder.query({
      query: (taskId: string) => ({
        url: `/task/${taskId}`,
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    createTask: builder.mutation({
      query: ({ boardId, task }: { boardId: string; task: TaskType }) => ({
        url: `/:${boardId}/create`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ taskId, task }: { taskId: string; task: OptionalTaskType }) => ({
        url: `/task/${taskId}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateSubTask: builder.mutation({
      query: ({ taskId, subTaskId, subTask }: { taskId: string; subTaskId: string; subTask: OptionalSubtaskType }) => ({
        url: `/subtask/${taskId}/${subTaskId}`,
        method: "PATCH",
        body: subTask,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (taskId: string) => ({
        url: `/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUpdateSubTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
