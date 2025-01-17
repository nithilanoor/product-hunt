import BannerImg from "../../../public/ProductAssets/Banner.png"
import Footer from "../../components/Footer";

const Banner = () => {
    return (
        <div className="relative w-ful py-20">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto text-center relative z-10 py-4 px-4">
                <h1 className="text-4xl font-extrabold mb-4 text-[#fdffe3]">Discover the Best Web and AI Tools</h1>
                <p className="text-lg mb-6 text-white">Explore cutting-edge web applications and software to boost your productivity, creativity, and more!</p>
                <button className="btn bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] text-lg font-serif">
                    Start Exploring
                </button>
            </div>
            <img src={BannerImg} alt="Web Applications Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        </div>
    );
};

export default Banner;