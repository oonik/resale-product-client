import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.error(err)
            })
    }
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button className='btn btn-primary btn-sm text-white' onClick={handleLogout}>logout</button></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Resale Product</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:font-bold">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;