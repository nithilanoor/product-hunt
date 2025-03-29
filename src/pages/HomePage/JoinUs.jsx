import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";


const JoinUs = () => {
    return (
        <div>
            <SectionTitle title={"participate"} subtitle={"connect with our community"} />

            <div style={{
                backgroundImage: "url(/ProductAssets/banner2.jpg)"
            }} className="bg-cover bg-fixed mt-4">
                <div className="bg-black bg-opacity-25">
                <div className="md:flex gap-4 justify-center items-center py-8 px-16 text-white">
                    <div>
                        <img className="object-cover w-96 rounded" src={"/ProductAssets/banner3.jpg"} alt="" />
                    </div>
                    <div>
                        <p className="text-xl font-extrabold text-[#fdffe3]">JOIN OUR COMMUNITY</p>
                        <p>Join our community and connect with like-minded people! Share ideas, learn together, and grow in a supportive environment. Be part of something amazing!</p>
                        <Link to={"/dashboard/addProduct"}><button className="btn btn-sm mt-4 px-4 bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] font-serif">Connect With Us</button></Link>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default JoinUs;