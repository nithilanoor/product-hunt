import SectionTitle from "../../components/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

const Mission = () => {

    const data = [
        {
            "id": 1,
            "title": "Empowering Innovation",
            "text": "Connecting creators, enthusiasts, and visionaries in a dynamic community",
            "logo": <FaUsers />
        },
        {
            "id": 2,
            "title": "Platform for Discovery",
            "text": "Providing a space for new, cutting-edge products to be discovered, shared, and supported",
            "logo": <MdOutlineScreenSearchDesktop />
        },
        {
            "id": 3,
            "title": "Visibility for Creators",
            "text": "Helping creators gain the recognition they deserve while keeping users ahead of the curve in technology",
            "logo": <FaBullhorn />
        },
        {
            "id": 4,
            "title": "A Hub for Innovation",
            "text": "Serving as the go-to platform for showcasing inventions, discovering tools, and engaging with like-minded individuals",
            "logo": <FaLightbulb />
        },
        {
            "id": 5,
            "title": "Bridging the Gap",
            "text": "Connecting creators and users to simplify the discovery of great tech and support innovative ideas",
            "logo": <FaRegHandshake />
        },
        {
            "id": 6,
            "title": "Inspiring Creativity & Progress",
            "text": "Encouraging creativity, accelerating technological progress, and creating a space where new ideas flourish and transform the world",
            "logo": <FaChartBar />
        },
    ]

    return (
        <div>
            <SectionTitle title={"objective"} subtitle={"Connecting creators and users to shape the future of tech"} />

            <div className="bg-[#F4F1EC] p-6 my-4 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#3A3F00] text-center">
                {
                    data.map(point => (
                        <div key={point.id} className="bg-[#fcfbf9] p-4 rounded shadow-md hover:shadow-xl space-y-2 border-b-2 hover:border-l-2">
                            <h4 className="font-bold text-3xl flex justify-center">{point.logo} </h4>
                            <h3 className="font-bold text-xl">{point.title}</h3>
                            <p className="font-semibold text-gray-600 italic">{point.text}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Mission;