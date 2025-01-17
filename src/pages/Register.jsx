import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="w-11/12 mx-auto md:w-96">
                <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                    <h3 className="text-center text-[#3A3F00] text-2xl font-bold p-4">Sign Up</h3>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00]">
                                Sign Up
                            </button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            Social Login
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