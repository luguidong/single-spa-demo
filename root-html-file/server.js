const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const handlebar = require('handlebars');
const router = require('koa-router')();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get('/',async (ctx,next)=>{
  let content = await new Promise((resolve,reject)=>{
    fs.readFile('./index.html', "utf8",(err,ctx)=>{
        if(!err){
            resolve(ctx);
        }else{
            reject('映射文件不存在 ')
        }
      })
  })
  let template = handlebar.compile(content);
  let data = {}
  content = template(data)
  ctx.response.body = content;
})

app.use(router.routes())

app.listen(3000);