import { getToken, removeToken } from "../helpers/token";
import axiosInstance from "./axiosInstance";
import { STATUS_CODE } from "./constant";

axiosInstance.interceptors.request.use(
    function(request) {
        const accessToken = getToken();

        const newHeaders = {
            ...request.headers,
            Authorization: `Bearer ${accessToken}`,
        };

        request = {
            ...request,
            headers: newHeaders,
        };

        return request;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        return response;
    },
    async function(error) {
        const response = error.response;
        const status = response.status;
        // 401 - expired access token => refresh token
        if (status === STATUS_CODE.FORBIDDEN) {
            removeToken();
            window.location.href = "/auth/login";
        }
        return Promise.reject(error.response);
    }
);

export default axiosInstance;