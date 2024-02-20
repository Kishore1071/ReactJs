import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    devTools:true,
    reducer: {
        employees: employeeReducer,
        users: userSlice
    }
})