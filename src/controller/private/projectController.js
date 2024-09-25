import projetoModel from "../../models/projeto.js";

class ProjectController {
  static async getAll(req, res) {
    try {
      const projetos = await projetoModel.find({});
      res.status(200).json(projetos);
    } catch (error) {
      res.status(400).json({ message: `Falha na requisição ${error.message}` });
    }
  }

  static async getByID(req, res, next) {
    try {
      const { id } = req.params;
      const projecFound = await projetoModel.findById(id);
      if (projecFound !== null) {
        res.status(200).json(projecFound);
      } else {
        res.status(404).json({ message: "ID não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    console.log(req.body);

    try {
      const newProject = await projetoModel.create(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      next(error);
    }
  }

  static async updatet(req, res, next) {
    try {
      const id = req.params.id;
      const project = await projetoModel.findByIdAndUpdate(id, req.body);
      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      await projetoModel.findByIdAndDelete(id);
      res.status(200).json({ message: "projeto deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default ProjectController;
