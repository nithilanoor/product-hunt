import { IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";


const Trending = () => {

    const [product, setProduct] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/trending/products')
            .then(res => {
                setProduct(res.data);
            })
    }, [])

    return (
        <div>
            <div>
                <SectionTitle title={'trending'} subtitle={"Discover what’s making waves in the world of tech"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {
                    product.map(item => <ProductItem key={item._id} item={item}></ProductItem>)
                }
            </div>
            <div className="mx-auto text-center my-10">
                <Link to="allProducts"><button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00] text-lg font-serif">
                    Show All Products <IoIosArrowForward />
                </button></Link>
            </div>
        </div>
    );
};

export default Trending;