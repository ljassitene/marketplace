const mongoose = require('mongoose');
const pedidoSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            unique: true,
            required: true
        },
        identifier: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        data: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
)

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido