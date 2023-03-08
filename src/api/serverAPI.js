import axios from "axios";

const serverAPI = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: true,
});

export default serverAPI;
