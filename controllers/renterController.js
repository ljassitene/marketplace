const Product = require('../models/Product')
const Pedido = require('./../models/pedido')


exports.submitItem = async (req, res, next) => {
    try {
        const doc = await Product.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        })
    } catch (error) {
        res.send({ e: error })
    }
}

exports.requestItem = async (req, res, next) => {
    try {
        const doc = await Pedido.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        })

    } catch (error) {
        res.send({ e: error })
    }

}



exports.getItem = async (req, res, next) => {
    try {
        const doc = await Product.find().sort({ createdAt: -1, data: -1 })
        res.json({
            status: 'success',
            data: doc
        })
    } catch (error) {
        res.send({ e: error })
    }
}

exports.getMyItems = async (req, res, next) => {
    try {
        const doc = await Product.find({ owner: req.params.owner })
        res.json({
            status: 'success',
            data: doc
        })
    } catch (error) {
        res.send({ e: error })
    }
}



exports.getRequest = async (req, res, next) => {
    try {
        const doc = await Pedido.find({ identifier: req.params.identifier })
        res.json({
            status: 'success',
            data: doc
        })
    } catch (error) {
        res.send({ e: error })
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
        const doc = await Product.findByIdAndDelete(req.params.id)
        const docB = await Pedido.deleteMany({ identifier: req.params.id })
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.send({ e: error })
    }
}
