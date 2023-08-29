const express = require("express");
const { getAllPizza } = require("../controller/pizzaController");
const router = express.Router();

router.route('/getallpizzas').get(getAllPizza)


module.exports = router;
