import postModel from "../../models/posts.model.js";
import PostService from "../service/postService.js";

class PostController {
  static async create(req, res, next) {
    try {
      const newPost = await PostService.createPost(req.body);
      return res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res) {
    try {
      const allPosts = await PostService.getAllPosts();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ message: `Falha na requisição ${error.message}` });
    }
  }

  static async getPostByID(req, res, next) {
    try {
      const id = req.params.id;
      const postFound = await postModel.findById(id);
      if (postFound !== null) {
        res.status(200).json(postFound);
      } else {
        res.status(404).json({ message: "ID não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }
  /*
  static async getPostByName(req, res) {
    try {
      const namePost = req.params.name;
      const postName = await post.findOne({ titulo: namePost });
      res.status(200).json(postName);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Recurso não encontrado ${error.message}` });
    }
  }
    */

  static async update(req, res, next) {
    try {
      const id = req.params.id;
      const postUpdate = await PostService.updatePost(id, req.body);
      res.status(200).json({ message: "Post atualizado com sucesso" });
    } catch (error) {
      res;
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;
      await PostService.deletePost(id);
      res.status(200).json({ message: "Post deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default PostController;
