import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAdmin from "../hooks/useAdmin";


const DashboardLayout = () => {

    const [isAdmin] = useAdmin();

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <section className="my-12 w-11/12 mx-auto pt-12 mt-16 min-h-screen">
                {isAdmin ?
                    <div>
                        <div role="tablist" className="tabs flex">
                            <Link to="/dashboard/stats"><p role="tab" className="tab">Statistics</p></Link>
                            <Link to='/dashboard/users'><p role="tab" className="tab tab-active">Manage Users</p></Link>
                            <Link to="/dashboard/coupons"><p role="tab" className="tab">Manage Coupons</p></Link>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-5">
                            <Outlet></Outlet>
                        </div>
                    </div>

                    :


                    <div>
                        <div role="tablist" className="tabs flex">
                            <Link to="/dashboard/myProfile"><p role="tab" className="tab">My Profile</p></Link>
                            <Link to='/dashboard/addProduct'><p role="tab" className="tab tab-active">Add Product</p></Link>
                            <Link to="/dashboard/myProducts"><p role="tab" className="tab">My Products</p></Link>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-5">
                            <Outlet></Outlet>
                        </div>
                    </div>
                }
            </section>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DashboardLayout;