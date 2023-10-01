import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartOrder } from "../../data/types/CartOrder.entity";

const initialState: CartOrder = {
    _id: '',
    NameProduct: '',
    PriceProduct: '',
    SizeProduct: [],
    ToppingProduct: [],
    QuantityProduct: '',
    NoteProduct: '',
    AmountShipping: '',
    UserId: '',
}

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        AddCart: (state, action: PayloadAction<CartOrder>) => {
            // state._id = action.payload._id;
            state.NameProduct = action.payload.NameProduct;
            state.PriceProduct = action.payload.PriceProduct;
            state.SizeProduct = action.payload.SizeProduct;
            state.ToppingProduct = action.payload.ToppingProduct;
            state.QuantityProduct = action.payload.QuantityProduct;
            state.NoteProduct = action.payload.NoteProduct;
            state.AmountShipping = action.payload.AmountShipping;
            state.UserId = action.payload.UserId;
        },
        removeCart: (state) => {
            state._id = '';
            state.NameProduct = '';
            state.PriceProduct = '';
            state.SizeProduct = [];
            state.ToppingProduct = [];
            state.QuantityProduct = '';
            state.NoteProduct = '';
            state.AmountShipping = '';
            state.UserId = '';
        },
    },
});


export default CartSlice.reducer;
export const { AddCart, removeCart } = CartSlice.actions;