import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY)

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/shazam-songs/list-similarities?id=track-similarities-id-424767377&locale=en-US'}),
    getSongDetails: builder.query({query: ({songid}) => `/songs/get-details?song_id=${songid}`}),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  })

})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery
} = shazamCoreApi