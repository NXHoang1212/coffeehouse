import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartOrder } from "../../data/types/CartOrder.entity";

const initialState: CartOrder = {
    _id: '',
    UserId: '',
    ProductId: [
        {
            NameProduct: '',
            PriceProduct: '',
            QuantityProduct: '',
            ToppingProduct: [],
            SizeProduct: '',
            NoteProduct: '',
        }
    ]
}

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        AddCart: (state, action: PayloadAction<CartOrder>) => {
            state._id = action.payload._id;
            state.UserId = action.payload.UserId;
            state.ProductId = action.payload.ProductId;
        },
        removeCart: (state) => {
            state._id = '';
            state.UserId = '';
            state.ProductId = [
                {
                    NameProduct: '',
                    PriceProduct: '',
                    QuantityProduct: '',
                    ToppingProduct: [],
                    SizeProduct: '',
                    NoteProduct: '',
                }
            ]
        },
    },
});


export default CartSlice.reducer;
export const { AddCart, removeCart } = CartSlice.actions;