const userModel = require('../sql/mysql.js')
const jwtconfig = require('../jwtconfig/index.js')
exports.order = async ctx => {
    let user = ctx.query.userid;
    let pageSize = ctx.query.pageSize;
    let pageNum = ctx.query.pageNum;
    await userModel.order([user]).then(res=>{
        let data = res.slice((pageNum-1)*pageSize,pageNum*pageSize)
        ctx.body={
            data:data,
            total:res.length
        }
    })
}