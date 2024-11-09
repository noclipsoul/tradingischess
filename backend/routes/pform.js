const express=require('express');
const router = express.Router();
const User = require('../models/pform');

const jwt= require('jsonwebtoken');





router.post('/pform/create' ,async (req,res) =>{

    try {
       data=req.body;
       pfm=new Product(data);
       savedpfm=await pfm.save();
       res.send(savedpfm);
    
    } catch (errorpform) {
        
       res.send(errorpform) 
    }
    
    });








module.exports=router;