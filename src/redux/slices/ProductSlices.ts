import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/types/product/Product.entity";

const initialState: Products = {
    _id: '',
    name: '',
    price: 0,
    image: '',
    description: '',
    category: { _id: '', name: '', },
    size: [],
    topping: [],
}

const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
});


export default ProductsSlice.reducer;