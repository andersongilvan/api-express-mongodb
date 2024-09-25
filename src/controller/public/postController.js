import postModel from "../../models/posts.model.js";
import PostService from "../../service/postService.js";

export async function getAllPosts(req, res) {
  try {
    const allPosts = await PostService.getAllPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Erro interno do servidor ${error.message}` });
  }
}

export async function getAllProjects(req, res) {
  try {
    const allProjects = await postModel.find({});
    return res.status(200).json(allProjects);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Erro interno do servidor ${error.message}` });
  }
}
