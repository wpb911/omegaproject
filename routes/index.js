const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");


router.use("/api",function(req,res){
  res.send("api")
}
);

router.use(function(req, res) {
  res.send("test");
})
// router.use("/api",function(app){
//   app.get('/test', function(req,res){
//     res.sent("test")
//   })
// });



module.exports = router;