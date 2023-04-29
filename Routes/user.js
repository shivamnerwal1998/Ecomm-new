const express = require("express");
const router = express.Router();

router.get("/api",(req,resp)=>{
  resp.send("hello from Node");

})

module.exports = router;
