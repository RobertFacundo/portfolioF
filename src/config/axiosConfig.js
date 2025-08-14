import axios from "axios";

const BASE_URL = 'https://portfoliob-oir1.onrender.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export default axiosInstance;