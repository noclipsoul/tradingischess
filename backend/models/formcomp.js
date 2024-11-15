
const mongoose = require('mongoose');

const FormCompSchema = new mongoose.Schema({
   
name: String,
data: [],
type: 
    {
        name: String,
        enum: ['checkbox', 'radiobox', 'dropdownlist'], 
        required: true
     }
});

const FormComp = mongoose.model('FormComp', FormCompSchema);
module.exports = FormComp;
