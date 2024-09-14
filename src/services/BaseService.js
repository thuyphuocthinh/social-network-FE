import axios from "axios";
import Cookie from "js-cookie";
import { TOKEN } from "../config/constant";

const token = Cookie.get(TOKEN);

export class BaseService {
  constructor() {}

  get(api) {
    return axios.get(api, {
      headers: {
        Authorization: `BEARER ${token}`,
      },
    });
  }

  post(api, data) {
    return axios.post(api, data, {
      headers: {
        Authorization: `BEARER ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  put(api, data) {
    return axios.put(api, data, {
      headers: {
        Authorization: `BEARER ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  patch(api, data) {
    return axios.put(api, data, {
      headers: {
        Authorization: `BEARER ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  delete(api) {
    return axios.delete(api, {
      headers: {
        Authorization: `BEARER ${token}`,
      },
    });
  }
}
