// 封装数据库的增删改查
module.exports = {
    // 1. 插入数据库
    insert(CollectionName, insertData) {
        return new Promise((resolve, reject) => {
            // node 错误优先回调原则
            CollectionName.insertMany(insertData, (err) => {
                if (err) throw err;
                resolve()
            })
        })
    },
    // 2. 删除数据
    delete(CollectionName, whereData, deleteNum) {
        return new Promise(resolve => {
            const deleteType = deleteNum === 1 ? 'deleteMany' : 'deleteOne'
            CollectionName[deleteType](whereData, err => {
                if (err) throw err;
                resolve()
            })
        })
    },
    // 3. 更新数据
    update(CollectionName, whereData, updateData, updateNum) {
        return new Promise(resolve => {
            const updateType = updateNum === 1 ? 'updateMany' : 'updateOne'
            CollectionName[updateType](whereData, updateData, err => {
                if (err) throw err;
                resolve()
            })
        })
    },
    // 4. 查找数据
    find(CollectionName, whereData, showData) {
        return new Promise(resolve => {
            CollectionName.find(whereData, showData).exec((err, data) => {
                if (err) throw err;
                resolve(data)
            })
        })
    },
    // 分页
    paging(CollectionName, whereData, showData, count, limitNum) {
        limitNum = limitNum || 10
        count = count || 1
        return new Promise(resolve => {
            // 页码 不是从0  开始， 是从1开始，所以要减1
            CollectionName.find(whereData, showData).limit(limitNum).skip((count - 1) * limitNum).exec((err, data) => {
                if (err) throw err
                resolve(data)
            })
        })
    },
    // 计数
    count(CollectionName) {
        return new Promise(resolve => {
            CollectionName.find().estimatedDocumentCount((err, len) => {
                if (err) throw err
                resolve(len)
            })
        })
    },
    // 去重
    distinct(CollectionName, type) {
        return new Promise((resolve) => {
            CollectionName.distinct(type).exec((err, data) => {
                if (err) throw err
                resolve(data)
            })
        })
    }
}