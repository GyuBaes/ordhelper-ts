import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { unitList } from '@/units';
import { Unit } from '@/types/Unit';
import { setCombinationUnit } from '@/calculator';

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
    setUnitQty: (
      state,
      action: PayloadAction<{ value: number; index: number }>,
    ) => {
      state[action.payload.index].qty = action.payload.value;
    },
    setCombination: (state, action: PayloadAction<Unit>) => {
      state = setCombinationUnit(state, action.payload);
    },
    resetQty: (state, action: PayloadAction<string>) => {
      return state.map(el => {
        return el.grade === action.payload ? { ...el, ...{ qty: 0 } } : el;
      });
    },
  },
});

export const {
  addUnitQty,
  minusUnitQty,
  setUnitQty,
  setCombination,
  resetQty,
} = unitSlice.actions;

export default unitSlice.reducer;
