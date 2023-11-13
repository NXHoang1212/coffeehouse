import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApplyPromodiscountState {
  promodiscount: number;
}

const initialState: ApplyPromodiscountState = {
  promodiscount: 0,
};

const ApplyPromodiscount = createSlice({
  name: 'ApplyPromodiscount',
  initialState,
  reducers: {
    setPromodiscount: (state, action: PayloadAction<number>) => {
      state.promodiscount = action.payload;
    },
  },
});

export const {setPromodiscount} = ApplyPromodiscount.actions;
export default ApplyPromodiscount.reducer;
