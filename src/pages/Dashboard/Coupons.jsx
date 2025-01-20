import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Coupons = () => {
    const [coupons, setCoupons] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [newCoupon, setNewCoupon] = useState({
        code: "",
        discount: "",
        expiryDate: "",
    });

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const res = await axiosSecure.get("/coupons");
                // const data = await res.json();
                setCoupons(res.data);
            } catch (error) {
                console.error("Error fetching coupons:", error);
            }
        };

        fetchCoupons();
    }, []);

    const handleDelete = async (couponId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the coupon!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/coupons/${couponId}`);

                    if (res.ok) {
                        setCoupons(coupons.filter((coupon) => coupon._id !== couponId));
                        Swal.fire("Deleted!", "Coupon has been removed.", "success");
                    } else {
                        Swal.fire("Error!", "Failed to delete the coupon.", "error");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        });
    };

    const handleAddCoupon = async (e) => {
        e.preventDefault();

        if (!newCoupon.code || !newCoupon.discount || !newCoupon.expiryDate) {
            Swal.fire("Error!", "Please fill in all fields.", "error");
            return;
        }

        try {
            const res = await axiosSecure("/coupons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCoupon),
            });

            if (res.ok) {
                const addedCoupon = await res.json();
                setCoupons([...coupons, addedCoupon]);
                setNewCoupon({ code: "", discount: "", expiryDate: "" });
                Swal.fire("Success!", "Coupon added successfully.", "success");
            } else {
                Swal.fire("Error!", "Failed to add coupon.", "error");
            }
        } catch (error) {
            Swal.fire("Error!", "Something went wrong.", "error");
        }
    };

    return (
        <div className="container mx-auto p-6 text-[#3A3F00]">
            <h2 className="text-2xl font-bold mb-4">Manage Coupons</h2>

            {/* Add Coupon Form */}
            <form onSubmit={handleAddCoupon} className="bg-base-100 p-4 shadow-md mb-6 rounded">
                <h3 className="text-lg font-semibold mb-2">Add New Coupon</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="input input-bordered w-full"
                        value={newCoupon.code}
                        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Discount %"
                        className="input input-bordered w-full"
                        value={newCoupon.discount}
                        onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                    />
                    <input
                        type="date"
                        className="input input-bordered w-full"
                        value={newCoupon.expiryDate}
                        onChange={(e) => setNewCoupon({ ...newCoupon, expiryDate: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] text-lg font-serif mt-4">Add Coupon</button>
            </form>

            {/* Coupons List */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Discount</th>
                            <th>Expiry Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon) => (
                            <tr key={coupon._id}>
                                <td>{coupon.code}</td>
                                <td>{coupon.discount}%</td>
                                <td>{new Date(coupon.expiryDate).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleDelete(coupon._id)} className="btn btn-sm btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {coupons.length === 0 && <p className="text-center mt-4">No coupons available.</p>}
            </div>
        </div>
    );
};



export default Coupons;