import { Link, NavLink } from "react-router-dom"
import navLogo from "../../public/logo/icons8-ai-80.png"
import useAuth from "../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/allProducts"><li>Products</li></NavLink>
        {
            user && user?.email ? <NavLink to="/"><li>My Profile</li></NavLink> : <NavLink to="/login"><li>Login</li></NavLink>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 text-[#3A3F00] w-52 font-semibold p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-10 md:w-14" src={navLogo} alt="" />
                    <a className="text-2xl md:text-3xl lg:text-4xl font-bold text-"><span className="text-[#8f9182]">Product</span>Hunt</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu items-center gap-4 text-[#3A3F00] font-semibold menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="rounded-full">
                        <img src={user?.photoURL && user.photoURL} className="w-12 h-12 rounded-full" alt="user" />
                    </div>
                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-center">
                        <li className="text-center font-bold text-[#3A3F00] my-2">{user?.email && user?.displayName ? user?.displayName : user?.email}</li>
                        <NavLink className={"my-2 text-[#3A3F00]"} to="/dashboard"><li>Dashboard</li></NavLink>

                        <button onClick={handleLogOut} className="font-bold flex items-center gap-2 justify-center text-red-950">Log Out <MdLogout /></button>

                    </div>
                </div> : <Link to="/register" className="underline font-semibold text-[#3A3F00]">Register</Link>}
            </div>
        </div>
    );
};

export default Navbar;