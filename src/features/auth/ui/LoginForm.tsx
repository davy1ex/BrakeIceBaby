import { useEffect } from "react";
import { userLogin } from "../models/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { RootState } from '../../../app/providers/store/store'


export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
      if (isAuthenticated) navigate('/profile')
    }, [isAuthenticated, navigate])

    const handleAuth = (e) => {
        e.preventDefault()
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        console.log(e.target.username.value)
        dispatch(userLogin({login: username, password}))
    }
    
    return (
        <div>
        <h4>Login</h4>
        <form onSubmit={handleAuth}>
            <input type="text" name="username" id="" />
            <input type="text" name="password" id="" />

            <input type="submit" value="login"/>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
    )
}