import axios from "axios";

const serverAPI = axios.create({
    baseURL: `https://fitness.philipnguyen.dev`,
    withCredentials: true,
});

export default serverAPI;
