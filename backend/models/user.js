const mongoose =require('mongoose');

const User=mongoose.model('User' , {

fullname:{
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