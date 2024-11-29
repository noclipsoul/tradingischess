const express=require('express');
const router = express.Router();
const User = require('../models/users');

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



router.post('/create', async (req, res) => {
   try {
     const data = req.body;
     const usr = new User(data);
     const savedProd = await usr.save();
     res.status(200).send(savedProd);
   } catch (errorprodc) {
     res.status(400).send(errorprodc);
   }
 });

router.post('/register' ,async (req,res) =>{

   data=req.body;
   usr=new User(data);
   salt=bcrypt.genSaltSync(10);
   cryptedPass=await bcrypt.hashSync(data.password,salt);
   usr.password=cryptedPass;
   usr.save()
      .then(
         (saved)=>{
            res.status(200).send(saved)
         }
      )
      .catch(
         (err)=>{
            res.status(400).send(err)
         }
      )
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


router.get('/getall' ,async (req,res) =>{

  try {
   usr= await User.find({});
     res.status(200).send(usr);
  
  } catch (errorUsrgta) {
      
     res.status(400).send(errorUsrgta) 
  }
  
});

router.get('/getuser/:id', async (req, res) => {
   try {
     // Corrected the query to use req.params.id for the user lookup
     const usr = await User.findById(req.params.id); 
 
     // Check if the user exists
     if (!usr) {
       return res.status(404).send({ message: "User not found" });
     }
 
     // Return the user if found
     res.status(200).send(usr);
   } catch (errorUsrgta) {
     // Handle errors, such as invalid ID format
     console.error(errorUsrgta);
     res.status(400).send({ message: "Error fetching user", error: errorUsrgta });
   }
 });
 

router.get('/delete/:id' ,async (req,res) =>{
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


router.put('/user/update/:id', async (req, res) => {
   const { id } = req.params;
   const data = req.body;
 
   try {
     const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
     res.status(200).send(updatedUser);
   } catch (err) {
     res.status(400).send({ message: "Error updating user", error: err });
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







router.put('/user/update/:id', async (req, res) => {
   const { id } = req.params;
   const data = req.body;
 
   try {
     const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
     res.status(200).send(updatedUser);
   } catch (err) {
     res.status(400).send(err);
   }
 });
 



module.exports=router;