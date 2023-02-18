import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { unitList } from '@/units';
import { Unit } from '@/types/Unit';

const initialState: Unit[] = unitList;

export const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    addUnitQty: (state, action: PayloadAction<Unit>) => {
      console.log(action.payload);

      action.payload.qty += 1;
      return state;
    },
    decrement: (state, action: PayloadAction<Unit>) => {
      action.payload.qty -= 1;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUnitQty, decrement } = unitSlice.actions;

export default unitSlice.reducer;
