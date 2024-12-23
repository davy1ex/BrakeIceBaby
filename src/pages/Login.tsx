import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'


import store, { RootState } from '../store/store'

import { useNavigate } from 'react-router-dom'


const Login = () => {
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

export default Login