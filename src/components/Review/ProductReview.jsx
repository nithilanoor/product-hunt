import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewForm from "./ReviewForm";
// import '@smastrom/react-rating/style.css'


const ProductReview = ({ productId }) => {

    const [reviews, setReviews] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/reviews/${productId}`)
            .then(res => {
                setReviews(res.data)
            })
    }, [productId])

    return (
        <div>
            <div className="product-details">
                <h2 className="text-2xl font-bold text-[#3A3F00] mb-4">Reviews: ({reviews.length})</h2>

                {/* Swiper Slider for Reviews */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map((review) =>
                        <SwiperSlide key={review._id}>
                            <div className="review-card text-center border border-indigo-100 p-2 rounded-lg mb-3">
                                <div className="review-header justify-center flex items-center gap-2 mb-2">
                                    <img
                                        src={review.reviewerImage}
                                        alt={review.reviewerName}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="font-bold text-[#3A3F00]">{review.reviewerName}</p>
                                </div>
                                <p className="text-sm text-center mb-2 flex justify-center items-center gap-1">"{review.reviewDescription}"</p>
                                <div className="rating mx-auto text-yellow-500">
                                    Rating: {review.rating} / 5
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

            <div className="mt-10">
                <ReviewForm productId={productId} setReviews={setReviews} reviews={reviews}></ReviewForm>
            </div>

        </div>
    );
};

export default ProductReview;