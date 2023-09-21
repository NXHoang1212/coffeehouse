import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddRess } from "../../data/types/AddRess.entity";

const initialState: AddRess = {
    _id: '',
    name: '',
    DescribeAddRess: '',
    Other: '',
    Gate: '',
    NoteOrther: '',
    userId: '',
    username: '',
    phone: '',
}

const AddressSlice = createSlice({
    name: 'Address',
    initialState,
    reducers: {
        setAddress(state, action: PayloadAction<AddRess>) {
            return action.payload;
        },
        setMap(state, action) {
            state.DescribeAddRess = action.payload.DescribeAddRess;
        },
    },
});

export const { setAddress, setMap } = AddressSlice.actions;
export default AddressSlice.reducer;