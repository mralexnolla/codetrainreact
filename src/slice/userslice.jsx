import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};



export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, {payload}) => {
        console.log(payload)
      state.users.push(payload)
    },
    updateUser: (state, {payload}) => {
        const { id, uname } = payload
        const user = state.users.find(user => user.id === id)
        if(user){
            user.name = uname
        }
    },
    deleteUser: (state, {payload}) => {
        state.users = state.users.filter(user => user.id !== payload)
    }
    
  },
});

// Action creators are generated for each case reducer function
export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
