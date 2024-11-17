

const mongoose = require('mongoose');


const pformSchema = new mongoose.Schema({
    form_component: [{ type: mongoose.Schema.Types.ObjectId, ref: 'formcomp' }]

});

const PForm = mongoose.model('PForm', pformSchema);
module.exports = PForm;
