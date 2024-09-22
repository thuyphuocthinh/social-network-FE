// src/api/axiosInstance.js
import axios from "axios";
import { DOMAIN } from "../config/constant";
import { getToken, removeToken } from "../helpers/token";
import { STATUS_CODE } from "./constant";

const axiosInstanceFormData = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
  headers: { "Content-Type": "multipart/form-data" },
});

axiosInstanceFormData.interceptors.request.use(
  function (request) {
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
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstanceFormData.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
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

export default axiosInstanceFormData;
