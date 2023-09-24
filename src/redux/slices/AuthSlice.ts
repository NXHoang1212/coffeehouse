import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserData } from "../../data/types/User.entity";

const initialState: User = {
    _id: '',
    role: '',
    googleId: '',
    facebookId: '',
    email: '',
    name: '',
    holder: '',
    avatar: '',
    mobile: '',
    gender: '',
    birthday: '',
}


const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state._id = action.payload._id;
            state.role = action.payload.role;
            state.googleId = action.payload.googleId;
            state.facebookId = action.payload.facebookId;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.holder = action.payload.holder;
            state.avatar = action.payload.avatar;
            state.mobile = action.payload.mobile;
            state.gender = action.payload.gender;
            state.birthday = action.payload.birthday;
        },
        clearUser(state) {
            state._id = '';
            state.role = '';
            state.googleId = '';
            state.facebookId = '';
            state.email = '';
            state.name = '';
            state.holder = '';
            state.avatar = '';
            state.mobile = '';
            state.gender = '';
            state.birthday = '';
        },
        //cập nhật thông tin user
        updateUser(state, action: PayloadAction<UserData>) {

        }
    },
});


export default UserSlice.reducer;
export const { setUser, clearUser } = UserSlice.actions;
