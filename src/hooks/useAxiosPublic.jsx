import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-seven-sage.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;