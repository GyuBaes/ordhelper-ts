'use client';
import { store } from '@/store';
import { Provider } from 'react-redux';
// next 13 app dir CustomProviders
export const Providers = ({ children }: { children: JSX.Element }) => {
  return <Provider store={store}>{children}</Provider>;
};
