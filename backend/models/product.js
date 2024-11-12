// models/Product.js

const mongoose = require('mongoose');

// Define `Product` schema with an array of ObjectIds referring to `PForm`
const productSchema = new mongoose.Schema({
    name: String,
    discription: String,
    price: Float,
    pforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PForm' }]
});

// Export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
