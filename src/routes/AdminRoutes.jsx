import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";


const AdminRoutes = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;