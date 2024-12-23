import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../../../utils/store'

const UnprotectedRoutes = () => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)

    return !isAuthenticated 
        ? <Outlet />
        : <Navigate to={'/app/profile'}/>
}

export default UnprotectedRoutes