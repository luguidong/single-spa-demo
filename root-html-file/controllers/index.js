const handlebar = require('handlebars');
const fs = require('fs')
const request = require('request-promise')

async function getStaticPath(serverPath){
    return new Promise(resolve=>{
        request(serverPath).then(res=>{
            let data = JSON.parse(res);
            resolve(data.app);
        })
    })
}

let fn_index = async (ctx,next)=>{
    let app1Path = await getStaticPath('http://localhost:3001');
    let app2Path = await getStaticPath('http://localhost:3002');
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
      let data = {app1:app1Path,app2:app2Path}
      content = template(data)
      ctx.response.body = content;
}

module.exports = {
    'GET /': fn_index,
    'GET *': fn_index
};