const express=require('express');
const router = express.Router();


const Product = require('../models/product');


   
router.post('/create', async (req, res) => {
   try {
     const data = req.body;
     const prod = new Product(data);
     const savedProd = await prod.save();
     res.status(200).send(savedProd);
   } catch (errorprodc) {
     res.status(400).send(errorprodc);
   }
 });
 
  
   router.get('/getall' ,async (req,res) =>{
      console.log('getall comes');
     try {
      Prod= await Product.find();
        res.status(200).send(Prod);
     
     } catch (errorProdgta) {
         
        res.status(400).send(errorProdgta) 
     }
     
  });
  
  
  router.post('/delete/:id' ,async (req,res) =>{
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
  
  
  
  
  router.post('/update/:id' ,async (req,res) =>{
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
  




module.exports = router;