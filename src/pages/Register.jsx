import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const { createUser, updateUserProfile } = useAuth();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        text: "Welcome to Product Hunt!",
                                        color: "#3A3F00",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/");

                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="w-11/12 mx-auto md:w-96">
                <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                    <h3 className="text-center text-[#3A3F00] text-2xl font-bold p-4">Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-900">This field is required</span>}
                        </div>

                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" required />
                            {errors.photoURL && <span className="text-red-900">Photo URL is required</span>}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-900">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === "required" && (
                                <p className="text-red-900">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-900">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-900">Password must be less than 20 characters</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00]">
                                Sign Up
                            </button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                    <div className='mx-auto py-4'>
                        <p className='text-[#3A3F00] font-semibold'>Already have an account? <Link to="/login"><span className='underline'>Sign In.</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;