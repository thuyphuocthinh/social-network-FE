import axios from "axios";
import { DOMAIN } from "../config/constant";

export class AuthService {
    loginService(user) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${DOMAIN}/auth/login`, user, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => resolve(response))
                .catch((error) => reject(error.response));
        });
    }
    registerService(user) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${DOMAIN}/auth/register`, user, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => resolve(response))
                .catch((error) => reject(error.response));
        });
    }
    verityToken(token) {
        return this.post(`${DOMAIN}/auth/verifyToken`, token, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export const authService = new AuthService();