const express=require('express');
const router = express.Router();
const User = require('../models/product');
const jwt= require('jsonwebtoken');





router.post('/product/create' ,async (req,res) =>{

    try {
       data=req.body;
       prd=new Product(data);
       savedProd=await prd.save();
       res.send(savedProd);
    
    } catch (errorProduct) {
        
       res.send(errorProduct) 
    }
    
    });
    







module.exports=router;