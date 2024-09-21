import { DOMAIN } from "../config/constant";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
  update(updateInfo) {
    return this.patch(`${DOMAIN}/users/update`, updateInfo);
  }

  getDetail(userId) {
    return this.get(`${DOMAIN}/users/getDetail/${userId}`);
  }
}

export const userService = new UserService();
