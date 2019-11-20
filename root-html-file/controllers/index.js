let fn_index = async (ctx,next)=>{
    let content = await new Promise((resolve,reject)=>{
        fs.readFile('../index.html', "utf8",(err,ctx)=>{
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
}

module.exports = {
    'GET /': fn_index
};