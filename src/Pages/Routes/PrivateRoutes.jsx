import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();

    if(loading){
        return <progress className="progress w-56 bg-green-400 text-green-400"></progress>
    }
    if(user){
        return children;
    }
    // console.log('Private Page')
    return <Navigate to='/login' state={{from:location}} replace> </Navigate>

};

export default PrivateRoutes;