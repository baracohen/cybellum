import { authApi } from 'api/auth/auth';
import { notificationsApi } from 'api/notifications/notifications';

import userReducer from 'slices/user/userSlice';
import notificationReducer from 'slices/notifications/notificationSlice';

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  [notificationsApi.reducerPath]: notificationsApi.reducer,
  user: userReducer,
  notification: notificationReducer,
};

export default rootReducer;
