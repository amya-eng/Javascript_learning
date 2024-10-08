//多个事件监听器同时被触发

var events=require('events');
var emitter=new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1:', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2:', arg2, arg1);
});
emitter.emit('someEvent', '参数1', '参数2');

console.log(emitter.listenerCount('someEvent'));  //输出监听器数量