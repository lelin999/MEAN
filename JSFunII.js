function sum(x, y) {
	var output = 0;
	for (var i = x; i <= y; i++) {
		output += i;
	}
	console.log(output);
};

function min(arr) {
	var min = Infinity;
	for (var val of arr) {
		if (val < min) {
			min = val;
		}
	}
	return min;
};

function average(arr) {
	var total = 0;
	for (var val of arr) {
		total += val;
	}
	return total / arr.length;
};

var sum2 = function(x, y) {
	var output = 0;
	for (var i = x; i <= y; i++) {
		output += i;
	}
	console.log(output);
};

var min2 = function(arr) {
	var min = Infinity;
	for (var val of arr) {
		if (val < min) {
			min = val;
		}
	}
	return min;
};

var average2 = function(arr) {
	var total = 0;
	for (var val of arr) {
		total += val;
	}
	return total / arr.length;
};

var mathStuff = {
	sum: function(x, y) {
		var output = 0;
		for (var i = x; i <= y; i++) {
			output += i;
		}
		console.log(output);
	},
	min: function(arr) {
		var min = Infinity;
		for (var val of arr) {
			if (val < min) {
				min = val;
			}
		}
		return min;
	},
	average: function(arr) {
		var total = 0;
		for (var val of arr) {
			total += val;
		}
		return total / arr.length;	
	}
};

var person = {
	name: "Le Lin",
	distance_traveled: 0,
	say_name: function() {
		console.log(this.name);
		return this;
	},
	say_something: function(str) {
		console.log(this.name + " says " + str);
		return this;
	},
	walk: function() {
		console.log(this.name + " is walking.");
		this.distance_traveled += 3;
		return this;
	},
	run: function() {
		console.log(this.name + " is running.");
		this.distance_traveled += 10;
		return this;
	},
	crawl: function() {
		console.log(this.name + " is crawling.");
		this.distance_traveled += 1;
		return this;
	}
};