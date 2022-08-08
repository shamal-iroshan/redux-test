import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../views/Home/slice/homeSlice'

const store = configureStore({
    reducer: {homeReducer: homeReducer}
});

export default store;