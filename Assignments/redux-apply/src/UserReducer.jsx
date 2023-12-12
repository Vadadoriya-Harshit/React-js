import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";


const userReducer = createSlice({
    name:"users",
    initialState:usersList,
    reducers:{

        addUsers : (state,action)=>{
            // console.log(action)
            console.log(action.payload)
            state.push(action.payload)
        }

        // updateUsers : (state,action)=>{
        //     // console.log(action)
        //     console.log(action.payload)
        //     state.push(action.payload)
        // }

    }
})

export const {addUsers}  =  userReducer.actions;
export default userReducer.reducer;