$(function(){
	//循环对象为数组时，回调函数的参数为索引和对应的值
	$.each([0,1,2],function(i,n){
		debugger;
		console.log(" Item#"+i+":"+n);
	});
	//循环对象为对象时，回调函数的参数为key和对应的value值
	$.each({name:"zhangsan",age:10},function(i,n){
		debugger;
		console.log(" Item#"+i+":"+n);
	});
});