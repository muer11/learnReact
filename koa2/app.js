
const Koa = require('koa');
// const fs = require('fs');
// const router = require('koa-router')();  // ??为什么加括号
const app = new Koa();
const static = require('koa-static');
const main = static(__dirname + '/public');
const views = require('koa-views');


// app.use(async ctx => {
// //  ctx.body = 'Wise Wrong';
//     if(ctx.request.path === '/index'){
//         ctx.type = 'text/html';
//         ctx.body = fs.createReadStream('./views/index.html');
//     }else{
//         await next();
//     }
// });

const index = require('./routes/index');
app.use(index.routes(), index.allowedMethods());
 
app.use(main);

//渲染html文件
app.use(views(__dirname+'/views'));

//引入模板引擎
app.use(views(__dirname + '/views', {
    // extension: 'pug' // 以pug模板为例
}))

app.listen(4000);