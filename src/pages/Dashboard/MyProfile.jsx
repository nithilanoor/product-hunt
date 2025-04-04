import useAuth from "../../hooks/useAuth";
import { VscVerifiedFilled } from "react-icons/vsc";
import SubscriptionBtn from "./SubscriptionBtn";


const MyProfile = () => {

    const { user } = useAuth();

    return (
        <div className="grid md:flex items-center gap-4 my-12 h-full p-8 rounded shadow-lg border-b-2 border-r-2 border-l-2 border-[#e0deda] shadow-[#e0deda] mx-auto">
            <img src={user?.photoURL} className="rounded object-cover w-40" alt="user" />
            <div>
                <h3 className="text-xl font-bold">{user?.displayName}</h3>
                <p className="font-semibold"><span className="font-bold">Email:</span> {user?.email}</p>
                <SubscriptionBtn></SubscriptionBtn>
                <p className="flex items-center gap-1"><span className="font-bold">Status:</span><VscVerifiedFilled className="text-blue-800" />Verified</p>
            </div>
        </div>
    );
};

export default MyProfile;