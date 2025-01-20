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
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="My Profile" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <MyProfile />
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Add Product" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <AddProduct />
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="My Products" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <MyProducts />
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