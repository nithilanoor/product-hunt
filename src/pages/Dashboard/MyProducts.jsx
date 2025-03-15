import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const user = useAuth(); // Assuming user is stored in localStorage
     // Adjust based on your user structure

    useEffect(() => {
        const fetchMyProducts = async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        if (user?.email) fetchMyProducts();
    }, [user?.email]);

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
                    const res = await fetch(`http://localhost:5000/products/${productId}`, {
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
                    <div key={product._id} className="card bg-base-100 shadow-md p-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500">Upvotes: {product.upvotes}</p>
                        <p className="text-sm text-gray-500">Status: {product.status}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/edit-product/${product._id}`} className="btn btn-sm btn-primary">
                                <FaEdit className="mr-1" /> Edit
                            </Link>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-error">
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
