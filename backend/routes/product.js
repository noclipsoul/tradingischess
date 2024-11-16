const express=require('express');
const router = express.Router();
const User = require('../models/product');
const jwt= require('jsonwebtoken');
const Product = require('../models/product');


   

    router.post('/product/create' ,async (req,res) =>{

      try {
         data=req.body;
         prod=new Product(data);
         savedprod=await prod.save();
         res.status(200).send(savedprod);
      
      } catch (errorprodc) {
          
        res.status(400).send(errorprodc) 
      }
      
   });
  
   router.post('/product/getall' ,async (req,res) =>{
  
     try {
      Prod= await Product.find();
        res.status(200).send(Prod);
     
     } catch (errorProdgta) {
         
        res.status(400).send(errorProdgta) 
     }
     
  });
  
  
  router.post('/product/delete/:id' ,async (req,res) =>{
        try{
           id=req.params.id;
           deletedProd=await Product.findOneAndDelete({_id:id})
           res.status(200).send(deletedProd);
        }
           catch(errorProddel)
           {
              res.status(400).send(errorProddel)
           } 
  });
  
  
  
  
  router.post('/product/update/:id' ,async (req,res) =>{
     try{
        id=req.params.id;
        newProd=req.body
        updatedProd=await Product.findOneAndDelete({_id:id},newProd)
        res.status(200).send(updatedProd);
     }
        catch(errorProdupdate)
        {
           res.status(400).send(errorProdupdate)
        } 
  });
  




module.exports=router;