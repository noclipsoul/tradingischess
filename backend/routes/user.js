const express=require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');


const multer=require('multer');
filename='';
const filestorage= multer.diskStorage({

   distanation:'./uploads',
   filename:(req,file,redirect)=>{
      let date=Date.now();
      let fl=date+'.'+file.mimetype.split('/')[1];
      redirect(null,fl);

   }
})

const upload=multer({storage: filestorage});



router.post('/register' ,async (req,res) =>{

   try {
      data=req.body;
      usr=new User(data);

      salt=bcrypt.genSalt(10);
      cryptedpass= await bcrypt.hashSync(data.password,salt);
      usr.password=cryptedpass;

      savedusr=await User.save();
      res.status(200).send(savedusr);
   
   } catch (errorusrc) {
       
     res.status(400).send(errorusrc) 
   }
   
});



router.post('/login' ,async (req,res) =>{

   try {
      data=req.body;
      usr=await User.findOne({email:data.email})

      if(!usr){
         res.status(402).send('email or password invalid')

      }else{
         validPass=bcrypt.compareSync(data.password,usr.password)
         if(!validPass){
            res.status(402).send('email or password invalid')
         }else{
            payload={
               _id:usr._id,
               email:usr.email,
               name:usr.name,
               image:usr.image
            }
            token=jwt.sign(payload,'C2qCY9062F69DUv|73Hq@')
            res.status(200).send({mytoken:token})
         }
      }
   
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