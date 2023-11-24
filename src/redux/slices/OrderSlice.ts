import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderId {
    _id: string;
}

const initialState: OrderId = {
    _id: '',
};

const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState,
    reducers: {
        AddOrder: (state, action: PayloadAction<OrderId>) => {
            state._id = action.payload._id;
        },
        removeOrder: state => {
            state._id = '';
        },
    },
});

export const { AddOrder, removeOrder } = OrderSlice.actions;
export default OrderSlice.reducer;