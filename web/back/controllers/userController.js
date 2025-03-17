const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  register: async function (req, res) {
    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser) return res.status(400).send("Email already registred");

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    try {
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  login: async function (req, res) {
    try {
      const selectedUser = await User.findOne({ email: req.body.email });
      if (!selectedUser)
        return res.status(400).send("Email or password incorrect");

      const passwordMatch = bcrypt.compareSync(
        req.body.password,
        selectedUser.password
      );
      if (!passwordMatch)
        return res.status(400).send("Email or password incorrect");

      const token = jwt.sign(
        { _id: selectedUser.id },
        process.env.TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      // res.header('authorization-token',token);
      res.json({ token: token });
    } catch (error) {
      res.send(error).status(400);
    }
  },
};

module.exports = userController;
