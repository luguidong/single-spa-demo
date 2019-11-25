const handlebar = require('handlebars');
const fs = require('fs')
const request = require('request-promise')

async function getStaticPath(){
    return new Promise(resolve=>{
        request('http://localhost:3001').then(res=>{
            let data = JSON.parse(res);
            resolve(data.app);
        })
    })
}

let fn_index = async (ctx,next)=>{
    let app1Path = await getStaticPath();
    
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
      let data = {app1:app1Path}
      content = template(data)
      ctx.response.body = content;
}

module.exports = {
    'GET /': fn_index,
    'GET *': fn_index
};