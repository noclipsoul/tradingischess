const express=require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');




router.post('/user/register' ,async (req,res) =>{

try {
   data=req.body;
   usr=new User(data);
   savedUser=await usr.save();
   res.send(savedUser);

} catch (errorUser) {

   res.send(errorUser) 
}

})








module.exports=router;