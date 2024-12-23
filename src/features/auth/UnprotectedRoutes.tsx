import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import LangingPage from '../../pages/LangingPage'

const UnprotectedRoutes = () => {
    const user = true
    return !user 
        ? <Outlet />
        : <Navigate to={'/app/profile'}/>
}

export default UnprotectedRoutes