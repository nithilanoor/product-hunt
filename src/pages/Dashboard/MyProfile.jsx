import useAuth from "../../hooks/useAuth";
import { VscVerifiedFilled } from "react-icons/vsc";
import SubscriptionBtn from "./SubscriptionBtn";


const MyProfile = () => {

    const { user } = useAuth();

    return (
        <div className="flex items-center gap-4">
            <img src={user?.photoURL} className="rounded object-cover" alt="user" />
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