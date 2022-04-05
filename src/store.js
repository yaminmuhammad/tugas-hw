import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducer/tokenSlice";

export default configureStore({
    reducer: {
        token: tokenReducer,
    },
});