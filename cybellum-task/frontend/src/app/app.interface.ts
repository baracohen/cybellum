import { ReactNode } from 'react';

export type Route = {
  path: string;
  element: ReactNode;
  children?: Route[];
};
