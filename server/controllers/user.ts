const {createUser, doesEmailExist} = require('../models/userFunctions');
// TODO refactor in controller and model different files

const registerUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    if (emailExists) {
      res.status(200).body({ status: 'send back user' });
    } else {
      const user = await createUser(email, password);
      res.status(201);
      res.body({ user: user });
    }
  } catch (error) {
    res.status(500);
    console.log('error in postUsers: ', error);
  }
};

const loginUser = async (req: any, res: any) => {
  const { email, password } = req.header;
  try {
    const emailExists = await doesEmailExist(email);
    const isPasswordRight = emailExists.password === password;
    if (emailExists && isPasswordRight) {
      res.status(201);
      res.body({ status: 'success' });
    } else {
      res.status(200);
      res.body({ status: 'Please register' });
    }
  } catch (error) {
    res.status(500);
    console.log('error in loginUsers: ', error);
  }
};
module.exports = { registerUser, loginUser };
