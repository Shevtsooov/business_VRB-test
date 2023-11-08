import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../../types/Article';

const apiKey = '12655da0f0cb49ce8221cdbf77177de3'

interface response {
  status: string,
  totalResults: number,
  articles: Article[],
};

interface QueryOptions {
  query?: string,
  pageSize?: number,
}

export const ArticlesApi = createApi({
  reducerPath: 'ArticlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/'
  }),
  endpoints: (builder) => ({
    findArticles: builder.query<response, Partial<QueryOptions>>({
      query: ({query, pageSize}) => ({
        url: `v2/top-headlines?q=${query}&pageSize=${pageSize}&country=us&category=technology&apiKey=${apiKey}`,
      }),
    }),
  })
})

export const {
  useFindArticlesQuery
} = ArticlesApi;
