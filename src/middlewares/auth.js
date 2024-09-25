import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Acesso negado" });
    }
    token = token.replace("Bearer ", "");

    const decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }

  next();
}

export default auth;
