const mongoose = require('./../db')
const Schema = mongoose.Schema

const schema = new Schema({
    userid: { type: String, required: true },
    username: { type: String, required: false },
    password: { type: String, required: true },
    tel: { type: String, required: true },
    desc: { type: String, required: true },//简介
    headimg: { type: String, required: true },//头像
    backimg: { type: String, required: true },//背景图
    sex: { type: String, required: true },
    bitthday: { type: String, required: false },
    adress: { type: String, required: false },
    collectAnchor: { type: Array, required: false },//抖音号的收藏的主播（主播id列表）|移动端我的关注列表
    collecVideo: { type: Array, required: false },//抖音号的收藏的视频
    collecMusic: { type: Array, required: false },//抖音号的收藏的音乐
    collecTheme: { type: Array, required: false },//抖音号的收藏的话题
    fans: { type: Array, required: false },//抖音号的粉丝
    p01ublish: { type: Array, required: false },//抖音号的作品
    dynamic: { type: Array, required: false },//抖音号动态,存的是transpondid
    like: { type: Array, required: false },//抖音号喜欢的列表
    talk: { type: Array, required: false },//聊天列
})

module.exports = mongoose.model('dyuser', schema)