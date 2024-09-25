import bcrypt from "bcrypt";
import User from "../../models/userModel.js";
import jwt from "jsonwebtoken";

class UserController {
  /* static async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
    */

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (!verifyPassword) {
        return res.status(404).json({ message: "Senha inválida" });
      }

      const JWT_SECRET = process.env.JWT_SECRET;

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
      
      return res.status(200).json({token: token, userName: user.name});

    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default UserController;
