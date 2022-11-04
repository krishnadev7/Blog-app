const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const Post = require('../model/postModel');

//Updating
const  Update = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSaltSync(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findOneAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
   return res.status(401).json('You are not authenticated');
  }
};

//Deleting
const Delete = async (req, res) => {
  if(req.body.userId === req.params.id){
    const user = await User.findById(req.params.id)
    if(user) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
      } catch (err) {
        res.status(400).json(err)
      }
       return res.status(203).json('User has been deleted');
    } else {
      return res.status(400).json('User not found!!!',err)
    }
  }else{
   return res.status(401).json('You are not authenticated');
  }
};
const GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {Update,Delete,GetUser}