const buf=Buffer.from('hello world!', 'ascii');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('binary'));   //奇怪啊，这个还是输出hello world!

//创建一个长度为256的buffer
const buf0 = Buffer.alloc(256, 1);     //默认是用0填充
const buf1 = Buffer.allocUnsafe(256);
//写入buffer
len=buf0.write("hello world!");
console.log(len+' bytes has been written to buf0.');
//读取buffer
str0 = buf.toString("ascii");
str1 = buf.toString('ascii', 1, 3);

console.log(str0);
console.log(str1);

//将buffer转化为json对象, 转化后原buffer消失
const buf2=Buffer.from([0,1,2,3,4,5]);
const json=JSON.stringify(buf2);

console.log('json: ' + json);

//合并缓冲区
var buf3=Buffer.concat([buf0, buf2]);
console.log('buf3: ' + buf3.toString("ascii"));

var buf01=Buffer.from('nice job!');
//拷贝缓冲区
console.log(buf01.toString("ascii"));
buf01.copy(buf0, 12);     //将buf01插入到buf0指定位置
console.log('buf0: ' + buf0.toString("ascii"));

//裁剪
//裁剪功能返回的实际是原始缓存区 buffer 或者一部分，
//操作的是与原始 buffer 同一块内存区域。
var buf4=buf0.slice(0, 12);
console.log('buf4:' + buf4.toString());
//求长
console.log('buf4"s length: '+ buf4.length);
