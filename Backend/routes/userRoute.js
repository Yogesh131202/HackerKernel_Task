const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.render('index', { layout: false, title: "Welcome to My Page!" });
  });
router.get('/',userController.getUsers);
router.post('/add-user', userController.addUser);

module.exports = router;