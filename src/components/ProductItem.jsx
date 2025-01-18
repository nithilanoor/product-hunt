import { BiSolidHomeHeart } from "react-icons/bi";


const ProductItem = ({ item }) => {

    const { name, image, tags, upvotes } = item;

    return (
        <div className="card bg-base-100 shadow-xl border border-[#e1e2d7]">
            <figure>
                <img className="object-cover h-52 w-full"
                    src={image}
                    alt="Products" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#3A3F00] font-semibold font-serif">
                    {name}
                    <div className="badge bg-indigo-200 text-white">Featured</div>
                </h2>
            </div>
            <div className="card-actions justify-start mx-3">
                {tags.map((tag) => <div key={tag} className="badge badge-outline">{tag}</div>)}
            </div>
            <div className="card-actions justify-center my-6">
                <button className="flex items-center gap-1 text-[#3A3F00] hover:text-indigo-300 border px-1 rounded-lg hover:border-indigo-100 border-[#e1e2d7]"><BiSolidHomeHeart /> {upvotes}</button>
            </div>
        </div>
    );
};

export default ProductItem;