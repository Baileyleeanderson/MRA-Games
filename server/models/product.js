const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    img: {type: String}
});
mongoose.model('Product', productSchema);