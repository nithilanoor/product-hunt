import { TbPremiumRights } from "react-icons/tb";
import { Link } from "react-router-dom";


const SubscriptionBtn = () => {



    return (
        <div>
            <Link to="/dashboard/payment">
                <button className="btn my-1 bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] font-serif w-full"><TbPremiumRights className=" md:text-lg text-yellow-500" />Subscribe to Membership ($50)</button>
            </Link>
        </div>
    );
};

export default SubscriptionBtn;