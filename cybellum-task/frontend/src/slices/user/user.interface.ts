import { UserType } from 'api/auth/auth.interface';

export type UserState = {
  user?: UserType;
  accessToken?: string;
};
