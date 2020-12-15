var router = require('express').Router()
var sql = require('./../sql')
var Order = require('./../sql/models/Order')
var utils = require('./../utils')

router.get('/', (req, res, next) => {
    sql.find(Order, {}, { _id: 0, __v: 0 }).then(data => {
        res.status('200').send({
            code: '200',
            message: '会员订单数据',
            data
        })
    })
})
router.post('/add', (req, res, next) => {
    let insertData = req.body;
    insertData.orderid = 'orderid_' + utils.getUuid()
    // console.log(insertData)
    sql.insert(Order, insertData).then(() => {
        res.status('200').send({
            code: '200',
            message: '会员购买成功！'
        })
    })
    // res.send("成功！")
})

module.exports = router