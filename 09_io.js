/* let fs = require("fs");

 let getExt = (callback) => {
  fs.readFile('08_ext.json', (err, data) => {
    callback(data);
  })  
}

getExt( (result) => {
  console.log(result.toString());
})
 */

let fs = require('fs');
let events = require('events');
let EventEmitter = new events.EventEmitter();

getExt = () => {
    fs.readFile('08_ext.json', (err, data) => {
        EventEmitter.emit('data', data.toString());
    })
};

getExt();

//监听data
EventEmitter.on('data',ext=>{
    console.log(ext);
})