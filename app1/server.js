const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async (ctx,next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
})


app.use(async ctx => {
  let content = await new Promise((resolve,reject)=>{
    fs.readFile('./dist/manifest.json', "utf8",(err,ctx)=>{
        if(!err){
            resolve(ctx);
        }else{
            reject('映射文件不存在')
        }
      })
  })
  ctx.body = content;
});

app.listen(3000);