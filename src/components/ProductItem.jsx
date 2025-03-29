import { AiFillProduct } from "react-icons/ai";
import { BiSolidHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";


const ProductItem = ({ item }) => {

    const { _id, name, image, tags, upvotes, category } = item;

    return (
        <div className="card bg-base-100 shadow-xl border border-[#e1e2d7]">

            <figure>
                <img className="object-cover h-52 w-full"
                    src={image}
                    alt="Products" />

            </figure>

            <div className="card-body">
            <Link to={`/details/${_id}`}>
                <h2 className="card-title text-[#3A3F00] font-semibold font-serif md:text-sm lg:text-xl">
                    <AiFillProduct />{name}
                    <div className="badge bg-indigo-200 text-white text-xs">{category}</div>
                </h2>
                </Link>
            </div>

            <div className="card-actions justify-start mx-3">
                {tags.map((tag) => <div key={tag} className="badge badge-outline">{tag}</div>)}
            </div>
            <div className="card-actions justify-start mx-3 my-6">
                <button className="flex items-center gap-1 text-[#3A3F00] hover:text-indigo-300 border px-1 rounded-lg hover:border-indigo-100 border-[#e1e2d7]"><BiSolidHomeHeart /> {upvotes}</button>
            </div>
        </div>
    );
};

export default ProductItem;