import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";


export const makeStore = configureStore({
    reducer:{
        auth:authSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
    })

