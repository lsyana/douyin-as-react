// 数据库连接池
var mongoose = require('mongoose')
var DB_URL = 'mongodb://10.20.159.157:27017/douyin-ms'

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
  console.log('db connect success')
})

mongoose.connection.on('disconnected', () => {
  console.log('db connect fail')
})

mongoose.connection.on('error', () => {
  console.log('db connect error')
})

module.exports = mongoose