import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store';

import settings from '../app/settings';

const getBaseQuery = (
  path: string,
): ((
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, Record<string, unknown>>>) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${settings.API.MOCKUP_API}${path}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)?.user.accessToken;
      headers.set('Content-Type', `application/json`);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  return async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    const { error }: { error?: FetchBaseQueryError & { error?: string } } = result;
    if (error) {
      console.log(error);
    }

    return result;
  };
};

export default getBaseQuery;
