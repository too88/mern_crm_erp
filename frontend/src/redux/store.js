import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { storePersist } from "./storePersist";

const initialState = {}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})

export default store;