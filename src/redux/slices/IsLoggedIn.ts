import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IsLoggedInState {
    isLoggedIn: boolean;
}


const initialState: IsLoggedInState = {
    isLoggedIn: false,
}

const IsLoggedInSlice = createSlice({
    name: 'LoggedIn',
    initialState,
    reducers: {
        setLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload;
        },
        ResetLoggedIn(state) {
            state.isLoggedIn = false;
        }
    },

});

export const { setLoggedIn, ResetLoggedIn } = IsLoggedInSlice.actions;
export default IsLoggedInSlice.reducer;