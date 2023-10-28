import { createSlice, } from "@reduxjs/toolkit";
import { Products } from "../../data/types/Product.entity";
import { ImageSourcePropType } from 'react-native';

const initialState: Products = {
    _id: '',
    name: '',
    price: 0,
    image: '' as ImageSourcePropType,
    description: '',
    category: { _id: '', name: '', },
    size: [],
    topping: [],
}

const ProductsSlice = createSlice({
    name: 'Products',
    initialState: {
        ...initialState,
        ignoredPath: 'Products',
        ignoredNested: {
            one: 'one',
            two: 'two',
        },
    },
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
    },
});


export default ProductsSlice.reducer;
export const { setProducts } = ProductsSlice.actions;