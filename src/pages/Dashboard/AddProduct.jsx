import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WithContext as ReactTags } from "react-tag-input";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AddProduct = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        tags: [],
        external_link: "",
        owner: {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
        },
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle tag input change
    const handleTagDelete = (i) => {
        setFormData({ ...formData, tags: formData.tags.filter((_, index) => index !== i) });
    };

    const handleTagAddition = (tag) => {
        setFormData({ ...formData, tags: [...formData.tags, tag] });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert tags array from objects to just text values
        const formattedTags = formData.tags.map(tag => tag.text);

        const productData = {
            ...formData,
            tags: formattedTags, // ✅ Now it will be saved correctly
            createdAt: new Date().toISOString(),
            upvotes: 0,
            status: "Accepted",
        };

        console.log(productData); // Check if the tags are now an array of strings

        await fetch("https://product-hunt-server-nu.vercel.app/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        });

        Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Product Added Successfully!",
            showConfirmButton: false,
            timer: 1500
        });

        navigate("/dashboard/myProducts")

    };


    return (
        <div className="md:w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg my-12 text-[#3A3F00]">
            <h2 className="text-2xl font-semibold mb-4">Add a New Product</h2>
            <form onSubmit={handleSubmit} className="">

                {/* Product Name */}
                <div>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required className="input input-bordered w-full" />
                </div>

                {/* Product Image */}
                <div>
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="url" name="image" placeholder="Product Image URL" onChange={handleChange} required className="input input-bordered w-full" />
                </div>

                {/* Description */}
                <div>
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea name="description" placeholder="Description" onChange={handleChange} required className="textarea textarea-bordered w-full"></textarea>
                </div>

                {/* External Link */}
                <div>
                    <label className="label">
                        <span className="label-text">External Link</span>
                    </label>
                    <input type="url" name="external_link" placeholder="Website / Landing Page" onChange={handleChange} className="input input-bordered w-full" />
                </div>

                {/* Tags Input */}
                <div>
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>

                    <ReactTags
                        tags={formData.tags}
                        handleDelete={handleTagDelete}
                        handleAddition={handleTagAddition}
                        inputFieldPosition="top"
                        allowDragDrop={false}
                        classNames={{
                            tags: "flex gap-2",
                            tag: "bg-[#8f9182] text-white px-3 font-bold flex gap-2 py-1 m-1 rounded",
                            tagInputField: "input input-bordered w-60",
                        }}
                    />
                </div>

                {/* Owner Info (Read-Only) */}
                <div className="bg-[#fcfbf9] shadow-lg p-4 my-6 rounded flex gap-4 items-center">
                    <img src={formData.owner.image} alt="Owner" className="w-12 object-cover h-12 rounded-full mt-2" />
                    <div>
                        <h3 className="font-semibold font-serif">Product Owner</h3>
                        <p><strong>Name:</strong> {formData.owner.name}</p>
                        <p><strong>Email:</strong> {formData.owner.email}</p>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00] text-lg font-serif w-full">Submit Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
