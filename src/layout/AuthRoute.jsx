import React from 'react'
import { Navigate } from 'react-router-dom';

export const AdminRoute = ({isAdmin, children}) => {
    return isAdmin ? <>{children}</> : <Navigate to="/dashboard" />;
}