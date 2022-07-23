const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose =require("mongoose");
const cors = require("cors");

const Useredrouter = require("./Routers/datumrouter.js");


dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{console.log("mongo connected ra ambi")})
    .catch((err)=>console.log("error-",err));

app.use("/api/userdata",Useredrouter);

app.listen(4003 ,()=>{
    console.log("Server started perfectly");}
);