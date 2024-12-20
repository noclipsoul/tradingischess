const express = require ('express');
require ('./config/connect');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const UserRoute=require('./routes/user');
const ProductRoute=require('./routes/product');
const PformRoute=require('./routes/pform');
const FormCompRoute=require('./routes/formcomp');



const formRoutes = require("./routes/formRoutes");
const entityRoutes = require("./routes/entityRoutes");


app.use('/product', ProductRoute);
app.use('/user', UserRoute);
app.use('/pform', PformRoute);
app.use('/formcomp', FormCompRoute);

app.use("/api", formRoutes);
app.use("/api", entityRoutes);

app.listen(5000,()=>   
{
    console.log('server is working');
}
);