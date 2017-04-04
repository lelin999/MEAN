class VehicleConstructor {
	constructor(name, wheels, passengers, speed) {
		this.name = name;
		this.wheels = wheels;
		this.passengers = passengers;
		this.speed = speed;
	}
	makeNoise() {
		return "honk honk!?"
	}
}

var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function() {
	return "ring ring";
};

var sedan = new VehicleConstructor("sedan", 4, 5);
sedan.makeNoise = function() {
	return "honk honk";
}

var bus = new VehicleConstructor("bus", 4, 0);
bus.addPassengers = function(num) {
	this.passengers += num;
	return this.passengers;
};

console.log(bike.makeNoise())
console.log(bus.addPassengers(5))
console.log(bus.addPassengers(10))
console.log(bus.passengers)