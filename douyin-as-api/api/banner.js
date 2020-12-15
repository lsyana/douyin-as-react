var router = require('express').Router()
var sql = require('../sql')
var Banner = require('./../sql/models/Banner')
var {getUuid} = require('./../utils')
router.get('/', (req, res, next) => {
    res.send('轮播图列表')
})
/**
 * @api {post} /api/banner/add 添加轮播图
 * @apiName AddBanner
 * @apiGroup banner
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "插入轮播图成功！",
 *       "data": []
 *     }
 * @apiSampleRequest /api/banner/add
 */
router.post('/add', (req, res, next) => {
    console.log(req.body,req.query)
    var insertData = req.body;
    insertData.bannerid = 'bannerid_' + getUuid();
    sql.insert(Banner,insertData).then(data => {
        res.send({
            code: 200,
            message: '插入成功'
        })
    }).catch(err => {
        res.send({
            code: 10001,
            message: '插入失败'
        })
    })
    
})
router.get('/delete', (req, res, next) => {
    res.send('删除单张轮播图')
})
router.get('/deleteAll', (req, res, next) => {
    res.send('删除所有轮播图')
})
module.exports = router