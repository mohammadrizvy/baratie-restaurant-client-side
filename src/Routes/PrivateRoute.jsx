import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;