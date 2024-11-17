const express=require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');






router.post('/register' ,async (req,res) =>{

   try {
      data=req.body;
      usr=new User(data);
      savedusr=await User.save();
      res.status(200).send(savedusr);
   
   } catch (errorusrc) {
       
     res.status(400).send(errorusrc) 
   }
   
});

router.post('/getall' ,async (req,res) =>{

  try {
   usr= await User.find();
     res.status(200).send(usr);
  
  } catch (errorUsrgta) {
      
     res.status(400).send(errorUsrgta) 
  }
  
});


router.post('/delete/:id' ,async (req,res) =>{
     try{
        id=req.params.id;
        deletedusr=await User.findOneAndDelete({_id:id})
        res.status(200).send(deletedusr);
     }
        catch(errorUsrdel)
        {
           res.status(400).send(errorUsrdel)
        } 
});




router.post('/update/:id' ,async (req,res) =>{
  try{
     id=req.params.id;
     newusr=req.body
     updatedusr=await User.findOneAndDelete({_id:id},newusr)
     res.status(200).send(updatedusr);
  }
     catch(errorusrupd)
     {
        res.status(400).send(errorusrupd)
     } 
});











module.exports=router;