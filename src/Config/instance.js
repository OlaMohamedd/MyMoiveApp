import axios from "axios";

const axiosInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params: {
        api_key: "2a739052fef16e42202e63708a1db4b3",
    },
})

export default axiosInstance;