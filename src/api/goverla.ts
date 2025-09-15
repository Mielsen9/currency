import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GET_RATES } from "@/shared/graphql/queries";
import {Point} from "@/types";

export const goverlaApi = createApi({
  reducerPath: "goverlaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.goverla.ua/graphql",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRates: builder.query<Point, void>({
      query: (): any => ({
        method: "POST",
        body: JSON.stringify({
          query: GET_RATES,
          variables: { alias: "goverla-ua" },
        }),
      }),
      transformResponse: (response: { data: { point: Point} }) =>
        response.data.point,
    }),
  }),
});

export const { useGetRatesQuery } = goverlaApi;