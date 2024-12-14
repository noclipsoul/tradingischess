const mongoose = require('mongoose');

const PFormSchema = new mongoose.Schema({
  form_components: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FormComp' }], // List of components
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Associated product
});

const PForm = mongoose.model('PForm', PFormSchema);
module.exports = PForm;
