import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationResponseType } from 'api/notifications/notifications.interface';
import { NotificationState } from './notification.interface';
import { RootState } from 'app/store';

export const notificationsSlice = createSlice({
  initialState: {} as NotificationState,
  name: 'notificationsSlice',
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationResponseType>) => {
      state.notificationId = action.payload.id;
      state.notificationDescription = action.payload.description;
    },
  },
});

export default notificationsSlice.reducer;

export const { setNotification } = notificationsSlice.actions;
export const notificationDescription = (state: RootState) => state.notification.notificationDescription;
