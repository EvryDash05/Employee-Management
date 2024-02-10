const { User, encryptPassword, comparePassword } = require("../models/user");
//const UserRole = require("../models/userRole");
const JWT = require("jsonwebtoken");
const config = require("../config");

const signup = async (userData) => {
  try {
    const newUser = await User.create(
      {
        user_id: userData.user_id,
        user_name: userData.user_name,
        user_email: userData.user_email,
        password: await encryptPassword(userData.password),
        user_role_id: userData.user_role_id,
      },
      {
        fields: ["user_id", "user_name", "user_email", "password", "user_role_id"],
      }
    );

    console.log(newUser.user_role_id);

    const token = JWT.sign({ user_id: newUser.user_id }, config.SECRET, {
      expiresIn: 86400, //24 hours
    });

    return token;
  } catch (error) {
    return error.message;
  }
};

const signin = async (email, password) => {
  try {
    const userFound = await User.findOne({ where: { user_email: email } });
    if (!userFound) {
      console.log("User not found");
      return "User not found";
    }

    const matchPassword = await comparePassword(password, userFound.password);

    if (!matchPassword) return "Invalid password";

    const token = JWT.sign({ user_id: userFound.user_id }, config.SECRET, {
      expiresIn: 86400, //24 hours
    });

    return token;
  } catch (error) {
    console.log("asdadadasdasdasd");
    return error.message;
  }
};

module.exports = {
  signup,
  signin,
};
