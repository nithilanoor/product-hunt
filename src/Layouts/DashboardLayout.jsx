import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddProduct from "../pages/Dashboard/AddProduct";
import MyProducts from "../pages/Dashboard/MyProducts";
import MyProfile from "../pages/Dashboard/MyProfile";


const DashboardLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="my-12">
                <div className="">
                    <div role="tablist" className="tabs flex">
                        <Link to="/dashboard/myProfile"><p role="tab" className="tab">My Profile</p></Link>
                        <Link to='/dashboard/addProduct'><p role="tab" className="tab tab-active">Add Product</p></Link>
                        <Link to=""><p role="tab" className="tab">My Products</p></Link>
                    </div>
                    <hr className="my-2" />
                    <div className="mt-5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DashboardLayout;