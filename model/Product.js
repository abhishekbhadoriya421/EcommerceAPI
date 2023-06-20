const db = require('mongoose');

const ProductSchema = db.Schema({
    // creating an Array of Product
    name: {
        type : String,
        require : true
    },
    quantity : {
        type : Number,
        require : true
    }
});

const Product = db.model('Product',ProductSchema);

module.exports = Product;