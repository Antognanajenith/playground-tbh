const mongoose = require("mongoose");

const Datumobjc = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
    },
    title:{
        type:String,
        required:true,
        min:3,
    },
    age:{
        type:Number,
        required:true,
        min:1,
    },
},{ collection: 'Collection21' },
{timestamps:true})

const Objmodel = mongoose.model("Collection21",Datumobjc);
module.exports =  Objmodel;