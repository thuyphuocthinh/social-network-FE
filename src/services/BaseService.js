import axiosInstance from "../config/axiosInterceptor";

export class BaseService {
    constructor() {}

    get(api) {
        return axiosInstance.get(api);
    }

    post(api, data) {
        return axiosInstance.post(api, data);
    }

    put(api, data) {
        return axiosInstance.put(api, data);
    }

    patch(api, data) {
        return axiosInstance.patch(api, data);
    }

    delete(api) {
        return axiosInstance.delete(api);
    }
}