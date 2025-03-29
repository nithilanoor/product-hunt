import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Statistics = () => {

    const [stats, setStats] = useState({
        products: 0,
        users: 0,
        reviews: 0
    });
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axiosSecure.get("/stats");
                // const data = await res.json();
                setStats(res.data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);

    const data = [
        { name: "products", value: stats.products },
        { name: "users", value: stats.users },
        { name: "reviews", value: stats.reviews },
    ];

    const COLORS = ["#4CAF50", "#FF6347", "#800080"];

    return (
        <div className="container mx-auto p-6 text-[#3A3F00]">
            <h2 className="text-2xl font-bold mb-6">Admin Statistics</h2>
            <div className="bg-base-100 shadow-md p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Product Status Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="my-8 grid
             grid-cols-1 gap-4 *:rounded *:p-2 *:w-44 mx-auto text-center *:font-bold">
                <p className="text-xl font-medium shadow-md hover:shadow-[#F4F1EC] hover:shadow-xl hover:border-l-2">Products: {stats.products}</p>
                <p className="text-xl font-medium shadow-md hover:shadow-[#F4F1EC] hover:shadow-xl hover:border-l-2">Users: {stats.users}</p>
                <p className="text-xl font-medium shadow-md hover:shadow-[#F4F1EC] hover:shadow-xl hover:border-l-2">Reviews: {stats?.reviews || 0}</p>
            </div>
        </div>
    );
};

export default Statistics;