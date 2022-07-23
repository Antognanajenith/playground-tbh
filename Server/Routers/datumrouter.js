const Router = require('express').Router();
const Objmodel = require("../Models/datumobj.js");

Router.get("/",async(req,res)=>{
    try{
        const usered = await Objmodel.find();
        res.status(201).json(usered);
    }catch(err){    
        res.status(500).json(err);
    }
})

Router.post("/" ,async(req,res)=>{
    const Newpin = new Objmodel(req.body)
    try{
        const Savedpin = await Newpin.save();
        res.status(200).json(Savedpin);
    }catch(err){
        res.status(500).json(Savedpin);
    }
});


module.exports = Router;

