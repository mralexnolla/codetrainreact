import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createUser: (state, {payload}) => {
       state.users.push(payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions;

export default userSlice.reducer;
