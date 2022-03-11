import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext';

export const ProtectedRoutes = ({ children }) => {

    const {user} = useUserAuth()

    if(!user) {

        return <Navigate to='/signup' />
    }
  return children
};
