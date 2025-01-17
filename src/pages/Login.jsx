import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import Swal from "sweetalert2";


const Login = () => {

    const { logIn } = useAuth();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    text: "Welcome Back! You are successfully logged in.",
                    color: "#3A3F00",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="w-11/12 mx-auto md:w-96">
                <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                    <h3 className="text-center text-[#3A3F00] text-2xl font-bold p-4">Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00]">
                                Login
                            </button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                    <div className='mx-auto py-4'>
                        <p className='text-[#3A3F00] font-semibold'>New here? Create a <Link to="/register"><span className='underline'>New Account</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;