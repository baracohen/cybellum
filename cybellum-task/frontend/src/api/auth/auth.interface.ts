export type UserType = {
  email: string;
  id: number;
};

export type AuthResponseType = {
  user: UserType;
  accessToken: string;
};

export type AuthRequestType = {
  email: string;
  password: string;
};
