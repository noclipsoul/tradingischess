const mongoose =require('mongoose');

const User=mongoose.model('User' , {

name:{
    type: String
},
email:{
    type: String
}

})


module.exports=User;