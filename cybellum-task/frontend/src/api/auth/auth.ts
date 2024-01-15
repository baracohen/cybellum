// api/auth/auth.ts

import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'helpers/baseQuery';

import { AuthRequestType, AuthResponseType } from './auth.interface';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponseType, AuthRequestType>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
