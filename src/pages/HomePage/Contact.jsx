import SectionTitle from "../../components/SectionTitle";
import { FaMailBulk } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <SectionTitle title={"contact"} subtitle={"feel free to reach out to us"} />

            <div className="bg-[#fcfbf9] py-5 mt-6">
            <div className="md:flex justify-around items-center">
                <div>
                    <div className="p-4">
                        <h1 className="text-[#3A3F00] text-4xl font-bold">Stay Informed With Our <br /> Newsletter</h1>
                        <p className="text-gray-600 font-semibold text-sm mt-1">Get updated information and news on insights and upcoming products</p>
                    </div>
                    <div className="join p-4">
                        <input className="input input-bordered rounded-full join-item" placeholder="Email" />
                        <button className="btn join-item text-[#F4F1EC] hover:text-[#3A3F00] bg-zinc-800 rounded-r-full">Subscribe</button>
                    </div>
                </div>
                <div className="flex justify-center">
                <FaMailBulk className="text-9xl text-[#8f9182]" />
                </div>
            </div>
        </div>

        </div>
    );
};

export default Contact;