const express = require("express");
const router = express.Router();

router.get("/",(req,resp)=>{
  resp.send("hello from Node");

})

module.exports = router;
