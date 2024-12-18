import React from 'react'
import { useRoleAuth } from '../../context/RoleAuth'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {role} = useRoleAuth();
    if(!role) {
        return <Navigate to={"/"}/>
    }
    return children;
}

export default ProtectedRoute