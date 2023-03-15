'use client';
import { store } from '@/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// next 13 app dir CustomProviders
export const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
