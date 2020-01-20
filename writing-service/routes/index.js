const router = require('koa-router')()
const controller = require('../controller/login')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.post('/login',controller.login)

module.exports = router
