import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hook/useSeller';
import Loading from '../../Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

     if(loading || isSellerLoading){
        return <Loading></Loading>
     }

     if(user && isSeller){
        return children;
     }
     
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;