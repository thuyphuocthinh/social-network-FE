// src/api/axiosInstance.js
import axios from "axios";
import { DOMAIN } from "../config/constant";

const axiosInstance = axios.create({
    baseURL: DOMAIN,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
});

export default axiosInstance;