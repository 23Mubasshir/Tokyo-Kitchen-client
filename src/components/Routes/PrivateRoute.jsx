import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="light" />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" state={{from: location}}></Navigate>;
};

export default PrivateRoute;