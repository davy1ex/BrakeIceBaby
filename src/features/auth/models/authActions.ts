import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from 'axios'
import {deauthUser} from './authSlice'

const apiUrl = import.meta.env.URL_API

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({login, password}, thunkAPI) => {
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }
        
        const { data } = await axios.post(
            `http://localhost:3000/api/signin`,
            { login, password },
            config
        )

        return data
    }
)

export const logout = () => (dispatch: any) => {
    localStorage.removeItem('userToken'); 
    dispatch(deauthUser());
};