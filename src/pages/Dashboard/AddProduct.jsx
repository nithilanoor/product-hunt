import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        category: '',
        image: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            await axios.post('/products', {formDataToSend: product}, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            Swal.fire({
                position: "top-end",
                icon: "success",
                text: "Your product has been added.",
                color: "#3A3F00",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/products');
        } catch (error) {
            console.log('failed to fetch product')
        }
    };

    return (
        <div className="max-w-3xl text-[#3A3F00] mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required className="textarea textarea-bordered w-full"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium">Website Link</label>
                    <input type="url" name="website" value={formData.website} onChange={handleChange} required className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} required className="select select-bordered w-full">
                        <option value="">Select a category</option>
                        <option value="Web App">Web App</option>
                        <option value="AI Tool">AI Tool</option>
                        <option value="Software">Software</option>
                        <option value="Game">Game</option>
                        <option value="Mobile App">Mobile App</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Product Image</label>
                    <input type="file" name="image" onChange={handleImageChange} required className="file-input file-input-bordered w-full" />
                </div>
                <button type="submit" className="btn bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] text-lg font-serif w-full">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
