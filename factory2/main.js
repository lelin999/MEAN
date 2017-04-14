var appModule = angular.module('app',[]);

appModule.factory('productFactory', function() {
	var factory = {};
	var products = [{name: 'Keyboard', price: 149.99}, {name: 'Mouse', price: 59.99}, {name: 'Basketball', price: 21.99}];

	factory.display = function(callback) {
		callback(products);
	};

	factory.add = function(product, callback) {
		products.push(product);
		callback(products);
	};

	factory.delete = function(product, callback) {
		products.splice(products.indexOf(product), 1);
		callback(products);
	};

	return factory;
});

appModule.controller('productController', function($scope, productFactory) {
	$scope.products = ["hi"];
	// $scope.products = function(){console.log("this does nothing.")}
	$scope.display = function(data) {
		$scope.products = data;
	};

	productFactory.display($scope.display);

	$scope.add = function() {
		productFactory.add($scope.newProduct, $scope.display);
		$scope.newProduct = null;
	};

	$scope.delete = function(product) {
		productFactory.delete(product, $scope.display);
	};

});