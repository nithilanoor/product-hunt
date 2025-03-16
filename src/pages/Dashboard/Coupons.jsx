import { useState } from "react";
import CouponsList from "./CouponList";
import Swal from "sweetalert2";

const Coupon = () => {
    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
        expiryDate: "",
    });

    // const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setCoupon({ ...coupon, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://product-hunt-server-nu.vercel.app/coupons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code: coupon.code,
                discount: Number(coupon.discount),
                expiryDate: coupon.expiryDate,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                text: "Coupon added successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              
            // setMessage("Coupon added successfully!");
            setCoupon({ code: "", discount: "", expiryDate: "" });
        } else {
            // setMessage(data.error || "Failed to add coupon");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }
    };

    return (
        <div className="container mx-auto p-6 text-[#3A3F00]">
            <h2 className="text-2xl font-bold mb-4">Manage Coupons</h2>

            {/* {message && <p className="text-green-600">{message}</p>} */}

            {/* Add Coupon Form */}
            <form onSubmit={handleSubmit} className="bg-base-100 p-4 shadow-lg mb-6 rounded">
                <h3 className="text-lg font-bold mb-2">Add New Coupon</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                        <label className="block font-medium">Coupon Code:</label>
                        <input
                            type="text"
                            name="code"
                            value={coupon.code}
                            onChange={handleChange}
                            required
                            className="w-full border rounded p-2"
                            placeholder="Enter coupon code"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Discount (%):</label>
                        <input
                            type="number"
                            name="discount"
                            value={coupon.discount}
                            onChange={handleChange}
                            required
                            className="w-full border rounded p-2"
                            placeholder="Enter discount"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Expiry Date:</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={coupon.expiryDate}
                            onChange={handleChange}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>
                </div>

                <button type="submit" className="btn bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] text-lg font-serif mt-4">Add Coupon</button>

            </form>
            <div className="my-14">
                <CouponsList></CouponsList>
            </div>
        </div>
    );
};

export default Coupon;
