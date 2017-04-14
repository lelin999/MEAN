var appModule = angular.module('app', []);

appModule.factory('productfactory',function($http) {
	var factory = {};
	var products = [{name: "Choclate chip", price: 5}];

	factory.index = function(callback) {
		callback(products);
	};

	factory.addProducts = function(product, callback) {
		products.push(product);
		callback(products);
	};

	factory.delete = function(product, callback) {
		products.splice(products.indexOf(product), 1);
		callback(products);
	};

	return factory;
});

appModule.controller('productController', function($scope, productfactory) {
	$scope.products = ["hi"];
	function setProducts(data) {
		$scope.products = data;
	}

	$scope.index = function() {
		productfactory.index(setProducts);
	}

	$scope.index();

	$scope.submit = function () {
		productfactory.addProducts($scope.newproduct, setProducts);

	};

	$scope.delete = function(product) {
		productfactory.delete(product, setProducts);

	};

});