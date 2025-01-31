const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
};
exports.addUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  try {
    await User.create({ name, email, mobile });
    res.redirect('/');
  } catch (error) {
    res.send('Error: ' + error.message);
  }
};