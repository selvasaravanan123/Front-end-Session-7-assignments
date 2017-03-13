var innerFunction = function(){
	console.log("Hello world from innerFunction ");

}

function outerFunction(func){
	func();
}

outerFunction(innerFunction);