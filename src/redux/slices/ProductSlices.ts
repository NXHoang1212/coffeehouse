// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { DetailProduct, Products } from '../../data/types/Product.entity';
// import { ImageSourcePropType } from 'react-native';
// import { useGetProductsQuery } from '../../service/api/IndexProducts';
// const initialState: DetailProduct[] = [];
// const productsSlice = createSlice({
//   name: 'Products',
//   initialState,
//   reducers: {
//     setProducts: (state, action: PayloadAction<DetailProduct[]>) => {
//       return action.payload;
//     },
//   },
// });
// export default productsSlice.reducer;
// export const { setProducts } = productsSlice.actions;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DetailProduct } from '../../data/types/Product.entity';
import AxiosInstance from '../../utils/AxiosIntance';

interface ProductsState {
  data: DetailProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  loading: boolean;
}

const initialState: ProductsState = {
  data: [],
  status: 'idle',
  error: '' || null,
  loading: false, 
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await AxiosInstance().get('/api/users/product');
  return response.data;
});



const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Đã xảy ra lỗi';
    });
  },
});

export default productsSlice.reducer;



