// models/PForm.js

const mongoose = require('mongoose');

// Define `PForm` schema
const pformSchema = new mongoose.Schema({
    form_component: [{ type: mongoose.Schema.Types.ObjectId, ref: 'formcomp' }]

});

// Export the PForm model
const PForm = mongoose.model('PForm', pformSchema);
module.exports = PForm;
