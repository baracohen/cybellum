// api/notifications/notifications.ts

import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'helpers/baseQuery';

import { NotificationRequestType, NotificationResponseType } from './notifications.interface';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    getNotification: builder.mutation<NotificationResponseType, NotificationRequestType>({
      query: (body) => ({
        url: `/notifications/${body.id}`,
        method: 'GET',
      }),
    }),
  }),
});

// Updated mutation hook name to reflect the action
export const { useGetNotificationMutation } = notificationsApi;
