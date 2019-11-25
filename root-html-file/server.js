const Koa = require('koa');
const app = new Koa();
const staticFiles = require('./static-files');
const controller = require('./controller');

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(staticFiles('/static/',__dirname+'/static'))
app.use(controller())

app.listen(3000);