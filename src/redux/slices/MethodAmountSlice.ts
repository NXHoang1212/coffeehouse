import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';

export interface MethodAmountState {
  name: string;
  image: ImageSourcePropType;
}

const initialState: MethodAmountState = {
  name: '',
  image: '' as ImageSourcePropType,
};

const MethodAmounSlice = createSlice({
  name: 'methodamount',
  initialState,
  reducers: {
    AddMethodAmount: (state, action: PayloadAction<MethodAmountState>) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    clearMethodAmount: state => {
      state.name = '';
      state.image = '' as ImageSourcePropType;
    },
  },
});

export default MethodAmounSlice.reducer;
export const {AddMethodAmount, clearMethodAmount} = MethodAmounSlice.actions;
