const express = require("express");
const router = express.Router();
const {sayHi} = require("../Controllers/user"); 

router.get("/api", sayHi); 

module.exports = router;
