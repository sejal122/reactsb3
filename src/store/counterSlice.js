import { createSlice } from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0,
        name:'sejal'
    },
    reducers:{
        increment:(state)=>{
         state.counter=state.counter+1
        },
        decrement:(state)=>{
            state.counter=state.counter-1
        }
    }
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer