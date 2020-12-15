const mongoose = require('./../db')
const Schema = mongoose.Schema

const schema = new Schema({
    user: { type: String, required: true },
    orderid: { type: String, required: true },
    ordername: { type: String, required: true },
    price: { type: String, required: true },
    time: { type: String, required: true }
})

module.exports = mongoose.model('order ', schema)