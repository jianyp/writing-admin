const router = require('koa-router')()
const controller = require('../controller/order')

router.prefix('/order')

router.get('/userorder', controller.order)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
