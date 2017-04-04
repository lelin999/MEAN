function VehicleConstructor(name, wheels, passengers) {
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.makeNoise = function () {
		return "Honk Honk";
	}
};

var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function() {
	return "ring ring"
}

var sedan = new VehicleConstructor("sedan", 4, 5);
sedan.makeNoise = function() {
	return "honk honk?"
}

var bus = new VehicleConstructor("bus", 4, 0);
bus.addPassengers = function(num) {
	this.passengers += num;
	return this.passengers;
};


