const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const staticFiles = require('./static-files');
const cors = require('koa2-cors');

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(cors({
  origin: function(ctx) { //设置允许来自指定域名请求
      return "*"
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
app.use(staticFiles('/dist/',__dirname+'/dist'))

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

app.listen(3002);