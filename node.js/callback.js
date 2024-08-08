//阻塞代码

var fs=require('fs');
var data=fs.readFileSync('input.txt');

console.log(data.toString());
console.log("the end.");