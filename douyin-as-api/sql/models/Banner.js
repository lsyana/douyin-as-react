const mongoose = require('./../db')
const Schema = mongoose.Schema

const schema = new Schema({
  bannerid: { type: String, required: true },
  bannerimg: { type: String, required: true },
  link: { type: String, required: true },
  alt: { type: String, required: true }
})

module.exports = mongoose.model('banner', schema)