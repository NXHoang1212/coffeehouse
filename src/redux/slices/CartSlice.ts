import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartOrder } from "../../data/types/CartOrder.entity";

const initialState: CartOrder = {
    _id: '',
    UserId: '',
    ProductId: [
        {
            _id: '',
            ProductId: '',
            NameProduct: '',
            PriceProduct: 0,
            QuantityProduct: 0,
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
<<<<<<< HEAD
            state._id = action.payload._id;
            state.UserId = action.payload.UserId;
            state.ProductId = action.payload.ProductId;
=======
            ;
            //push là thêm vào cuối mảng ProductId 1 phần tử mới 
            state.ProductId.push(action.payload.ProductId[0]);
        },
        updateCartItem: (state, action) => {
            // Tìm sản phẩm trong danh sách ProductId theo action.payload.ProductId và cập nhật thông tin mới
            const updatedProductIndex = state.ProductId.findIndex(product => product._id === action.payload.ProductId);
            if (updatedProductIndex !== -1) {
                state.ProductId[updatedProductIndex] = { ...state.ProductId[updatedProductIndex], ...action.payload.data };
            }
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
        },
        removeCart: (state) => {
            state._id = '';
            state.UserId = '';
            state.ProductId = [
                {
                    _id: '',
                    ProductId: '',
                    NameProduct: '',
                    PriceProduct: 0,
                    QuantityProduct: 0,
                    ToppingProduct: [],
                    SizeProduct: '',
                    NoteProduct: '',
                }
            ]
<<<<<<< HEAD
=======
        },
        //xóa từng sản phẩm trong danh sách ProductId theo action.payload.ProductId
        removeCartItem: (state, action) => {
            const removedProductIndex = state.ProductId.findIndex(product => product._id === action.payload.ProductId);
            if (removedProductIndex !== -1) {
                state.ProductId.splice(removedProductIndex, 1);
            }
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
        },
    },
});


export default CartSlice.reducer;
export const { AddCart, removeCart, updateCartItem, removeCartItem } = CartSlice.actions;