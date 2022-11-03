import React from 'react';

import { Outlet } from 'react-router-dom'
import Layout from 'src/components/Layout';


const PublicRoutes = (props: any) => {
    // return auth ? <Navigate to="/" /> : <Outlet />
    return (
        <Outlet />
    )
}

export default PublicRoutes;