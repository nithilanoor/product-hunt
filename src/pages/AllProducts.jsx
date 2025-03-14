import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import axios from 'axios';
import SectionTitle from '../components/SectionTitle';
import { MdManageSearch } from 'react-icons/md';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [search, page]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://product-hunt-server-nu.vercel.app/accepted/products', {
                params: { search, page }
            });
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className='pt-8 my-12 w-11/12 mx-auto min-h-screen'>
            <div className='my-6'>
                <SectionTitle title={'explore'} subtitle={'Support your favorite products and discover new ones.'}></SectionTitle>
            </div>

            <div className='flex items-center gap-2 text-[#3A3F00]'>
                <p className='text-2xl'><MdManageSearch /></p>
                <input
                    type="text"
                    placeholder="Search products by tags..."
                    className="border p-2 rounded-lg w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {products.map((item) => (
                    <ProductItem key={item._id} item={item} />
                ))}
            </div>


            <div className="flex justify-center my-6 gap-2">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-1 bg-[#cecfc6] rounded"
                >
                    Prev
                </button>
                <span className="px-4 py-1">{page} / {totalPages}</span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-4 py-1 bg-[#cecfc6] rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllProducts;