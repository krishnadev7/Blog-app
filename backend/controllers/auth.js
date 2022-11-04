const bcrypt = require('bcrypt');
const User = require('../model/userModel');



//Register

 const Register = async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Login
const Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user) {return res.status(400).json('invalid credentials')}

    const validate = await bcrypt.compareSync(req.body.password, user.password);
    if(!validate) {return res.status(400).json('invalide credentials')}

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {Login,Register}