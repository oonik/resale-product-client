import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import useSeller from '../hook/useSeller';
import useAdmin from '../hook/useAdmin';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side rounded">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-sky-400 font-bold">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>My order</Link></li>
                    
                    
                    {
                        (isSeller || isAdmin) &&  <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    }
                    {
                        isAdmin && <li><Link to='/dashboard/alluser'>All user</Link></li>
                    }
                </ul>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;