import React from 'react';

import { Navigate, Outlet } from 'react-router-dom'
import Layout from 'src/components/Layout';

const useAuth = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = (props: any) => {

    const auth = useAuth()

    return auth ? <Layout><Outlet /></Layout> : <Navigate to="/login" />
}

export default ProtectedRoutes;