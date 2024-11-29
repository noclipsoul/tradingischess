const mongoose =require('mongoose');

const User=mongoose.model('User' , {

user_name:{
    type: String
},

email:{
    type: String
},
password:{
    type: String
}

})


module.exports=User;