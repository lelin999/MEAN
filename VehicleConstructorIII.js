function VehicleConstructor(name, wheels, passengers, speed) {
	var self = this;
	var distance_travelled = 0
	function updateDistanceTravelled() {
		distance_travelled += self.speed;
		console.log(distance_travelled);
	}

	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;

	this.makeNoise = function() {
		console.log( "honk honk!?")
	}
	this.move = function() {
		this.makeNoise();
		updateDistanceTravelled();
	}
	this.checkMiles = function () {
		console.log(distance_travelled);
	}
}
var car = new VehicleConstructor("car", 4, 5, 90)

var bike = new VehicleConstructor("bike", 2, 1, 10);
bike.makeNoise = function() {
	console.log( "ring ring");
};

var sedan = new VehicleConstructor("sedan", 4, 5, 100);
sedan.makeNoise = function() {
	return "honk honk";
}

var bus = new VehicleConstructor("bus", 4, 0, 50);
bus.addPassengers = function(num) {
	this.passengers += num;
	return this.passengers;
};


console.log(bike.move())
console.log(car.checkMiles())