import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import {Discount} from '../../data/types/Discount.entity';

const initialState: Discount = {
  _id: '',
  Tilte: '',
  name: '',
  nameQR: {
    data: [],
    type: '',
  },
  description: '',
  image: '' as ImageSourcePropType,
  price: 0,
  start: '',
  end: '',
  status: '',
};

const DiscountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setDiscount: (state, action: PayloadAction<Discount>) => {
      state._id = action.payload._id;
      state.Tilte = action.payload.Tilte;
      state.name = action.payload.name;
      state.nameQR = action.payload.nameQR;
      state.description = action.payload.description;
      state.image = action.payload.image;
      state.price = action.payload.price;
      state.start = action.payload.start;
      state.end = action.payload.end;
      state.status = action.payload.status;
    },
  },
});

export default DiscountSlice.reducer;
export const {setDiscount} = DiscountSlice.actions;
