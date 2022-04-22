import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tokenState } from "interfaces/interface";

const initialState: tokenState = {
    value: "",
};
export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        removeToken: (state) => {
            state.value = "";
        }
    },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
