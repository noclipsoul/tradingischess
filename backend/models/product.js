
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    discription: String,
    price: Number,
    pforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PForm' }],
    image: String
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;
