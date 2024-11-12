// models/PForm.js

const mongoose = require('mongoose');

// Define `PForm` schema
const pformSchema = new mongoose.Schema({
   
});

// Export the PForm model
const PForm = mongoose.model('PForm', pformSchema);
module.exports = PForm;
