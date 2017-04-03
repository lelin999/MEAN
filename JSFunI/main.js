var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
for (var val of x) {
	console.log(val);
}

x.push(100);

var y = ["Hello", "world", "JavaScript is Fun"]
x.push(y);
console.log(x);

var sum = 0;
for (var i = 1; i < 500; i++) {
	sum += i;
};
console.log(sum);

var arr1 = [1,-10,5,90,26,-3];
var min = arr1[0];
var sumAll = 0;
var average;
for (var val of arr1) {
	sumAll += val;
	if (val < min) {
		min = val;
	}
};
average = sumAll / arr1.length;
console.log(min);
console.log(average);

var newNinja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript',
	dojo: "Dallas"
};

for (elem in newNinja) {
	console.log(elem + ": " + newNinja[elem]);
}