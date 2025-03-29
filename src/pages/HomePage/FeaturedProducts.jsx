import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductItem from "../../components/ProductItem";


const FeaturedProducts = () => {

    const [product, setProduct] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/featured/products')
            .then(res => {
                setProduct(res.data);
            })
    }, [])

    return (
        <div>
            <div>
                <SectionTitle title={'featured'} subtitle={"Explore the best of the best, curated just for you"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 md:w-10/12 lg:w-11/12 mx-auto">
                {
                    product.map(item => <ProductItem key={item._id} item={item}></ProductItem>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;