const express = require ('express');
require ('./config/connect');


const app = express();
app.use(express.json());


app.listen(3000,()=>
    
{

    console.log('server is working');

}

);