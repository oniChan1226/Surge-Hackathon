import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {user} = useAuthContext();
    console.log(`${user} :: protected routes`);
    if(user) {
        return children;
    }
    return <Navigate to={"/"}/>
}

export default ProtectedRoute