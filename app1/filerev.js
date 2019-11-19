
const fs = require('fs');
const filePath = './dist/js/';

let fileArr = [];

fs.readdir(filePath,(err,files)=>{
  if(err){
    console.log(err);
    return;
  }
  files.forEach(fileName=>{
    if(fileName.endsWith('.js') && fileName.startsWith('app.')){
      let manifest = {app:fileName};
      writeFile(JSON.stringify(manifest));
    }
  })
})

// 写入到manifest文件
function writeFile(data){
  fs.writeFile("./dist/manifest.json",data,function(err){
    if(err) throw err;
    console.log("manifest生成成功");
  });
}