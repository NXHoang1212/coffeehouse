import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddRess } from '../../data/types/AddRess.entity';

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
  done: ''
};

const AddressSlice = createSlice({
  name: 'Address',
  initialState,
  reducers: {
    setAddress(state, action: PayloadAction<AddRess>) {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.DescribeAddRess = action.payload.DescribeAddRess;
      state.Other = action.payload.Other;
      state.Gate = action.payload.Gate;
      state.NoteOrther = action.payload.NoteOrther;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.phone = action.payload.phone;
      state.done = action.payload.done;
    },
    setMap(state, action) {
      state.DescribeAddRess = action.payload.DescribeAddRess;
    },
  },
});

export const { setAddress, setMap } = AddressSlice.actions;
export default AddressSlice.reducer;
