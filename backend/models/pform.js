const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  formName: { type: String, required: true, unique: true },
  components: { type: Array, default: [] }, // JSON structure of form components
});

module.exports = mongoose.model("Form", FormSchema);