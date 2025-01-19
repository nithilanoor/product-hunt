import { IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";


const Trending = () => {
    return (
        <div>
            <div>
                <SectionTitle title={'trending'} subtitle={"Discover what’s making waves in the world of tech"}></SectionTitle>
            </div>
            <div className="mx-auto text-center my-8">
                <Link to="allProducts"><button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00] text-lg font-serif">
                    Show All Products <IoIosArrowForward />
                </button></Link>
            </div>
        </div>
    );
};

export default Trending;