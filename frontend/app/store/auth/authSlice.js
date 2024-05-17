import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status: 'checking',
    user:{},
    errormessage: undefined,

   },
   reducers: {
   onChecking: (state) => {
    state.status = 'checking';
    state.user = {};
    state.errormessage = undefined;
   },
   onLogin:(state, {payload})=>{
    state.status = 'authenticated';
    state.user = payload;
    state.errormessage = undefined;

   },
   onLogout:(state, {payload})=>{
    state.status = 'not-authenticated';
    state.user = {};
    state.errormessage = payload;

   },
   clearErrorMessage:(state)=>{
    state.errormessage = undefined
   }
  }
})

// Action creators are generated for each case reducer function
export const { onChecking , onLogin ,onLogout,clearErrorMessage} = authSlice.actions