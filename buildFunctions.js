var runningLogger = function() {
	console.log("I am running!");
};

var multiplyByTen = function(num) {
	return num * 10;
};
multiplyByTen(5);

var stringReturnOne = function() {
	return "Hello";
};
var stringReturnTwo = function() {
	return "World";
}

// var caller = function(arg) {
// 	if (typeof(arg) === "function") {
// 		arg();
// 	} else {
// 		return "Not a function";
// 	}
// };

var myDoubleConsoleLog = function(arg1, arg2) {
	if (typeof(arg1) === "function" && typeof(arg2) === "function") {
		console.log(arg1(), arg2());
	}
};

var caller2 = function(arg) {
	console.log("starting");
	var x = setTimeout(function () {
		if (typeof(arg) === "function") {
			arg(stringReturnOne, stringReturnTwo);
		}
	}, 2000)
	console.log("ending?");
	return "interesting";
}
caller2(myDoubleConsoleLog);