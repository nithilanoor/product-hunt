import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CouponsList = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure(); // Call the hook here

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const res = await axiosSecure.get("/coupons");
      setCoupons(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coupons:", error);
      setLoading(false);
    }
  };

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

          if (res.status === 200) {
            setCoupons((prevCoupons) => prevCoupons.filter((coupon) => coupon._id !== couponId));
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

  return (
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
      {loading ? <p className="text-center mt-4">Loading coupons...</p> : coupons.length === 0 && <p className="text-center text-lg mt-4 font-bold">No coupons available.</p>}
    </div>
  );
};

export default CouponsList;
