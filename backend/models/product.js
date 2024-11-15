
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    discription: String,
    price: Float,
    pforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PForm' }]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
