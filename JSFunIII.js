var personConstructor = function(name) {
	this.name = name;
	this.distance_traveled = 0;
	this.say_name = function() {
		console.log(this.name);
		return this;
	};
	this.say_something = function(str) {
		console.log(this.name + " says " + str);
		return this;
	};
	this.walk = function() {
		console.log(this.name + " is walking.");
		this.distance_traveled += 3;
		return this;
	};
	this.run = function() {
		console.log(this.name + " is running.");
		this.distance_traveled += 10;
		return this;
	};
	this.crawl = function() {
		console.log(this.name + " is crawling.");
		this.distance_traveled += 1;
		return this;
	}
};

var ninjaConstructor = function(name, cohort) {
	this.name = name;
	this.cohort = cohort;
	this.beltLevel = "Yellow";
	this.levelUp = function() {
		if (this.beltLevel === "Yellow") {
			this.beltLevel = "Red";
		} else if (this.beltLevel === "Red") {
			this.beltLevel = "Black";
		} else {
			console.log("You can't level up anymore! You're already a true master!")
		}
		return this;
	}
};