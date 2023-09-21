import { createSlice } from "@reduxjs/toolkit";
import { CartOrder } from "../../data/types/CartOrder.entity";

const initialState: CartOrder = {
    _id: '',
    NameProduct: '',
    PriceProduct: 0,
    SizeProduct: '',
    ToppingProduct: '',
    QuantityProduct: 0,
    NoteProduct: '',
    AmountShipping: 0,
    UserId: '',
}

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {

    },
});


export default CartSlice.reducer;