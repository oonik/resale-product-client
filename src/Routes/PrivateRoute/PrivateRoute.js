import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

      if(loading){
        return <Loading></Loading>
      }
      if(user){
        return children;
      }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;