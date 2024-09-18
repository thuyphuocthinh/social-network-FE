import Cookies from "js-cookie";
import { TOKEN } from "../config/constant";

export const getToken = () => {
    return Cookies.get(TOKEN);
};

export const removeToken = () => {
    Cookies.remove(TOKEN);
};

export const setToken = (value) => {
    Cookies.set(TOKEN, value);
};