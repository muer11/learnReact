
const fs = require('fs');
const router = require('koa-router')();

router.get('/index', async(ctx, next) => {
    // ctx.type = 'text/html';
    // ctx.body = fs.createReadStream('./views/index.html');
    await ctx.render('index');
});

router.get('/about/:name', async(ctx, next) => {
    ctx.body = `I am ${ctx.params.name}!`;
});

module.exports = router;