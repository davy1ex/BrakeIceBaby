import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import MainLayout from "../../../shared/ui/main-layout"
import { RootState } from "../store/store"

const ProtectedRoutes = () => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    return isAuthenticated ? <MainLayout> <Outlet/> </MainLayout> : <Navigate to='/login' />
}

export default ProtectedRoutes