/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

let fs = require('fs');
// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录
fs.stat('upload', (err) => {
    if (err) {
        console.log('找不到upload，正在创建..');
        fs.mkdir('upload', (err) => {
            if (err) {
                console.log('创建失败！');
                return false;
            } else {
                console.log('创建成功！');
            }
        })
    } else {
        console.log('存在uploda文件');
        return true;
    }
})

// 2. 找出 html 目录下面的所有的目录，然后打印出来
fs.readdir('node_modules', (err, data) => {
    if (err) {
        console.log('读取失败！+', err);
        return false;
    } else {
        console.log(data);
        let filesArry = [];
        (function getFile(i) {
            if (i == data.length) {
                // 打印出所有目录
                console.log("目录：");
                console.log(filesArry);
                return false;
            }
            // 判断目录是文件还是文件夹
            fs.stat('node_modules/' + data[i], (err, thisData) => {
                if (err) {
                    console.log(err);
                } else {
                    if (thisData.isDirectory()) {
                        filesArry.push(data[i]);
                    }
                    // 递归调用
                    getFile(i + 1);
                }
            })
        }
        )(0)
    }
})