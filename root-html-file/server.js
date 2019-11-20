const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const controller = require('./controller');

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});


app.use(controller())

app.listen(3000);