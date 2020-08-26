
const express = require("express");
const router = express.Router();
const userControllr = require("../controllers/user_controller");
const autho = require('../controllers/authcontroller');
router.post("/user/new", userControllr.create);
router.post('/login',autho.login);
router.get("/users", userControllr.findAll);
router.get("/user/:id", userControllr.findOne);
router.put("/user/:id", userControllr.UpdateUser);
router.delete("/user/erase/:id", userControllr.delete);
module.exports = router;
