const jwtKoa  = require('koa-jwt'); 
const jwt = require('jsonwebtoken');

// token密匙
const secret = 'secret';
// 生成token
exports.getToken = (payload)=>{
    return jwt.sign(payload, secret, { expiresIn: '10' });
  }
// 验证token
exports.jwtKoa = jwtKoa({ secret: secret }).unless({
    // 设置login、register接口，可以不需要认证访问
    path: [
        // /^\/login/,
        /^\/register/,
        /^((?!\/api).)*$/   // 设置除了私有接口外的其它资源，可以不需要认证访问
    ]
  })  