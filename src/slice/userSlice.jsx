import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {name: "Mark",email: "mark@mark.com",phone: "+2330543846198",location: "East legon",id: uuid(),}
  ],
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers : {
         createUser: (state, action) => {
            state.users.push(action.payload)
          }
    }
})

export const { createUser } = userSlice.actions
export default userSlice.reducer


