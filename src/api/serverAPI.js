import axios from "axios";

const serverAPI = axios.create({
    baseURL: `https://fitness-api-gssp.onrender.com`,
    withCredentials: true,
});

export default serverAPI;
