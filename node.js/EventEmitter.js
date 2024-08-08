//熟悉监听器的附加，计数，解除

var events=require('events');
//为events创建监听器
var eventEmitter=new events.EventEmitter();
//监听函数1
var listener1=function listener1() {
    console.log('listener1 is working...');
}
//监听函数2
var listener2=function listener2() {
    console.log('listener2 is working...');
}
//添加监听器
eventEmitter.addListener('connection', listener1);
//注册监听器
eventEmitter.on('connection', listener2);
//监听器计数
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners.");
//触发事件
eventEmitter.emit('connection');
//移除监听器
eventEmitter.removeListener('connection', listener1);
console.log('listerner1 never listen.');
//触发
eventEmitter.emit('connection');
//再计数
eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners.");

console.log('the end.');