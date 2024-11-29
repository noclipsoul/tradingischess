const express = require ('express');
require ('./config/connect');
const app = express();
app.use(express.json());


const UserRoute=require('./routes/user');
const ProductRoute=require('./routes/product');
const PformRoute=require('./routes/pform');
app.use('/product', ProductRoute);
app.use('/user', UserRoute);
app.use('/pform', PformRoute);



app.listen(5000,()=>   
{
    console.log('server is working');
}
);