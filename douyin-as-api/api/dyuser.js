var router = require('express').Router()
var sql = require('./../sql')
var Dyuser = require('./../sql/models/Dyuser')
var utils = require('./../utils')

router.get('/', (req, res, next) => {
    sql.find(Dyuser, {}, { _id: 0, __v: 0 }).then(data => {
        res.status('200').send({
            code: '200',
            message: '抖音号数据',
            data
        })
    })
})
router.post('/add', (req, res, next) => {
    let insertData = req.body;
    insertData.userid = 'userid_' + utils.getUuid()
    sql.insert(Dyuser, insertData).then(() => {
        res.status('200').send({
            code: '200',
            message: '添加抖音号成功！'
        })
    })
})

module.exports = router