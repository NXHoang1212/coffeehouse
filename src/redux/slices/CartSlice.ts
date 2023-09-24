import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        AddCart: (state, action: PayloadAction<CartOrder>) => {
            state._id = action.payload._id;
            state.NameProduct = action.payload.NameProduct;
            state.PriceProduct = action.payload.PriceProduct;
            state.SizeProduct = action.payload.SizeProduct;
            state.ToppingProduct = action.payload.ToppingProduct;
            state.QuantityProduct = action.payload.QuantityProduct;
            state.NoteProduct = action.payload.NoteProduct;
            state.AmountShipping = action.payload.AmountShipping;
            state.UserId = action.payload.UserId;
        }
    },
});


export const { AddCart } = CartSlice.actions;
export default CartSlice.reducer;