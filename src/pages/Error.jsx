import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
            <div className="relative">
                <h1 className="text-7xl font-bold text-[#3A3F00] mb-4">404</h1>
                <p className="text-xl text-[#aeafa3]">Oops! The page you're looking for doesn't exist.</p>
                
                <Link to="/">
                    <button className="btn hover:bg-[#F4F1EC] bg-[#8f9182] text-white hover:text-[#3A3F00] text-lg font-serif my-8">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;