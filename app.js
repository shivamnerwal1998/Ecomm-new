const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Routes/user")

// app 
const app = express()

//db
mongoose.connect(process.env.DATABASE, 
  {
    useNewUrlParser : true,
    //useCreateIndex : true
  }).then(()=>{
console.log("Data base connected ");
  })

// app is using roujte Moduke 
app.use("/",userRoutes);


// port configuration
const port = process.env.PORT || 8000 ;

// if connection established successfully
app.listen(port, ()=>{
  console.log(` Server is running on port ${port}`);
})

