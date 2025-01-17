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
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-[#3A3F00]">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-[#3A3F00]">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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