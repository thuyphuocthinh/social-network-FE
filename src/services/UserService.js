import axiosInstanceFormData from "../config/axiosFormData";
import { DOMAIN } from "../config/constant";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
  update(updateInfo) {
    return this.patch(`${DOMAIN}/users/update`, updateInfo);
  }

  getDetail(userId) {
    return this.get(`${DOMAIN}/users/getDetail/${userId}`);
  }

  updateAvatar(updateInfo) {
    return axiosInstanceFormData.patch(`${DOMAIN}/users/updateAvatar`, updateInfo);
  }

  updateCover(updateInfo) {
    return axiosInstanceFormData.patch(`${DOMAIN}/users/updateCover`, updateInfo);
  }
}

export const userService = new UserService();
