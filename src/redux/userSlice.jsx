import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userFromeSlice: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, {payload}) => {
        state.userFromeSlice.push(payload);
    },
    deleteUser: (state, action) => {
        console.log(action.payload)
        state.userFromeSlice = state.userFromeSlice.filter((item) => item.id !== action.payload)
    }, 
    updateUser: (state, action) => {
        const { name, gender, gen} = action.payload
        
        const editItem = state.userFromeSlice.find(item => item.id === action.payload.id)
        if(editItem){
          editItem.name = name
          editItem.gender = gender
          editItem.gen = gen
        }
    }
  },
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer