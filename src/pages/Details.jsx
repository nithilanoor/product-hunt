import { BiSolidHomeHeart } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import ProductReview from "../components/Review/ProductReview";


const Details = () => {

    const products = useLoaderData();

    const { name, image, owner, description, tags, external_link, upvotes } = products

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content gap-6 flex-col lg:flex-row">
                    <img
                        src={image}
                        className="md:max-w-sm rounded-lg shadow-2xl" />

                    <div>

                        {/* Owner info */}
                        <div className="flex gap-4 items-center mb-6">
                            <img className="rounded-full object-cover w-20 h-20" src={owner.image} alt="owner" />
                            <div>
                                <h4 className="text-xl text-[#3A3F00] font-semibold font-serif">Posted By - {owner.name}</h4>
                                <p className="font-semibold text-gray-400">{owner.email}</p>
                            </div>
                        </div>


                        <h1 className="text-4xl font-bold text-[#3A3F00] font-serif">{name}</h1>
                        <div className="my-5">
                            <hr className="py-3 mr-12" />
                            <p className="text-gray-500 text-lg font-serif mb-1">{description}</p>
                            <Link to={external_link}><p className="underline text-[#3A3F00] hover:text-indigo-300">Explore Product</p></Link>
                            <div className="mt-4 space-x-2">
                                {tags.map((tag) => <div key={tag} className="badge badge-outline">{tag}</div>)}
                            </div>
                        </div>
                        <hr className="py-4 mr-24" />
                        <div className="flex gap-4 items-center">
                            <button className="flex items-center gap-1 text-[#3A3F00] hover:text-indigo-300 border py-0.5 px-2 rounded-lg hover:border-indigo-100 border-[#e1e2d7]"><BiSolidHomeHeart /> {upvotes} Upvote</button>
                            <button className="flex items-center gap-1 text-[#3A3F00] hover:text-red-900 border py-0.5 px-2 rounded-lg hover:border-red-800 border-[#e1e2d7]"><MdReport /> Report</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mb-16">
                <ProductReview productId={products._id}></ProductReview>
            </div>
        </div>
    );
};

export default Details;