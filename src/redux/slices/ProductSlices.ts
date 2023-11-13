import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DetailProduct, Products} from '../../data/types/Product.entity';
import {ImageSourcePropType} from 'react-native';
import {useGetProductsQuery} from '../../service/api/IndexProducts';

const initialState: DetailProduct[] = [];

const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<DetailProduct[]>) => {
      return action.payload;
    },
  },
});

export default productsSlice.reducer;
export const {setProducts} = productsSlice.actions;
