const mongoose = require('mongoose');

const FormCompSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the component (e.g., "Size Selector")
  type: { 
    type: String, 
    enum:  [
        'checkbox', 
        'radiobox', 
        'dropdown', 
        'text', 
        'textarea', 
        'email', 
        'password', 
        'number', 
        'url', 
        'tel', 
        'date', 
        'time', 
        'datetime-local', 
        'color', 
        'file', 
        'range', 
        'search', 
        'multi-select', 
        'toggle', 
        'rating', 
        'image', 
        'rich-text', 
        'address', 
        'name', 
        'captcha', 
        'tags', 
        'dynamic-list', 
        'accordion', 
        'hidden', 
        'static-text'
      ],
    required: true 
  }, // Type of form input
  options: [String], // For checkbox, radio, and dropdown, these are the options
  placeholder: { type: String }, // For text or textarea
  required: { type: Boolean, default: false }, // Is this field mandatory?
  order: { type: Number }, // For drag-and-drop sorting
});

const FormComp = mongoose.model('FormComp', FormCompSchema);
module.exports = FormComp;
