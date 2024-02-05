import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type PostsResponse = PostItem[];

export type PostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, number>({
      query: (page) => ({
        url: "posts",
        params: {
          _limit: 20,
          _page: page,
        },
      }),
    }),
    getPost: builder.query<PostItem[], number | undefined>({
      query: (id) => ({
        url: "posts",
        params: {
          id: id,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
