import post from "../../models/posts.model.js";

class PostController {
  static async create(req, res) {
    try {
      const newPost = await post.create(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: `Falha ao cadastrar ${error.message}` });
    }
  }
  static async getAll(req, res) {
    try {
      const allPosts = await post.find({});
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ message: `Falha na requisição ${error.message}` });
    }
  }

  static async getPostByID(req, res) {
    try {
      const id = req.params.id;
      const postFind = await post.findById(id);
      res.status(200).json(postFind);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao buscar recurso ${error.message}` });
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

  static async update(req, res) {
    try {
      const id = req.params.id;
      await post.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Post atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha na atualizacao ${error.message}` });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await post.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `Falha ao deletar ${error.message}` });
    }
  }
}

export default PostController;
