const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        owner: {
            type: String,
            required: true
        },
        product: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, 'Preço: campo obrigatório']
        },
        description: {
            type: String,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
);


const Product = mongoose.model('Product', productSchema)

module.exports = Product
