const userModel = require('../sql/mysql.js')
const jwtconfig = require('../jwtconfig/index.js')
exports.login = async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;    
    await userModel.login([username,password]).then(res=>{
        if(res.length === 0){
            ctx.body={
                code:201,
                msg:"登录失败"
            }
        }else{
            ctx.body={
                code:200,
                msg:"登录成功",
                user:res[0],
                token:jwtconfig.getToken({username})
            }
        }
    })
}