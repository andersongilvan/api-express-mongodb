import projeto from "../../models/projeto.js";

class ProjetosController {
  static async listar(res) {
    try {
      const projetos = await projeto.find({});
      res.status(200).json(projetos);
    } catch (error) {
      res.status(400).json({ message: `Falha na requisição ${error.message}` });
    }
  }

  static async listarPorID(req, res, next) {
    try {
      const id = req.params.id;
      const projetoEncontrado = await projeto.findById(id);
      res.status(200).json(projetoEncontrado);
    } catch (error) {
      next(error);
    }
  }

  static async cadastrar(req, res) {
    console.log(req.body);

    try {
      const novoProjeto = await projeto.create(req.body);
      res.status(201).json(novoProjeto);
    } catch (error) {
      res.status(500).json({ message: `Falha ao cadastar ${error.message}` });
    }
  }

  static async atualizar(req, res, next) {
    try {
      const id = req.params.id;
      const projetAtualizado = await projeto.findByIdAndUpdate(id, req.body);
      res.status(200).json(projetAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async deletarProjeto(req, res, next) {
    try {
      const id = req.params.id;
      await projeto.findByIdAndDelete(id);
      res.status(200).json({ message: "projeto deletado com sucesso" });
    } catch (error) {
      next(error)
    }
  }
}

export default ProjetosController;
