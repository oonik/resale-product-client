import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hook/useSeller';
import Loading from '../../Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';


const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

     if(loading || isSellerLoading || isAdminLoading){
        return <Loading></Loading>
     }

     if((user && isSeller) || isAdmin){
        return children;
     }
     
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;