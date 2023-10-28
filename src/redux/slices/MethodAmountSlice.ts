import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from 'react-native';

interface MethodAmountState {
    name: string;
    image: ImageSourcePropType;
}

const initialState: MethodAmountState = {
    name: '',
    image: '' as ImageSourcePropType,
}

const MethodAmounSlice = createSlice({
    name: 'methodamount',
<<<<<<< HEAD
    initialState,
=======
    initialState: {
        ...initialState,
        ignoredPath: 'methodamount',
        ignoredNested: {
            one: 'one',
            two: 'two',
        },
    },
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
    reducers: {
        AddMethodAmount: (state, action: PayloadAction<MethodAmountState>) => {
            state.name = action.payload.name;
            state.image = action.payload.image;
        },
        clearMethodAmount: (state) => {
            state.name = '';
            state.image = '' as ImageSourcePropType;
        }
    },
});


export default MethodAmounSlice.reducer;
export const { AddMethodAmount, clearMethodAmount } = MethodAmounSlice.actions;