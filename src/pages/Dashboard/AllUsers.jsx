import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        text: `${user?.name} is an Admin now!`,
                        color: "#3A3F00",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    const handleMakeModerator = user => {
        axiosSecure.patch(`/users/moderator/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        text: `${user?.name} is a Moderator now!`,
                        color: "#3A3F00",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <div>
            <h3 className="text-xl font-bold text-[#3A3F00]">All Users: ({users.length})</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs bg-[#3A3F00] text-white">Make Admin</button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'moderator' ? 'Moderator' : <button onClick={() => handleMakeModerator(user)} className="btn btn-xs bg-[#3A3F00] text-white">Make Moderator</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;