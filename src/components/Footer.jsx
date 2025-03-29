import { Link } from "react-router-dom";
import footerLogo from "../../public/logo/icons8-ai-100.png"

const Footer = () => {
    return (
        <div>
            <div className="footer bg-[#F4F1EC] text-base-content p-10">
                <div>
                    <img src={footerLogo} alt="" />
                    <p>
                        <a className="text-2xl md:text-3xl lg:text-4xl font-bold text-"><span className="text-[#8f9182]">Product</span>Hunt</a>
                        <br />
                        <span className="text-[#3A3F00]">Providing reliable tech since 2020</span>
                    </p>
                </div>
                <nav className="text-[#3A3F00]">
                    <h6 className="footer-title">Services</h6>
                    <Link to={"/allProducts"} className="link link-hover">Products</Link>
                    <Link to={"/dashboard/addProduct"} className="link link-hover">Add Products</Link>
                    <Link to={"/dashboard/myProfile"} className="link link-hover">Dashboard</Link>
                    <Link to={"/dashboard/myProfile"} className="link link-hover">Profile</Link>
                </nav>
                <nav className="text-[#3A3F00]">
                    <h6 className="footer-title">Company</h6>
                    <Link to={"/"} className="link link-hover">Home</Link>
                    <Link to={"/allProducts"} className="link link-hover">Products</Link>
                </nav>
            </div>
            <div className="footer footer-center bg-[#F4F1EC] text-base-content p-4">
                <aside>
                    <p className="text-[#3A3F00]">Copyright © {new Date().getFullYear()} - All right reserved by Product Hunt Ltd</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;