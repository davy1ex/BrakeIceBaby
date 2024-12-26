import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

interface authSlice {
    isAuthenticated: boolean,
    token: string | null,
    loading: boolean, 
    error: boolean | null | string
}

const initialState:authSlice = {
    isAuthenticated: false,
    token: null,
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        deauthUser(state) {
            state.isAuthenticated = false
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = payload.token; 
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload as string; 
            });
    },
})

export default authSlice.reducer
export const { deauthUser } = authSlice.actions