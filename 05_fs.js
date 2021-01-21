let fs=require("fs");
// 通过 fs.stat 检查一个读取的是文件还是目录
fs.stat('index.js',(error,stats)=>{
    if(error){
        console.log(error);
    }else{
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        console.log(`目录：${stats.isDirectory()}`); 
        return false;
    }
})

/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.mkdir('css',(err)=>{
    if(err){
        console.log(err);
        return false;
    }else{
        console.log("创建目录成功！");
        //Console：创建目录成功！
    }
})

/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.rmdir('css', (err) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log("删除目录成功！");
    // Console：删除目录成功！
  }
})

/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 */
//  3. fs.writeFile
fs.writeFile('index.js','Hello world!',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('写入成功！')//覆盖写入
    }
})
//  4. fs.appendFile
fs.appendFile('index.js','and node！',(error)=>{
    if(error){
        console.log(error);
        return false;
    }else{
        console.log('追加写入成功！')//追加写入
    }
})

// 5. fs.readFile
fs.readFile('index.js',(err,data)=>{
    if(err){
        console.log(err);
        return false;
    }else{
        console.log('读取成功！');
        console.log(data);
    }
})
// 6. fs.readdir 读取目录
fs.readdir('node_modules',(err,data)=>{
    if(err){
        console.log(err);
        return false;
    }else{
        console.log('读取目录成功！');
        console.log(data);
    }
})

// 7. fs.rename 重命名
// fs.rename('index.js','sdd.js',(err)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }else{
//         console.log('重命名成功！');
//     }
// })

// 7. fs.rename 剪切
fs.rename('sdd.js', 'node_modules/jsliang.js', (err) => {
    if(err) {
      console.log(err);
      return false;
    } else {
      console.log("剪切成功！");
    }
})