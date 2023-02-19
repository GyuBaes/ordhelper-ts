import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { unitList } from '@/units';
import { Unit } from '@/types/Unit';

const initialState: Unit[] = unitList;

export const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    addUnitQty: (state, action: PayloadAction<number>) => {
      state[action.payload].qty += 1;
    },
    minusUnitQty: (state, action: PayloadAction<number>) => {
      state[action.payload].qty -= 1;
    },
  },
});

export const { addUnitQty, minusUnitQty } = unitSlice.actions;

export default unitSlice.reducer;
