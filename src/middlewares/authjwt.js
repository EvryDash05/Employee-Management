const config = require("../config");
const jwt = require("jsonwebtoken");
//Models
const { User } = require("../models/user");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token available" });

  const decode = jwt.decode(token, config.SECRET);

  const user = User.findByPk(decode.user_id);

  if (!user) return res.status(404).json({ message: "User not found" });

  console.log(token);
  next();
};

const isAdmin = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token available" });

  const decode = jwt.decode(token, config.SECRET);

  const user = await User.findByPk(decode.user_id);

  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.user_role_id != "UR001")
    return res.status(404).json({ message: "Role not authorized" });

  next();
};

const isModerator = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token available" });

  const decode = jwt.decode(token, config.SECRET);

  const user = await User.findByPk(decode.user_id);

  console.log(user.role_id)
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.user_role_id != "UR002")
    return res.status(404).json({ message: "Role not authorized" });

  next();
};

module.exports = { verifyToken, isAdmin, isModerator };