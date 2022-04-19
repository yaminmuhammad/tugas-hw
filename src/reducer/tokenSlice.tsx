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
    },
});
export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
