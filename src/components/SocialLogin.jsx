import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            text: "Welcome to Product Hunt!",
                            color: "#3A3F00",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
            })
    }

    return (

        <div className="form-control">
            <button onClick={handleGoogleSignIn} className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00]"><FaGoogle></FaGoogle> Google</button>
        </div>

    );
};

export default SocialLogin;