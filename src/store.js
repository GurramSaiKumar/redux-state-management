import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./reducer";

const store = configureStore({
    reducer : {
        counter : CountReducer,        
    }
});
export default store;