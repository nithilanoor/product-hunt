import { NavLink } from "react-router-dom"
import navLogo from "../../public/logo/icons8-ai-80.png"


const Navbar = () => {

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/"><li>Products</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
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
                <ul className="menu gap-4 text-[#3A3F00] font-semibold menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">User</a>
            </div>
        </div>
    );
};

export default Navbar;