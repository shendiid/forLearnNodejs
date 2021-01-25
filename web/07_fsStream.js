// 新建 fs
const fs = require('fs');
/*------流输出------*/ 
// 流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');
// 读取次数
let count = 0;
// 保存数据
let str = '';
// 开始读取
fileReadStream.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}个字符`);
  // Console：1 接收到：30
  str += chunk;
})
// 读取完成
fileReadStream.on('end', () => {
  console.log("——结束——");
  console.log(count);
  console.log(str);

  // Console：——结束——
  // 1
  // console.log("Hello World！");
})
// 读取失败
fileReadStream.on('error', (error) => {
  console.log(error);
})

/*------流存入------*/ 
let data ='this is my node';
// 创建一个可以写入的流，写入到文件 index.js 中

let fileWriteStream=fs.createWriteStream('index.js');
//开始写入
fileWriteStream.write(data,'utf-8');
fileWriteStream.end();
fileWriteStream.on('finish',()=>{
    console.log('写入完成');
})