import { configureStore } from '@reduxjs/toolkit';
import unitList from '@/reducer/unitList';

export const store = configureStore({
  reducer: {
    unit: unitList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
