const db = require("../models");

module.exports = {
  registerUser: function (req,res){
    console.log("registering User");
    res.json("registering User");

    // db.User
    // .create(req.body)
    // .then(result => res.json(result))
    // .catch(error => console.log(error));
  }
}