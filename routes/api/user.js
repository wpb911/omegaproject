const router = require("express").Router();
const UserController = require("../../controllers/UserController");

router.route("/register")
  .post(UserController.registerUser);


module.exports = router;