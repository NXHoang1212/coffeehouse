import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
import { Category } from '../../data/types/Banner&Category.entity';

export interface ProductSuggest {
  _id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
  category: Category;
  size: any[];
  topping: any[];
}


const initialState: ProductSuggest[] = [];

const ProductSuggestSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setProductSuggest: (state, action: PayloadAction<ProductSuggest[]>) => {
      const maxProductCount = 4;
      if (action.payload.length > maxProductCount) {
        state = action.payload.slice(0, maxProductCount);
      } else {
        state = action.payload;
      }
      return state; 
    },
  },
});




const { reducer, actions } = ProductSuggestSlice;
export const { setProductSuggest } = actions;
export default reducer;
