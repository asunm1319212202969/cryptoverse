import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key":'1ae3127251msh8eeb9b64529603bp19eca5jsn2f2be962cfe7',
  "X-RapidAPI-Host":'coinranking1.p.rapidapi.com',
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(/coins?limit=${count}),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(/coin/${coinId}),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(coin/${coinId}/history?timePeriod=${timePeriod}),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
