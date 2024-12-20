const mongoose = require("mongoose");

const EntitySchema = new mongoose.Schema({
  entityName: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Associated product
  formName: { type: String, required: true }, // Reference to the form
});

module.exports = mongoose.model("Entity", EntitySchema);
