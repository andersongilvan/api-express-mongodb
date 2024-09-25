import postModel from "../models/posts.model.js";


class PostService {
  static async createPost(postData) {
    try {
     
      const newPost = await postModel.create(postData);
      return newPost;
    } catch (error) {
      throw error;
    }
  }

  static async getAllPosts() {
    try {
      const allPosts = await postModel.find({});

      return allPosts;
    } catch (error) {
      throw error;
    }
  }

  
  static async updatePost(id, post) {
    try {
      const postUpdate = await postModel.findByIdAndUpdate(id, post);
      return postUpdate;
    } catch (error) {
      return { message: error.message };
    }
  }

  static async deletePost(id) {
    try {
      await postModel.findByIdAndDelete(id);
    } catch (error) {
      return { message: error.message };
    }
  }
}

export default PostService;
