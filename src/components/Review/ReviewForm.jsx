import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ReviewForm = ({ productId }) => {

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = e => {
        e.preventDefault();

        const review = {
            productId,
            reviewerName: user.displayName,
            reviewerImage: user.photoURL,
            reviewDescription: reviewText,
            rating
        }

        axiosSecure.post('/reviews', review)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    alert('review submitted');
                    setReviewText('');
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your review..."
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                    className="border p-2 w-full mt-2"
                    required
                />
                <button type="submit" className="hover:bg-[#F4F1EC] bg-[#8f9182] text-white px-5 py-1 border rounded-lg font-bold hover:text-[#3A3F00] text-lg font-serif my-4">
                    Add Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;