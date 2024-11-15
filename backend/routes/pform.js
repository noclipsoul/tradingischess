const express=require('express');
const router = express.Router();
const jwt= require('jsonwebtoken');
const PForm = require('../models/pform');





router.post('/pform/create' ,async (req,res) =>{

    try {
       data=req.body;
       pfm=new Product(data);
       savedpfm=await pfm.save();
       res.status(200).send(savedpfm);
    
    } catch (errorpform) {
        
      res.status(400).send(errorpform) 
    }
    
 });

 router.post('/pform/getall' ,async (req,res) =>{

   try {
      PForm= await PForm.find();
      res.status(200).send(PForm);
   
   } catch (errorpform) {
       
      res.status(400).send(errorpform) 
   }
   
});


router.post('/pform/delete/:id' ,async (req,res) =>{
      try{
         id=req.params.id;
         deletedPForm=await PForm.findOneAndDelete({_id:id})
         res.status(200).send(deletedPForm);
      }
         catch(error)
         {
            res.status(400).send(error)
         } 
});




router.post('/pform/update/:id' ,async (req,res) =>{
   try{
      id=req.params.id;
      newPForm=req.body
      updatedPForm=await PForm.findOneAndDelete({_id:id},newPForm)
      res.status(200).send(updatedPForm);
   }
      catch(error)
      {
         res.status(400).send(error)
      } 
});



module.exports=router;