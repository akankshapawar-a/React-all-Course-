import {createSlice} from "@reduxjs/toolkit";
import React from 'react'

export const incdecSlice=createSlice({
    //createslice compulsory required a name 
    name:'incdec',
    initialState:10,
    reducers: {//object
        Inc:(state ,action)=>{//action if required
return state +=action.payload;

        },
        Dec:(state ,action)=>{
            return state -=action.payload;   //using payload 
        }
    }
})
export const{Inc , Dec}=incdecSlice.actions;
export default incdecSlice.reducer;