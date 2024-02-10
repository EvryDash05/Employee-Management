const authService = require("../service/authService");

const signUp = async (req, res) => {
  const userData = req.body;

  const response = await authService.signup(userData);

  res.status(200).json({
    message: response,
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const response = await authService.signin(email, password);
  
  res.status(200).json({
    message: response,
  });
};

module.exports = {
  signUp,
  signIn,
};
