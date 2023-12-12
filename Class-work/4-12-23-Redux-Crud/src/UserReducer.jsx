import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userReducer = createSlice({
    name: "users",
    initialState:usersList,
    reducers:{
         addUser : (state,action)=>{

            // console.log(action)

         }
    }

});

// export const {addUser}  = userReducer.actions;
export default userReducer.reducer;