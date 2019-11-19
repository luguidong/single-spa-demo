const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async (ctx,next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
})


app.use(async ctx => {
  fs.readFile('./dist/manifest.json',(err,ctx)=>{
    if(!err){
        ctx.body = ctx;
    }else{
        console.log('读取文件出错')
        console.log(err)
        ctx.body = '映射文件不存在';
    }
  })
  ctx.body = '映射文件不存在';
});

app.listen(3000);