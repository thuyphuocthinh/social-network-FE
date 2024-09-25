import { DOMAIN } from "../config/constant";
import { BaseService } from "./BaseService";

class PostService extends BaseService {
  getPostsByUser(userId, skipItem) {    
    return this.get(`${DOMAIN}/posts/getByUser/${userId}/${skipItem}`);
  }
}

export const postService = new PostService();
