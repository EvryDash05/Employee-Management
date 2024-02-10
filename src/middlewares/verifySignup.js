const { User } = require("../models/user");
const { ROLES } = require("../models/userRole");

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).json({ message: "The user already exists" });

  const eamil = await User.findOne({ username: req.body.username });

  if (eamil)
    return res.status(400).json({ message: "The email address is already" });

  next();
};

const checkRolesExisted = (req, res) => {
  req.body.roles.find();

  if (!req.body.roles)
    return res.status(400).json({ message: "No roles found" });

  for (let i = 0; i < req.body.roles.length; i++) {
    if (!ROLES.includes(req.body.roles[i])) {
      return res.status(400).json({
        message: `Role ${req.body.roles[i]} not found`,
      });
    }
  }

  next();
};

module.exports = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
}