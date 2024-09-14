import axios from "axios";
import { DOMAIN } from "../config/constant";
import { BaseService } from "./BaseService";

export class AuthService extends BaseService {
  loginService(user) {
    return axios.post(`${DOMAIN}/auth/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  registerService(user) {
    return this.post(`${DOMAIN}/auth/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
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
