import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://product-hunt-server-nu.vercel.app'
})


const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;