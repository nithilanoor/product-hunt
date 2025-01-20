import { TbPremiumRights } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { VscVerifiedFilled } from "react-icons/vsc";


const MyProfile = () => {

    const { user } = useAuth();

    return (
        <div className="flex items-center gap-4">
            <img src={user?.photoURL} className="rounded object-cover" alt="user" />
            <div>
                <h3 className="text-xl font-bold">{user?.displayName}</h3>
                <p className="font-semibold"><span className="font-bold">Email:</span> {user?.email}</p>
                <button className="btn my-1 bg-[#F4F1EC] hover:bg-[#8f9182] hover:text-white text-[#3A3F00] font-serif"><TbPremiumRights className="text-lg text-yellow-500" /> Subscribe to Membership ($180)</button>
                <p className="flex items-center gap-1"><span className="font-bold">Status:</span><VscVerifiedFilled className="text-blue-800" />Verified</p>
            </div>
        </div>
    );
};

export default MyProfile;