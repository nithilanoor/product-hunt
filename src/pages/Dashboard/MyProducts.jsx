import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/myProducts?email=${user.email}`)
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
    }, [user.email])

    const handleDelete = async (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`https://product-hunt-server-nu.vercel.app/products/${productId}`, {
                        method: "DELETE",
                    });

                    if (res.ok) {
                        setProducts(products.filter((product) => product._id !== productId));
                        Swal.fire("Deleted!", "Your product has been deleted.", "success");
                    } else {
                        Swal.fire("Error!", "Failed to delete the product.", "error");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        });
    };

    return (
        <div className="container mx-auto p-6 text-[#3A3F00]">
            <h2 className="text-2xl font-bold mb-4">My Products: ({products.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="card bg-base-100 shadow-[#d8d0c3] shadow-md p-4 hover:shadow-xl">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-sm text-gray-500 font-semibold mt-1">Status: {product.status}</p>
                        <div className="mt-4 flex justify-around items-center">
                            <Link to={`/details/${product._id}`}><button className="btn btn-sm hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00] font-serif">View Details</button></Link>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-sm text-red-800 font-serif bg-white hover:bg-white hover:border-red-950">
                                <FaTrash className="mr-1" /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProducts;
